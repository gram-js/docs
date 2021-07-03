# messages.GetDocumentByHash

Get a document by its SHA256 hash, mainly used for gifs

## Example

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

## Parameters

|     Name     | Type                                            | Description               |
| :----------: | ----------------------------------------------- | ------------------------- |
|  **sha256**  | [bytes](https://core.telegram.org/type/bytes)   | SHA256 of file            |
|   **size**   | [int](https://core.telegram.org/type/int)       | Size of the file in bytes |
| **mimeType** | [string](https://core.telegram.org/type/string) | Mime type                 |

## Result

[Document](https://core.telegram.org/type/Document)

## Possible errors

| Code | Type                | Description                         |
| :--: | ------------------- | ----------------------------------- |
| 400  | SHA256_HASH_INVALID | The provided SHA256 hash is invalid |

## Can bots use this method?

Yes

## Related pages
