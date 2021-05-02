# messages.forwardMessages

Forwards messages by their IDs.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.forwardMessages({
		silent: true,
		background: true,
		withMyScore: true,
		fromPeer: new Api.InputPeer({...}),
		id: [3594049],
		randomId: [2616332],
		toPeer: new Api.InputPeer({...}),
		scheduleDate: 46082,
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
    const result: Api.Updates = await client.invoke(new Api.messages.forwardMessages({
		silent: true,
		background: true,
		withMyScore: true,
		fromPeer: new Api.InputPeer({...}),
		id: [3594049],
		randomId: [2616332],
		toPeer: new Api.InputPeer({...}),
		scheduleDate: 46082,
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
messages.forwardMessages#d9fee60e flags:# silent:flags.5?true background:flags.6?true with_my_score:flags.8?true from_peer:InputPeer id:Vector<int> random_id:Vector<long> to_peer:InputPeer schedule_date:flags.10?int = Updates;
```

## Parameters

|       Name        | Type                                                                                                                              | Description                                                                                             |
| :---------------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|     **flags**     | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|    **silent**     | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](https://core.telegram.org/constructor/true) | Whether to send messages silently (no notification will be triggered on the destination clients)        |
|  **background**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](https://core.telegram.org/constructor/true) | Whether to send the message in background                                                               |
| **with_my_score** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](https://core.telegram.org/constructor/true) | When forwarding games, whether to include your score in the game                                        |
|   **from_peer**   | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                             | Source of messages                                                                                      |
|      **id**       | [Vector](https://core.telegram.org/type/Vector%20t) < [int](https://core.telegram.org/type/int) >                                 | IDs of messages                                                                                         |
|   **random_id**   | [Vector](https://core.telegram.org/type/Vector%20t) < [long](https://core.telegram.org/type/long) >                               | Random ID to prevent resending of messages                                                              |
|    **to_peer**    | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                             | Destination peer                                                                                        |
| **schedule_date** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[int](https://core.telegram.org/type/int)         | Scheduled message date for scheduled messages                                                           |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                              | Description                                                                                                                     |
| :--: | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 400  | BROADCAST_PUBLIC_VOTERS_FORBIDDEN | You can't forward polls with public voters                                                                                      |
| 400  | CHANNEL_INVALID                   | The provided channel is invalid                                                                                                 |
| 400  | CHANNEL_PRIVATE                   | You haven't joined this channel/supergroup                                                                                      |
| 400  | CHAT_ADMIN_REQUIRED               | You must be an admin in this chat to do this                                                                                    |
| 400  | CHAT_ID_INVALID                   | The provided chat id is invalid                                                                                                 |
| 400  | CHAT_RESTRICTED                   | You can't send messages in this chat, you were restricted                                                                       |
| 403  | CHAT_SEND_GIFS_FORBIDDEN          | You can't send gifs in this chat                                                                                                |
| 403  | CHAT_SEND_MEDIA_FORBIDDEN         | You can't send media in this chat                                                                                               |
| 403  | CHAT_SEND_POLL_FORBIDDEN          | You can't send polls in this chat                                                                                               |
| 403  | CHAT_SEND_STICKERS_FORBIDDEN      | You can't send stickers in this chat.                                                                                           |
| 403  | CHAT_WRITE_FORBIDDEN              | You can't write in this chat                                                                                                    |
| 400  | GROUPED_MEDIA_INVALID             | Invalid grouped media                                                                                                           |
| 400  | INPUT_USER_DEACTIVATED            | The specified user was deleted                                                                                                  |
| 400  | MEDIA_EMPTY                       | The provided media object is invalid                                                                                            |
| 400  | MESSAGE_IDS_EMPTY                 | No message ids were provided                                                                                                    |
| 400  | MESSAGE_ID_INVALID                | The provided message id is invalid                                                                                              |
| 400  | MSG_ID_INVALID                    | Invalid message ID provided                                                                                                     |
| 420  | P0NY_FLOODWAIT                    |                                                                                                                                 |
| 400  | PEER_ID_INVALID                   | The provided peer id is invalid                                                                                                 |
| 400  | RANDOM_ID_INVALID                 | A provided random ID is invalid                                                                                                 |
| 400  | SCHEDULE_TOO_MUCH                 | There are too many scheduled messages                                                                                           |
| 400  | SLOWMODE_MULTI_MSGS_DISABLED      | Slowmode is enabled, you cannot forward multiple messages to this group.                                                        |
| 420  | SLOWMODE_WAIT_X                   | Slowmode is enabled in this chat: you must wait for the specified number of seconds before sending another message to the chat. |
| 400  | USER_BANNED_IN_CHANNEL            | You're banned from sending messages in supergroups/channels                                                                     |
| 400  | USER_IS_BLOCKED                   | You were blocked by this user                                                                                                   |
| 400  | USER_IS_BOT                       | Bots can't send messages to other bots                                                                                          |
| 400  | YOU_BLOCKED_USER                  | You blocked this user                                                                                                           |

## Can bots use this method?

Yes

## Related pages
