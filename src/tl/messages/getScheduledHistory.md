# messages.getScheduledHistory

Get scheduled messages

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
        new Api.messages.getScheduledHistory({
            peer: new Api.InputPeer({
                /* ... */
            }),
            hash: 2810096,
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
        new Api.messages.getScheduledHistory({
            peer: new Api.InputPeer({
                /* ... */
            }),
            hash: 2810096,
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
messages.getScheduledHistory#e2c2685b peer:InputPeer hash:int = messages.Messages;
```

## Parameters

|   Name   | Type                                                  | Description                                                                                            |
| :------: | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Peer                                                                                                   |
| **hash** | [int](https://core.telegram.org/type/int)             | [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |

## Result

[messages.Messages](https://core.telegram.org/type/messages.Messages)

## Possible errors

| Code | Type                | Description                                  |
| :--: | ------------------- | -------------------------------------------- |
| 400  | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this |
| 400  | PEER_ID_INVALID     | The provided peer id is invalid              |

## Can bots use this method?

Yes

## Related pages

### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.