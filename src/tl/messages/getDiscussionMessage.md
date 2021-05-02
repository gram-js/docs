# messages.getDiscussionMessage

Get [discussion message](https://core.telegram.org/api/threads) from the [associated discussion group](https://core.telegram.org/api/discussion) of a channel to show it on top of the comment section, without actually joining the group

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(
        new Api.messages.getDiscussionMessage({
            peer: new Api.InputPeer({
                /* ... */
            }),
            msgId: 5025473,
        }),
    );
    console.log(result); // prints the result
})();
```

:::

:::tab{title="TypeScript"}

```ts
import { Api, TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.messages.DiscussionMessage = await client.invoke(
        new Api.messages.getDiscussionMessage({
            peer: new Api.InputPeer({
                /* ... */
            }),
            msgId: 5025473,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
messages.discussionMessage#f5dd8f9d flags:# messages:Vector<Message> max_id:flags.0?int read_inbox_max_id:flags.1?int read_outbox_max_id:flags.2?int chats:Vector<Chat> users:Vector<User> = messages.DiscussionMessage;
---functions---
messages.getDiscussionMessage#446972fd peer:InputPeer msg_id:int = messages.DiscussionMessage;
```

## Parameters

|    Name    | Type                                                  | Description                                         |
| :--------: | ----------------------------------------------------- | --------------------------------------------------- |
|  **peer**  | [InputPeer](https://core.telegram.org/type/InputPeer) | [Channel ID](https://core.telegram.org/api/channel) |
| **msg_id** | [int](https://core.telegram.org/type/int)             | Message ID                                          |

## Result

[messages.DiscussionMessage](https://core.telegram.org/type/messages.DiscussionMessage)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.

#### [Threads](https://core.telegram.org/api/threads)

Telegram allows commenting on a [channel post](https://core.telegram.org/api/channel) or on a generic [supergroup message](https://core.telegram.org/api/channel), thanks to message threads.

#### [Discussion groups](https://core.telegram.org/api/discussion)

[Groups](https://core.telegram.org/api/channel) can be associated to a [channel](https://core.telegram.org/api/channel) as a [discussion group](https://telegram.org/blog/privacy-discussions-web-bots), to allow users to discuss about posts.
