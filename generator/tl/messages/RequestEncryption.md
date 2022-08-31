# messages.RequestEncryption

Sends a request to start a secret chat to the user.

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
    new Api.messages.RequestEncryption({
      userId: "username",
      randomId: 43,
      gA: Buffer.from("arbitrary data here"),
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

  const result: Api.EncryptedChat = await client.invoke(
    new Api.messages.RequestEncryption({
      userId: "username",
      randomId: 43,
      gA: Buffer.from("arbitrary data here"),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name     | Type                                                  | Description                                                                                           |
| :----------: | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
|  **userId**  | [InputUser](https://core.telegram.org/type/InputUser) | User ID                                                                                               |
| **randomId** | [int](https://core.telegram.org/type/int)             | Unique client request ID required to prevent resending. This also doubles as the chat ID.             |
|    **gA**    | [bytes](https://core.telegram.org/type/bytes)         | `A = g ^ a mod p`, see [Wikipedia](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) |

## Result

[EncryptedChat](https://core.telegram.org/type/EncryptedChat)

## Possible errors

| Code | Type            | Description                      |
| :--: | --------------- | -------------------------------- |
| 400  | DH_G_A_INVALID  | g_a invalid.                     |
| 400  | USER_ID_INVALID | The provided user ID is invalid. |

## Can bots use this method?

No

## Related pages
