# messages.GetMessagesViews

Get and increase the view counter of a message sent or forwarded from a [channel](https://core.telegram.org/api/channel)

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
    new Api.messages.GetMessagesViews({
      peer: "username",
      id: [43],
      increment: false,
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
  const result: Api.messages.MessageViews = await client.invoke(
    new Api.messages.GetMessagesViews({
      peer: "username",
      id: [43],
      increment: false,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name      | Type                                                                                           | Description                                                          |
| :-----------: | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
|   **peer**    | [InputPeer](https://core.telegram.org/type/InputPeer)                                          | Peer where the message was found                                     |
|    **id**     | [Vector](https://core.telegram.org/type/Vector%20t)<[int](https://core.telegram.org/type/int)> | ID of message                                                        |
| **increment** | [Bool](https://core.telegram.org/type/Bool)                                                    | Whether to mark the message as viewed and increment the view counter |

## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[int](https://core.telegram.org/type/int)>

## Possible errors

| Code | Type            | Description                                |
| :--: | --------------- | ------------------------------------------ |
| 400  | CHANNEL_INVALID | The provided channel is invalid            |
| 400  | CHANNEL_PRIVATE | You haven't joined this channel/supergroup |
| 400  | CHAT_ID_INVALID | The provided chat id is invalid            |
| 400  | MSG_ID_INVALID  | Invalid message ID provided                |
| 400  | PEER_ID_INVALID | The provided peer id is invalid            |

## Can bots use this method?

No

## Related pages

#### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.
