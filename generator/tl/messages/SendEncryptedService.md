# messages.SendEncryptedService

Sends a service message to a secret chat.

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
    new Api.messages.SendEncryptedService({
      peer: new Api.InputEncryptedChat({
        chatId: 43,
        accessHash: BigInt("-4156887774564"),
      }),
      randomId: BigInt("-4156887774564"),
      data: Buffer.from("arbitrary data here"),
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
    new Api.messages.SendEncryptedService({
      peer: new Api.InputEncryptedChat({
        chatId: 43,
        accessHash: BigInt("-4156887774564"),
      }),
      randomId: BigInt("-4156887774564"),
      data: Buffer.from("arbitrary data here"),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name     | Type                                                                    | Description                                                                                                                                             |
| :----------: | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   **peer**   | [InputEncryptedChat](https://core.telegram.org/type/InputEncryptedChat) | Secret chat ID                                                                                                                                          |
| **randomId** | [long](https://core.telegram.org/type/long)                             | Unique client message ID required to prevent message resending                                                                                          |
|   **data**   | [bytes](https://core.telegram.org/type/bytes)                           | TL-serialization of [DecryptedMessage](https://core.telegram.org/type/DecryptedMessage) type, encrypted with a key generated during chat initialization |

## Result

[messages.SentEncryptedMessage](https://core.telegram.org/type/messages.SentEncryptedMessage)

## Possible errors

| Code | Type                  | Description                                                                             |
| :--: | --------------------- | --------------------------------------------------------------------------------------- |
| 400  | DATA_INVALID          | Encrypted data invalid.                                                                 |
| 400  | ENCRYPTION_DECLINED   | The secret chat was declined.                                                           |
| 400  | ENCRYPTION_ID_INVALID | The provided secret chat ID is invalid.                                                 |
| 400  | MSG_WAIT_FAILED       | A waiting call returned an error.                                                       |
| 403  | USER_DELETED          | You can't send this secret message because the other participant deleted their account. |
| 403  | USER_IS_BLOCKED       | You were blocked by this user.                                                          |

## Can bots use this method?

No

## Related pages

#### [DecryptedMessage](https://core.telegram.org/type/DecryptedMessage)

Object describes the contents of an encrypted message.
