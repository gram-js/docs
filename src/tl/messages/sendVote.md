# messages.sendVote

Vote in a [poll](https://core.telegram.org/constructor/poll)

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.sendVote({
		peer: new Api.InputPeer({...}),
		msgId: 4541739,
		options: [Buffer.from('some bytes here')],
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
    const result: Api.Updates = await client.invoke(new Api.messages.sendVote({
		peer: new Api.InputPeer({...}),
		msgId: 4541739,
		options: [Buffer.from('some bytes here')],
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#2296d2c8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:int message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?int reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> = Updates;
updateShortChatMessage#402d5dbb flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:int chat_id:int message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?int reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#11f1331c flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> = Updates;
---functions---
messages.sendVote#10ea6184 peer:InputPeer msg_id:int options:Vector<bytes> = Updates;
```

## Parameters

|    Name     | Type                                                                                                  | Description                      |
| :---------: | ----------------------------------------------------------------------------------------------------- | -------------------------------- |
|  **peer**   | [InputPeer](https://core.telegram.org/type/InputPeer)                                                 | The chat where the poll was sent |
| **msg_id**  | [int](https://core.telegram.org/type/int)                                                             | The message ID of the poll       |
| **options** | [Vector](https://core.telegram.org/type/Vector%20t) < [bytes](https://core.telegram.org/type/bytes) > | The options that were chosen     |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                | Description                        |
| :--: | ------------------- | ---------------------------------- |
| 400  | MESSAGE_ID_INVALID  | The provided message id is invalid |
| 400  | MESSAGE_POLL_CLOSED | Poll closed                        |
| 400  | OPTIONS_TOO_MUCH    | Too many options provided          |
| 400  | OPTION_INVALID      | Invalid option selected            |
| 400  | REVOTE_NOT_ALLOWED  | You cannot change your vote        |

## Can bots use this method?

Yes

## Related pages

#### [poll](https://core.telegram.org/constructor/poll)

Poll
