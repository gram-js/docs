# stats.GetMessagePublicForwards

Obtains a list of messages, indicating to which other public channels was a channel message forwarded.

Will return a list of [messages](https://core.telegram.org/constructor/message) with `peer_id` equal to the public channel to which this message was forwarded.

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
    new Api.stats.GetMessagePublicForwards({
      channel: "username",
      msgId: 43,
      offsetRate: 43,
      offsetPeer: "username",
      offsetId: 43,
      limit: 100,
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
    new Api.stats.GetMessagePublicForwards({
      channel: "username",
      msgId: 43,
      offsetRate: 43,
      offsetPeer: "username",
      offsetId: 43,
      limit: 100,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|      Name      | Type                                                        | Description                                                                                                                                  |
| :------------: | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
|  **channel**   | [InputChannel](https://core.telegram.org/type/InputChannel) | Source channel                                                                                                                               |
|   **msgId**    | [int](https://core.telegram.org/type/int)                   | Source message ID                                                                                                                            |
| **offsetRate** | [int](https://core.telegram.org/type/int)                   | Initially 0, then set to the `next_rate` parameter of [messages.messagesSlice](https://core.telegram.org/constructor/messages.messagesSlice) |
| **offsetPeer** | [InputPeer](https://core.telegram.org/type/InputPeer)       | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets)                                                    |
|  **offsetId**  | [int](https://core.telegram.org/type/int)                   | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets)                                                    |
|   **limit**    | [int](https://core.telegram.org/type/int)                   | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets)                                                 |

## Result

[messages.Messages](https://core.telegram.org/type/messages.Messages)

## Possible errors

| Code | Type                | Description                                   |
| :--: | ------------------- | --------------------------------------------- |
| 400  | CHANNEL_INVALID     | The provided channel is invalid.              |
| 400  | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400  | MESSAGE_ID_INVALID  | The provided message id is invalid.           |

## Can bots use this method?

No

## Related pages

#### [messages.messagesSlice](https://core.telegram.org/constructor/messages.messagesSlice)

Incomplete list of messages and auxiliary data.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [message](https://core.telegram.org/constructor/message)

A message
