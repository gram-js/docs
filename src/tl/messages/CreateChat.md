# messages.CreateChat

Creates a new chat.

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
    new Api.messages.CreateChat({
      users: ["username"],
      title: "My very normal title",
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
    new Api.messages.CreateChat({
      users: ["username"],
      title: "My very normal title",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|   Name    | Type                                                                                                       | Description                    |
| :-------: | ---------------------------------------------------------------------------------------------------------- | ------------------------------ |
| **users** | [Vector](https://core.telegram.org/type/Vector%20t)<[InputUser](https://core.telegram.org/type/InputUser)> | List of user IDs to be invited |
| **title** | [string](https://core.telegram.org/type/string)                                                            | Chat name                      |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                   | Description                                              |
| :--: | ---------------------- | -------------------------------------------------------- |
| 400  | CHAT_INVALID           | Invalid chat                                             |
| 400  | CHAT_TITLE_EMPTY       | No chat title provided                                   |
| 400  | INPUT_USER_DEACTIVATED | The specified user was deleted                           |
| 400  | USERS_TOO_FEW          | Not enough users (to create a chat, for example)         |
| 403  | USER_RESTRICTED        | You're spamreported, you can't create channels or chats. |

## Can bots use this method?

No

## Related pages
