# messages.UploadEncryptedFile

Upload encrypted file and associate it to a secret chat

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
    new Api.messages.UploadEncryptedFile({
      peer: new Api.InputEncryptedChat({
        chatId: 43,
        accessHash: BigInt("-4156887774564"),
      }),
      file: new Api.InputEncryptedFileUploaded({
        id: BigInt("-4156887774564"),
        parts: 43,
        md5Checksum: "some string here",
        keyFingerprint: 43,
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
  const result: Api.EncryptedFile = await client.invoke(
    new Api.messages.UploadEncryptedFile({
      peer: new Api.InputEncryptedChat({
        chatId: 43,
        accessHash: BigInt("-4156887774564"),
      }),
      file: new Api.InputEncryptedFileUploaded({
        id: BigInt("-4156887774564"),
        parts: 43,
        md5Checksum: "some string here",
        keyFingerprint: 43,
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|   Name   | Type                                                                    | Description                              |
| :------: | ----------------------------------------------------------------------- | ---------------------------------------- |
| **peer** | [InputEncryptedChat](https://core.telegram.org/type/InputEncryptedChat) | The secret chat to associate the file to |
| **file** | [InputEncryptedFile](https://core.telegram.org/type/InputEncryptedFile) | The file                                 |

## Result

[EncryptedFile](https://core.telegram.org/type/EncryptedFile)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages
