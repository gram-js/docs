# messages.UploadImportedMedia

Upload a media file associated with an [imported chat, click here for more info »](https://core.telegram.org/api/import).

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result = await client.invoke(
    new Api.messages.UploadImportedMedia({
      peer: "username",
      importId: BigInt("-4156887774564"),
      fileName: "some string here",
      media: new Api.InputMediaUploadedPhoto({
        file: await client.uploadFile({
          file: new CustomFile(
            "file.bin",
            fs.statSync("../file.bin").size,
            "../file.bin"
          ),
          workers: 1,
        }),
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

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result: Api.MessageMedia = await client.invoke(
    new Api.messages.UploadImportedMedia({
      peer: "username",
      importId: BigInt("-4156887774564"),
      fileName: "some string here",
      media: new Api.InputMediaUploadedPhoto({
        file: await client.uploadFile({
          file: new CustomFile(
            "file.bin",
            fs.statSync("../file.bin").size,
            "../file.bin"
          ),
          workers: 1,
        }),
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

|     Name     | Type                                                    | Description                                                                                                                                                                           |
| :----------: | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   **peer**   | [InputPeer](https://core.telegram.org/type/InputPeer)   | The Telegram chat where the media will be imported                                                                                                                                    |
| **importId** | [long](https://core.telegram.org/type/long)             | Identifier of a [history import session](https://core.telegram.org/api/import), returned by [messages.initHistoryImport](https://core.telegram.org/method/messages.initHistoryImport) |
| **fileName** | [string](https://core.telegram.org/type/string)         | File name                                                                                                                                                                             |
|  **media**   | [InputMedia](https://core.telegram.org/type/InputMedia) | Media metadata                                                                                                                                                                        |

## Result

[MessageMedia](https://core.telegram.org/type/MessageMedia)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages

#### [Imported messages](https://core.telegram.org/api/import)

Telegram allows importing messages and media from foreign chat apps.

#### [messages.initHistoryImport](https://core.telegram.org/method/messages.initHistoryImport)

Import chat history from a foreign chat app into a specific Telegram chat, [click here for more info about imported chats »](https://core.telegram.org/api/import).
