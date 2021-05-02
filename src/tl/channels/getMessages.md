# channels.getMessages

Get [channel/supergroup](https://core.telegram.org/api/channel) messages

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.channels.getMessages({
		channel: new Api.InputChannel({...}),
		id: [new Api.InputMessage({...})],
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
    const result: Api.messages.Messages = await client.invoke(new Api.channels.getMessages({
		channel: new Api.InputChannel({...}),
		id: [new Api.InputMessage({...})],
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
channels.getMessages#ad8c9a23 channel:InputChannel id:Vector<InputMessage> = messages.Messages;
```

## Parameters

|    Name     | Type                                                                                                                | Description            |
| :---------: | ------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel)                                                         | Channel/supergroup     |
|   **id**    | [Vector](https://core.telegram.org/type/Vector%20t) < [InputMessage](https://core.telegram.org/type/InputMessage) > | IDs of messages to get |

## Result

[messages.Messages](https://core.telegram.org/type/messages.Messages)

## Possible errors

| Code | Type              | Description                                |
| :--: | ----------------- | ------------------------------------------ |
| 400  | CHANNEL_INVALID   | The provided channel is invalid            |
| 400  | CHANNEL_PRIVATE   | You haven't joined this channel/supergroup |
| 400  | MESSAGE_IDS_EMPTY | No message ids were provided               |
| 400  | MSG_ID_INVALID    | Invalid message ID provided                |

## Can bots use this method?

Yes

## Related pages

#### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.
