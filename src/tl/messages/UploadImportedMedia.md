# messages.UploadImportedMedia

No description found

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
    new Api.messages.UploadImportedMedia({
      peer: "username",
      importId: BigInt("-4156887774564"),
      fileName: "some string here",
      media: new Api.InputMediaUploadedPhoto({
        file: client.uploadFile("/path/to/file.jpg"),
        stickers: [
          new Api.InputDocument({
            id: BigInt("-4156887774564"),
            accessHash: BigInt("-4156887774564"),
            fileReference: Buffer.from("arbitrary data here"),
          }),
        ],
        ttlSeconds: 43,
      }),
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
  const result: Api.MessageMedia = await client.invoke(
    new Api.messages.UploadImportedMedia({
      peer: "username",
      importId: BigInt("-4156887774564"),
      fileName: "some string here",
      media: new Api.InputMediaUploadedPhoto({
        file: client.uploadFile("/path/to/file.jpg"),
        stickers: [
          new Api.InputDocument({
            id: BigInt("-4156887774564"),
            accessHash: BigInt("-4156887774564"),
            fileReference: Buffer.from("arbitrary data here"),
          }),
        ],
        ttlSeconds: 43,
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|   Name   | Type       | Description          |
| :------: | ---------- | -------------------- |
|   peer   | InputPeer  | No description found |
| importId | long       | No description found |
| fileName | string     | No description found |
|  media   | InputMedia | No description found |

## Result

MessageMedia

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages
