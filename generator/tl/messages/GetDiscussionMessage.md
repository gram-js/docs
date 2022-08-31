# messages.GetDiscussionMessage

Get [discussion message](https://core.telegram.org/api/threads) from the [associated discussion group](https://core.telegram.org/api/discussion) of a channel to show it on top of the comment section, without actually joining the group

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
    new Api.messages.GetDiscussionMessage({
      peer: "username",
      msgId: 43,
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

  const result: Api.messages.DiscussionMessage = await client.invoke(
    new Api.messages.GetDiscussionMessage({
      peer: "username",
      msgId: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|   Name    | Type                                                  | Description                                         |
| :-------: | ----------------------------------------------------- | --------------------------------------------------- |
| **peer**  | [InputPeer](https://core.telegram.org/type/InputPeer) | [Channel ID](https://core.telegram.org/api/channel) |
| **msgId** | [int](https://core.telegram.org/type/int)             | Message ID                                          |

## Result

[messages.DiscussionMessage](https://core.telegram.org/type/messages.DiscussionMessage)

## Possible errors

| Code | Type            | Description                      |
| :--: | --------------- | -------------------------------- |
| 400  | CHANNEL_INVALID | The provided channel is invalid. |
| 400  | MSG_ID_INVALID  | Invalid message ID provided.     |
| 400  | PEER_ID_INVALID | The provided peer id is invalid. |

## Can bots use this method?

No

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Threads](https://core.telegram.org/api/threads)

Telegram allows commenting on a [channel post](https://core.telegram.org/api/channel) or on a generic [supergroup message](https://core.telegram.org/api/channel), thanks to message threads.

#### [Discussion groups](https://core.telegram.org/api/discussion)

[Groups](https://core.telegram.org/api/channel) can be associated to a [channel](https://core.telegram.org/api/channel) as a [discussion group](https://telegram.org/blog/privacy-discussions-web-bots), to allow users to discuss about posts.
