# messages.InitHistoryImport

Import chat history from a foreign chat app into a specific Telegram chat, [click here for more info about imported chats »](https://core.telegram.org/api/import).

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
    new Api.messages.InitHistoryImport({
      peer: "username",
      file: await client.uploadFile({
        file: new CustomFile(
          "file.bin",
          fs.statSync("../file.bin").size,
          "../file.bin"
        ),
        workers: 1,
      }),
      mediaCount: 43,
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

  const result: Api.messages.HistoryImport = await client.invoke(
    new Api.messages.InitHistoryImport({
      peer: "username",
      file: await client.uploadFile({
        file: new CustomFile(
          "file.bin",
          fs.statSync("../file.bin").size,
          "../file.bin"
        ),
        workers: 1,
      }),
      mediaCount: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|      Name      | Type                                                  | Description                                                                                                                                                               |
| :------------: | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    **peer**    | [InputPeer](https://core.telegram.org/type/InputPeer) | The Telegram chat where the [history should be imported](https://core.telegram.org/api/import).                                                                           |
|    **file**    | [InputFile](https://core.telegram.org/type/InputFile) | File with messages to import.                                                                                                                                             |
| **mediaCount** | [int](https://core.telegram.org/type/int)             | Number of media files associated with the chat that will be uploaded using [messages.uploadImportedMedia](https://core.telegram.org/method/messages.uploadImportedMedia). |

## Result

[messages.HistoryImport](https://core.telegram.org/type/messages.HistoryImport)

## Possible errors

| Code | Type                                    | Description                                                                             |
| :--: | --------------------------------------- | --------------------------------------------------------------------------------------- |
| 400  | IMPORT_FILE_INVALID                     | The specified chat export file is invalid.                                              |
| 400  | IMPORT_FORMAT_UNRECOGNIZED              | The specified chat export file was exported from an unsupported chat app.               |
| 406  | PREVIOUS_CHAT_IMPORT_ACTIVE_WAIT\_%dMIN | Import for this chat is already in progress, wait %d minutes before starting a new one. |

## Can bots use this method?

No

## Related pages

#### [Imported messages](https://core.telegram.org/api/import)

Telegram allows importing messages and media from foreign chat apps.

#### [messages.uploadImportedMedia](https://core.telegram.org/method/messages.uploadImportedMedia)

Upload a media file associated with an [imported chat, click here for more info »](https://core.telegram.org/api/import).
