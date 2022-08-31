# messages.StartBot

Start a conversation with a bot using a [deep linking parameter](https://core.telegram.org/bots#deep-linking)

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
    new Api.messages.StartBot({
      bot: "username",
      peer: "username",
      randomId: BigInt("-4156887774564"),
      startParam: "some string here",
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

  const result: Api.Updates = await client.invoke(
    new Api.messages.StartBot({
      bot: "username",
      peer: "username",
      randomId: BigInt("-4156887774564"),
      startParam: "some string here",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|      Name      | Type                                                  | Description                                                               |
| :------------: | ----------------------------------------------------- | ------------------------------------------------------------------------- |
|    **bot**     | [InputUser](https://core.telegram.org/type/InputUser) | The bot                                                                   |
|    **peer**    | [InputPeer](https://core.telegram.org/type/InputPeer) | The chat where to start the bot, can be the bot's private chat or a group |
|  **randomId**  | [long](https://core.telegram.org/type/long)           | Random ID to avoid resending the same message                             |
| **startParam** | [string](https://core.telegram.org/type/string)       | [Deep linking parameter](https://core.telegram.org/bots#deep-linking)     |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                   | Description                                     |
| :--: | ---------------------- | ----------------------------------------------- |
| 400  | BOT_INVALID            | This is not a valid bot.                        |
| 400  | CHAT_ADMIN_REQUIRED    | You must be an admin in this chat to do this.   |
| 400  | INPUT_USER_DEACTIVATED | The specified user was deleted.                 |
| 400  | MSG_ID_INVALID         | Invalid message ID provided.                    |
| 400  | PEER_ID_INVALID        | The provided peer id is invalid.                |
| 500  | RANDOM_ID_DUPLICATE    | You provided a random ID that was already used. |
| 400  | START_PARAM_EMPTY      | The start parameter is empty.                   |
| 400  | START_PARAM_INVALID    | Start parameter invalid.                        |
| 400  | START_PARAM_TOO_LONG   | Start parameter is too long.                    |

## Can bots use this method?

No

## Related pages

#### [Bots: An introduction for developers](https://core.telegram.org/bots)
