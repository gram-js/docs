# messages.AcceptEncryption

Confirms creation of a secret chat

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
    new Api.messages.AcceptEncryption({
      peer: new Api.InputEncryptedChat({
        chatId: 43,
        accessHash: BigInt("-4156887774564"),
      }),
      gB: Buffer.from("arbitrary data here"),
      keyFingerprint: BigInt("-4156887774564"),
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
  const result: Api.EncryptedChat = await client.invoke(
    new Api.messages.AcceptEncryption({
      peer: new Api.InputEncryptedChat({
        chatId: 43,
        accessHash: BigInt("-4156887774564"),
      }),
      gB: Buffer.from("arbitrary data here"),
      keyFingerprint: BigInt("-4156887774564"),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|        Name        | Type                                                                    | Description                                                                                           |
| :----------------: | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
|      **peer**      | [InputEncryptedChat](https://core.telegram.org/type/InputEncryptedChat) | Secret chat ID                                                                                        |
|       **gB**       | [bytes](https://core.telegram.org/type/bytes)                           | `B = g ^ b mod p`, see [Wikipedia](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) |
| **keyFingerprint** | [long](https://core.telegram.org/type/long)                             | 64-bit fingerprint of the received key                                                                |

## Result

[EncryptedChat](https://core.telegram.org/type/EncryptedChat)

## Possible errors

| Code | Type                        | Description                          |
| :--: | --------------------------- | ------------------------------------ |
| 400  | CHAT_ID_INVALID             | The provided chat id is invalid      |
| 400  | ENCRYPTION_ALREADY_ACCEPTED | Secret chat already accepted         |
| 400  | ENCRYPTION_ALREADY_DECLINED | The secret chat was already declined |

## Can bots use this method?

No

## Related pages
