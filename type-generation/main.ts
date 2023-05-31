import { TypeGenerator } from "./type-generator/type-gen.ts";
import { getSchemaDefinition } from "./tl-parser/tl-parser.ts";
import { extendSchema } from "./docs/crawl.ts";

if (Deno.args.length < 1) {
  console.error("Usage: deno run main.ts <schema-url> [documentation-url]");
  Deno.exit(1);
}
const documentationUrl = Deno.args[1] || "https://corefork.telegram.org/";
const schemaUrl = Deno.args[0];

console.log("getting schema");
const schema = await fetch(schemaUrl).then((r) => r.text());
console.log("parsing schema");
const parseSchema = getSchemaDefinition(schema);
console.log("fetching documentation");
const extendedSchema = await extendSchema(parseSchema, {
  DocsBasePath: documentationUrl,
  language: "en",
});
const dtsFile = new TypeGenerator().generate(extendedSchema);

Deno.writeFileSync(
  "api.d.ts",
  new TextEncoder().encode(dtsFile),
);
