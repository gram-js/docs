# messages.search

Gets back found messages

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
        new Api.messages.search({
            peer: new Api.InputPeer({
                /* ... */
            }),
            q: 'random string here',
            fromId: new Api.InputPeer({
                /* ... */
            }),
            topMsgId: 4881049,
            filter: new Api.MessagesFilter({
                /* ... */
            }),
            minDate: 7108524,
            maxDate: 3588179,
            offsetId: 840380,
            addOffset: 3671533,
            limit: 6577178,
            maxId: 7375544,
            minId: 9351693,
            hash: 7383860,
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
        new Api.messages.search({
            peer: new Api.InputPeer({
                /* ... */
            }),
            q: 'random string here',
            fromId: new Api.InputPeer({
                /* ... */
            }),
            topMsgId: 4881049,
            filter: new Api.MessagesFilter({
                /* ... */
            }),
            minDate: 7108524,
            maxDate: 3588179,
            offsetId: 840380,
            addOffset: 3671533,
            limit: 6577178,
            maxId: 7375544,
            minId: 9351693,
            hash: 7383860,
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
messages.search#c352eec flags:# peer:InputPeer q:string from_id:flags.0?InputPeer top_msg_id:flags.1?int filter:MessagesFilter min_date:int max_date:int offset_id:int add_offset:int limit:int max_id:int min_id:int hash:int = messages.Messages;
```

## Parameters

|      Name      | Type                                                                                                                                 | Description                                                                                                                                                |
| :------------: | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   **flags**    | [#](https://core.telegram.org/type/%23)                                                                                              | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)                                                    |
|    **peer**    | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                                | User or chat, histories with which are searched, or [(inputPeerEmpty)](https://core.telegram.org/constructor/inputPeerEmpty) constructor for global search |
|     **q**      | [string](https://core.telegram.org/type/string)                                                                                      | Text search request                                                                                                                                        |
|  **from_id**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputPeer](https://core.telegram.org/type/InputPeer) | Only return messages sent by the specified user ID                                                                                                         |
| **top_msg_id** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](https://core.telegram.org/type/int)             | [Thread ID](https://core.telegram.org/api/threads)                                                                                                         |
|   **filter**   | [MessagesFilter](https://core.telegram.org/type/MessagesFilter)                                                                      | Filter to return only specified message types                                                                                                              |
|  **min_date**  | [int](https://core.telegram.org/type/int)                                                                                            | If a positive value was transferred, only messages with a sending date bigger than the transferred one will be returned                                    |
|  **max_date**  | [int](https://core.telegram.org/type/int)                                                                                            | If a positive value was transferred, only messages with a sending date smaller than the transferred one will be returned                                   |
| **offset_id**  | [int](https://core.telegram.org/type/int)                                                                                            | Only return messages starting from the specified message ID                                                                                                |
| **add_offset** | [int](https://core.telegram.org/type/int)                                                                                            | [Additional offset](https://core.telegram.org/api/offsets)                                                                                                 |
|   **limit**    | [int](https://core.telegram.org/type/int)                                                                                            | [Number of results to return](https://core.telegram.org/api/offsets)                                                                                       |
|   **max_id**   | [int](https://core.telegram.org/type/int)                                                                                            | [Maximum message ID to return](https://core.telegram.org/api/offsets)                                                                                      |
|   **min_id**   | [int](https://core.telegram.org/type/int)                                                                                            | [Minimum message ID to return](https://core.telegram.org/api/offsets)                                                                                      |
|    **hash**    | [int](https://core.telegram.org/type/int)                                                                                            | [Hash](https://core.telegram.org/api/offsets)                                                                                                              |

## Result

[messages.Messages](https://core.telegram.org/type/messages.Messages)

## Possible errors

| Code | Type                      | Description                                  |
| :--: | ------------------------- | -------------------------------------------- |
| 400  | CHANNEL_INVALID           | The provided channel is invalid              |
| 400  | CHANNEL_PRIVATE           | You haven't joined this channel/supergroup   |
| 400  | CHAT_ADMIN_REQUIRED       | You must be an admin in this chat to do this |
| 400  | INPUT_CONSTRUCTOR_INVALID | The provided constructor is invalid          |
| 400  | INPUT_USER_DEACTIVATED    | The specified user was deleted               |
| 400  | MSG_ID_INVALID            | Invalid message ID provided                  |
| 400  | PEER_ID_INVALID           | The provided peer id is invalid              |
| 400  | PEER_ID_NOT_SUPPORTED     | The provided peer ID is not supported        |
| 400  | SEARCH_QUERY_EMPTY        | The search query is empty                    |
| 400  | USER_ID_INVALID           | The provided user ID is invalid              |

## Can bots use this method?

Yes

## Related pages

### [inputPeerEmpty](https://core.telegram.org/constructor/inputPeerEmpty)

An empty constructor, no user or chat is defined.

### [Threads](https://core.telegram.org/api/threads)

Telegram allows commenting on a [channel post](https://core.telegram.org/api/channel) or on a generic [supergroup message](https://core.telegram.org/api/channel), thanks to message threads.

### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
