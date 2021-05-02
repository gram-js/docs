# messages.getUnreadMentions

Get unread messages where we were mentioned

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
        new Api.messages.getUnreadMentions({
            peer: new Api.InputPeer({
                /* ... */
            }),
            offsetId: 2543174,
            addOffset: 4403363,
            limit: 3577797,
            maxId: 9456904,
            minId: 282118,
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
    const result: Api.messages.Messages = await client.invoke(
        new Api.messages.getUnreadMentions({
            peer: new Api.InputPeer({
                /* ... */
            }),
            offsetId: 2543174,
            addOffset: 4403363,
            limit: 3577797,
            maxId: 9456904,
            minId: 282118,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
messages.messages#8c718e87 messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#3a54685e flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#64479808 flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;
---functions---
messages.getUnreadMentions#46578472 peer:InputPeer offset_id:int add_offset:int limit:int max_id:int min_id:int = messages.Messages;
```

## Parameters

|      Name      | Type                                                  | Description                                                                                  |
| :------------: | ----------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|    **peer**    | [InputPeer](https://core.telegram.org/type/InputPeer) | Peer where to look for mentions                                                              |
| **offset_id**  | [int](https://core.telegram.org/type/int)             | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets)    |
| **add_offset** | [int](https://core.telegram.org/type/int)             | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets)    |
|   **limit**    | [int](https://core.telegram.org/type/int)             | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |
|   **max_id**   | [int](https://core.telegram.org/type/int)             | Maximum message ID to return, [see pagination](https://core.telegram.org/api/offsets)        |
|   **min_id**   | [int](https://core.telegram.org/type/int)             | Minimum message ID to return, [see pagination](https://core.telegram.org/api/offsets)        |

## Result

[messages.Messages](https://core.telegram.org/type/messages.Messages)

## Possible errors

| Code | Type            | Description                                |
| :--: | --------------- | ------------------------------------------ |
| 400  | CHANNEL_INVALID | The provided channel is invalid            |
| 400  | CHANNEL_PRIVATE | You haven't joined this channel/supergroup |
| 400  | PEER_ID_INVALID | The provided peer id is invalid            |

## Can bots use this method?

Yes

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
