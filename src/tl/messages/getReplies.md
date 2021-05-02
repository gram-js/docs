# messages.getReplies

Get messages in a reply thread

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.getReplies({
		peer: new Api.InputPeer({...}),
		msgId: 7855235,
		offsetId: 9695761,
		offsetDate: 8619023,
		addOffset: 4679718,
		limit: 2057604,
		maxId: 3135654,
		minId: 6971168,
		hash: 5441484,
		}));
    console.log(result); // prints the result
})();

```

:::

:::tab{title="TypeScript"}

```ts
import {Api, TelegramClient} from 'telegram';
import {StringSession} from 'telegram/sessions';

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.messages.Messages = await client.invoke(new Api.messages.getReplies({
		peer: new Api.InputPeer({...}),
		msgId: 7855235,
		offsetId: 9695761,
		offsetDate: 8619023,
		addOffset: 4679718,
		limit: 2057604,
		maxId: 3135654,
		minId: 6971168,
		hash: 5441484,
		}));
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
messages.getReplies#24b581ba peer:InputPeer msg_id:int offset_id:int offset_date:int add_offset:int limit:int max_id:int min_id:int hash:int = messages.Messages;
```

## Parameters

|      Name       | Type                                                  | Description                                                                                            |
| :-------------: | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
|    **peer**     | [InputPeer](https://core.telegram.org/type/InputPeer) | Peer                                                                                                   |
|   **msg_id**    | [int](https://core.telegram.org/type/int)             | Message ID                                                                                             |
|  **offset_id**  | [int](https://core.telegram.org/type/int)             | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets)              |
| **offset_date** | [int](https://core.telegram.org/type/int)             | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets)              |
| **add_offset**  | [int](https://core.telegram.org/type/int)             | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets)              |
|    **limit**    | [int](https://core.telegram.org/type/int)             | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets)           |
|   **max_id**    | [int](https://core.telegram.org/type/int)             | If a positive value was transferred, the method will return only messages with ID smaller than max_id  |
|   **min_id**    | [int](https://core.telegram.org/type/int)             | If a positive value was transferred, the method will return only messages with ID bigger than min_id   |
|    **hash**     | [int](https://core.telegram.org/type/int)             | [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |

## Result

[messages.Messages](https://core.telegram.org/type/messages.Messages)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
