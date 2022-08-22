import autolinkHeadings from "rehype-autolink-headings";
import directive from "remark-directive";
import fs from "fs/promises";
import gfm from "remark-gfm";
import glob from "glob";
import h from "hastscript";
import highlight from "rehype-highlight";
import html from "rehype-stringify";
import markdown from "remark-parse";
import mkdirp from "mkdirp";
import path from "path";
import raw from "rehype-raw";
import remark2rehype from "remark-rehype";
import slug from "rehype-slug";
import toc from "remark-toc";
import unified from "unified";
import remark from "remark";
import { visit } from "unist-util-visit";
import escapeHtml from "@youtwitface/escape-html";
import find from "unist-util-find";
import { minify } from "html-minifier";

const root = ``;

const head = (title, description) => `
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&family=Source+Code+Pro&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="${root}/static/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css">
    <script src="${root}/static/script.js" defer></script>
    <title>${escapeHtml(title)} | GramJS</title>
    <meta name="title" content="${escapeHtml(title)} | GramJS" />
    <meta name="description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://gram.js.org" />
    <meta property="og:title" content="${escapeHtml(title)} | GramJS" />
    <meta property="og:description" content="${escapeHtml(description)}" />
  </head>
  <body>`;

const foot = `
    <script src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"></script>
    <script>
      docsearch({
        apiKey: '007607fb54223b523130d51c9c9d30b5',
        indexName: 'gram',
        inputSelector: '#docsearch',
      });
    </script>
  </body>
</html>`;

const onDirective = (node) => {
  const data = node.data || (node.data = {});
  const hast = h(node.name, node.attributes, node.children);

  if (hast.tagName === "tabs") {
    data.hName = "div";
    data.hProperties = {
      class: `tabs`,
    };
  } else if (hast.tagName === "tab") {
    data.hName = "div";
    data.hProperties = {
      class: `tab`,
      "data-title": hast.properties.title,
    };
  }
};

const transform = (tree) =>
  visit(
    tree,
    ["textDirective", "leafDirective", "containerDirective"],
    onDirective
  );

const processor = unified()
  .use(markdown)
  .use(() => (tree) => {
    const node = find(tree, { type: "heading" });
    node.depth = Math.min(node.depth + 1, 6);

    return tree;
  })
  .use(directive)
  .use(() => transform)
  .use(gfm)
  .use(toc)
  .use(remark2rehype, { allowDangerousHtml: true })
  .use(slug)
  .use(autolinkHeadings, { behavior: "append" })
  .use(highlight)
  .use(raw)
  .use(html);

const treeProcessor = remark().use(() => (tree) => {
  const headingIndex = tree.children.findIndex(
    (child) => child.type === "heading" && child.depth === 1
  );

  const description = tree.children[headingIndex + 1];

  description.type = "paragraph";
  description.children = description.children.flatMap((child) =>
    child.type === "link" ? child.children : child
  );

  return {
    type: "root",
    children: [
      {
        ...tree.children[headingIndex],
        type: "paragraph",
      },
      description,
    ],
  };
});

const titleCase = (string) => {
  if (string === "tl") {
    return "TL";
  }

  return string
    .split(/-/)
    .map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
    .join(" ");
};

const linkTitle = (title, filePath, shouldLink = true) => {
  const escapedTitle = escapeHtml(title);

  return shouldLink
    ? `<a href="${root || ""}/${filePath}">${escapedTitle}</a>`
    : escapedTitle;
};

const generateSidebar = (object, directories) => {
  return Object.entries(object).reduce((sidebar, [key, value]) => {
    const filePath = (directories ?? [])
      .concat(key === "index" ? "" : key)
      .join("/");

    let hasSubList, title, children;
    if (directories && key === "index") {
      return sidebar;
    } else if (typeof value === "string") {
      title = linkTitle(value, filePath);
    } else {
      hasSubList = true;
      title = linkTitle(titleCase(value.index || key), filePath, !!value.index);
      children = `<ul data-sublist="${escapeHtml(filePath)}">${generateSidebar(
        value,
        (directories ?? []).concat(key)
      )}</ul>`;
    }

    return (
      sidebar +
      `<li ${
        hasSubList ? `data-li="${escapeHtml(filePath)}"` : ""
      }>${title}</li>${children ?? ""}`
    );
  }, "");
};

glob("src/**/*.md", async (error, files) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }

  const fileData = await Promise.all(
    files.map(async (file) => {
      const data = await fs.readFile(file, { encoding: "utf-8" });
      const doc = await processor.process(data);
      const titleDoc = await treeProcessor.process(data);

      let [title, ...description] = titleDoc.toString().split("\n");
      title = title.trim();
      description = description.join("\n").trim();

      const { dir, name } = path.parse(file);

      const directories = dir.split("/");
      directories[0] = "docs, ...directive";

      return {
        doc,
        name,
        title,
        description,
        directories: directories.slice(1),
      };
    })
  );

  const tree = await fileData.reduce(
    async (promise, { title, name, directories }) => {
      const tree = await promise;
      const currentTree = directories.reduce((t, d) => {
        if (!(d in t)) {
          t[d] = {};
        }

        return t[d];
      }, tree);

      currentTree[name] = directories[0] === "tl" ? name : title;
      return tree;
    },
    Promise.resolve({})
  );

  const sidebar = generateSidebar(tree);

  await Promise.all(
    fileData.map(async ({ doc, title, description, name, directories }) => {
      const fullPath = path.join("docs", ...directories);
      await mkdirp(fullPath);

      const html = `
        ${head(title, description.slice(0, 150))}
        <header class="container">
          <span class="menu-icon">
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.25%">
              <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24"></path>
            </svg>
          </span>
          <h1>GramJS</h1>
        </header>
        <main class="container page">
          <div class="sidebar">
            <ul>
              <input id="docsearch" placeholder="Search...">
              ${sidebar}
            </ul>
          </div>
          <div class="container content">${doc}</div>
        </main>
        ${foot}
      `;

      await fs.writeFile(
        `${fullPath}/${name}.html`,
        minify(html, {
          collapseWhitespace: true,
        })
      );
    })
  );
});
