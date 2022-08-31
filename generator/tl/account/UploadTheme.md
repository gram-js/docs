# account.UploadTheme

Upload theme

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
    new Api.account.UploadTheme({
      file: await client.uploadFile({
        file: new CustomFile(
          "file.bin",
          fs.statSync("../file.bin").size,
          "../file.bin"
        ),
        workers: 1,
      }),
      fileName: "some string here",
      mimeType: "some string here",
      thumb: await client.uploadFile({
        file: new CustomFile(
          "file.bin",
          fs.statSync("../file.bin").size,
          "../file.bin"
        ),
        workers: 1,
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

  const result: Api.Document = await client.invoke(
    new Api.account.UploadTheme({
      file: await client.uploadFile({
        file: new CustomFile(
          "file.bin",
          fs.statSync("../file.bin").size,
          "../file.bin"
        ),
        workers: 1,
      }),
      fileName: "some string here",
      mimeType: "some string here",
      thumb: await client.uploadFile({
        file: new CustomFile(
          "file.bin",
          fs.statSync("../file.bin").size,
          "../file.bin"
        ),
        workers: 1,
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name     | Type                                                                                                                                 | Description                                                                                             |
| :----------: | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
|  **flags**   | [#](https://core.telegram.org/type/%23)                                                                                              | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|   **file**   | [InputFile](https://core.telegram.org/type/InputFile)                                                                                | Theme file uploaded as described in [files »](https://core.telegram.org/api/files)                      |
|  **thumb**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputFile](https://core.telegram.org/type/InputFile) | Thumbnail                                                                                               |
| **fileName** | [string](https://core.telegram.org/type/string)                                                                                      | File name                                                                                               |
| **mimeType** | [string](https://core.telegram.org/type/string)                                                                                      | MIME type, must be `application/x-tgtheme-{format}`, where `format` depends on the client               |

## Result

[Document](https://core.telegram.org/type/Document)

## Possible errors

| Code | Type               | Description                  |
| :--: | ------------------ | ---------------------------- |
| 400  | THEME_FILE_INVALID | Invalid theme file provided. |

## Can bots use this method?

No

## Related pages

#### [Uploading and Downloading Files](https://core.telegram.org/api/files)

How to transfer large data batches correctly.
