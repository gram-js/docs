# messages.GetDocumentByHash

No description found

### [](#example)Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const session = new StringSession("");
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  const result = await client.invoke(
    new Api.messages.GetDocumentByHash({
      sha256: Buffer.from("arbitrary data here"),
      size: 43,
      mimeType: "some string here",
    })
  );
  console.log(result); // prints the result
})();
```

:::

:::tab{title="TypeScript"}

```ts
import { Api, TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";

const session = new StringSession("");
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  const result: Api.Document = await client.invoke(
    new Api.messages.GetDocumentByHash({
      sha256: Buffer.from("arbitrary data here"),
      size: 43,
      mimeType: "some string here",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|   Name   | Type   | Description          |
| :------: | ------ | -------------------- |
|  sha256  | bytes  | No description found |
|   size   | int    | No description found |
| mimeType | string | No description found |

### [](#result)Result

Document

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
