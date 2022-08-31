# channels.ReportSpam

Reports some messages from a user in a supergroup as spam; requires administrator rights in the supergroup

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
    new Api.channels.ReportSpam({
      channel: "username",
      participant: "username",
      id: [43],
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

  const result: Api.Bool = await client.invoke(
    new Api.channels.ReportSpam({
      channel: "username",
      participant: "username",
      id: [43],
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|      Name       | Type                                                                                           | Description                                   |
| :-------------: | ---------------------------------------------------------------------------------------------- | --------------------------------------------- |
|   **channel**   | [InputChannel](https://core.telegram.org/type/InputChannel)                                    | Supergroup                                    |
| **participant** | [InputPeer](https://core.telegram.org/type/InputPeer)                                          | Participant whose messages should be reported |
|     **id**      | [Vector](https://core.telegram.org/type/Vector%20t)<[int](https://core.telegram.org/type/int)> | IDs of spam messages                          |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type                   | Description                                   |
| :--: | ---------------------- | --------------------------------------------- |
| 400  | CHANNEL_INVALID        | The provided channel is invalid.              |
| 400  | CHAT_ADMIN_REQUIRED    | You must be an admin in this chat to do this. |
| 400  | INPUT_USER_DEACTIVATED | The specified user was deleted.               |
| 400  | USER_ID_INVALID        | The provided user ID is invalid.              |

## Can bots use this method?

No

## Related pages
