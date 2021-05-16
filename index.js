import autolinkHeadings from 'rehype-autolink-headings';
import directive from 'remark-directive';
import fs from 'fs/promises';
import gfm from 'remark-gfm';
import glob from 'glob';
import h from 'hastscript';
import highlight from 'rehype-highlight';
import html from 'rehype-stringify';
import markdown from 'remark-parse';
import mkdirp from 'mkdirp';
import path from 'path';
import raw from 'rehype-raw';
import remark2rehype from 'remark-rehype';
import slug from 'rehype-slug';
import toc from 'remark-toc';
import unified from 'unified';
import visit from 'unist-util-visit';

const root = ``;

const head = `<!doctype html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&family=Source+Code+Pro&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="${root}/static/style.css">
        <script src="${root}/static/script.js" defer></script>
    </head>
    <body><div class="container">`;

const foot = `</div></body></html>`;

const onDirective = node => {
    const data = node.data || (node.data = {});
    const hast = h(node.name, node.attributes, node.children);

    if (hast.tagName === 'tabs') {
        data.hName = 'div';
        data.hProperties = {
            class: `tabs`,
        };
    } else if (hast.tagName === 'tab') {
        data.hName = 'div';
        data.hProperties = {
            class: `tab`,
            'data-title': hast.properties.title,
        };
    }
};

const transform = tree =>
    visit(
        tree,
        ['textDirective', 'leafDirective', 'containerDirective'],
        onDirective,
    );

const processor = unified()
    .use(markdown)
    .use(directive)
    .use(() => transform)
    .use(gfm)
    .use(toc)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(slug)
    .use(autolinkHeadings, { behavior: 'append' })
    .use(highlight)
    .use(raw)
    .use(html);

glob('src/**/*.md', async (error, files) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }

    await Promise.all(
        files.map(async file => {
            const data = await fs.readFile(file, { encoding: 'utf-8' });
            const doc = await processor.process(data);
            const { dir, name } = path.parse(file);

            const directories = dir.split(path.sep);
            directories[0] = 'docs';

            const newPath = directories.join(path.sep);
            await mkdirp(newPath);

            await fs.writeFile(
                `${newPath}${path.sep}${name}.html`,
                `${head}${doc}${foot}`,
            );
        }),
    );
});
