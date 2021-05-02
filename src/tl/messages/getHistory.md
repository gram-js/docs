# messages.getHistory

Gets back the conversation history with one interlocutor / within a chat

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
        new Api.messages.getHistory({
            peer: new Api.InputPeer({
                /* ... */
            }),
            offsetId: 9291972,
            offsetDate: 5920558,
            addOffset: 7946814,
            limit: 8137102,
            maxId: 9480436,
            minId: 8804446,
            hash: 9358333,
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
        new Api.messages.getHistory({
            peer: new Api.InputPeer({
                /* ... */
            }),
            offsetId: 9291972,
            offsetDate: 5920558,
            addOffset: 7946814,
            limit: 8137102,
            maxId: 9480436,
            minId: 8804446,
            hash: 9358333,
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
messages.getHistory#dcbb8260 peer:InputPeer offset_id:int offset_date:int add_offset:int limit:int max_id:int min_id:int hash:int = messages.Messages;
```

## Parameters

|      Name       | Type                                                  | Description                                                                                             |
| :-------------: | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|    **peer**     | [InputPeer](https://core.telegram.org/type/InputPeer) | Target peer                                                                                             |
|  **offset_id**  | [int](https://core.telegram.org/type/int)             | Only return messages starting from the specified message ID                                             |
| **offset_date** | [int](https://core.telegram.org/type/int)             | Only return messages sent before the specified date                                                     |
| **add_offset**  | [int](https://core.telegram.org/type/int)             | Number of list elements to be skipped, negative values are also accepted.                               |
|    **limit**    | [int](https://core.telegram.org/type/int)             | Number of results to return                                                                             |
|   **max_id**    | [int](https://core.telegram.org/type/int)             | If a positive value was transferred, the method will return only messages with IDs less than **max_id** |
|   **min_id**    | [int](https://core.telegram.org/type/int)             | If a positive value was transferred, the method will return only messages with IDs more than **min_id** |
|    **hash**     | [int](https://core.telegram.org/type/int)             | [Result hash](https://core.telegram.org/api/offsets)                                                    |

## Result

[messages.Messages](https://core.telegram.org/type/messages.Messages)

## Possible errors

| Code | Type                          | Description                                                                           |
| :--: | ----------------------------- | ------------------------------------------------------------------------------------- |
| 401  | AUTH_KEY_PERM_EMPTY           | The temporary auth key must be binded to the permanent auth key to use these methods. |
| 400  | CHANNEL_INVALID               | The provided channel is invalid                                                       |
| 400  | CHANNEL_PRIVATE               | You haven't joined this channel/supergroup                                            |
| 400  | CHAT_ID_INVALID               | The provided chat id is invalid                                                       |
| 400  | CONNECTION_DEVICE_MODEL_EMPTY | Device model empty                                                                    |
| 400  | MSG_ID_INVALID                | Invalid message ID provided                                                           |
| 400  | PEER_ID_INVALID               | The provided peer id is invalid                                                       |

## Can bots use this method?

Yes

## Related pages

### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
