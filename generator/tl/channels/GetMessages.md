# channels.GetMessages

Get [channel/supergroup](https://core.telegram.org/api/channel) messages

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
    new Api.channels.GetMessages({
      channel: "username",
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

  const result: Api.messages.Messages = await client.invoke(
    new Api.channels.GetMessages({
      channel: "username",
      id: [43],
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name     | Type                                                                                                             | Description            |
| :---------: | ---------------------------------------------------------------------------------------------------------------- | ---------------------- |
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel)                                                      | Channel/supergroup     |
|   **id**    | [Vector](https://core.telegram.org/type/Vector%20t)<[InputMessage](https://core.telegram.org/type/InputMessage)> | IDs of messages to get |

## Result

[messages.Messages](https://core.telegram.org/type/messages.Messages)

## Possible errors

| Code | Type                   | Description                                                  |
| :--: | ---------------------- | ------------------------------------------------------------ |
| 400  | CHANNEL_INVALID        | The provided channel is invalid.                             |
| 400  | CHANNEL_PRIVATE        | You haven't joined this channel/supergroup.                  |
| 400  | MESSAGE_IDS_EMPTY      | No message ids were provided.                                |
| 400  | MSG_ID_INVALID         | Invalid message ID provided.                                 |
| 400  | USER_BANNED_IN_CHANNEL | You're banned from sending messages in supergroups/channels. |

## Can bots use this method?

Yes

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
