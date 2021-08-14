# messages.SendEncryptedFile

Sends a message with a file attachment to a secret chat

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
    new Api.messages.SendEncryptedFile({
      peer: new Api.InputEncryptedChat({
        chatId: 43,
        accessHash: BigInt("-4156887774564"),
      }),
      randomId: BigInt("-4156887774564"),
      data: Buffer.from("arbitrary data here"),
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

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result: Api.messages.SentEncryptedMessage = await client.invoke(
    new Api.messages.SendEncryptedFile({
      peer: new Api.InputEncryptedChat({
        chatId: 43,
        accessHash: BigInt("-4156887774564"),
      }),
      randomId: BigInt("-4156887774564"),
      data: Buffer.from("arbitrary data here"),
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

|     Name     | Type                                                                                                                              | Description                                                                                                                                             |
| :----------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  **flags**   | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)                                                 |
|  **silent**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Whether to send the file without triggering a notification                                                                                              |
|   **peer**   | [InputEncryptedChat](https://core.telegram.org/type/InputEncryptedChat)                                                           | Secret chat ID                                                                                                                                          |
| **randomId** | [long](https://core.telegram.org/type/long)                                                                                       | Unique client message ID necessary to prevent message resending                                                                                         |
|   **data**   | [bytes](https://core.telegram.org/type/bytes)                                                                                     | TL-serialization of [DecryptedMessage](https://core.telegram.org/type/DecryptedMessage) type, encrypted with a key generated during chat initialization |
|   **file**   | [InputEncryptedFile](https://core.telegram.org/type/InputEncryptedFile)                                                           | File attachment for the secret chat                                                                                                                     |

## Result

[messages.SentEncryptedMessage](https://core.telegram.org/type/messages.SentEncryptedMessage)

## Possible errors

| Code | Type                 | Description                      |
| :--: | -------------------- | -------------------------------- |
| 400  | DATA_TOO_LONG        | Data too long                    |
| 400  | ENCRYPTION_DECLINED  | The secret chat was declined     |
| 400  | MD5_CHECKSUM_INVALID | The MD5 checksums do not match   |
| 400  | MSG_WAIT_FAILED      | A waiting call returned an error |

## Can bots use this method?

No

## Related pages

#### [DecryptedMessage](https://core.telegram.org/type/DecryptedMessage)

Object describes the contents of an encrypted message.
