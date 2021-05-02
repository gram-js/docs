# messages.sendMessage

Sends a message to a chat

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.sendMessage({
		noWebpage: true,
		silent: true,
		background: true,
		clearDraft: true,
		peer: new Api.InputPeer({...}),
		replyToMsgId: 6872073,
		message: 'random string here',
		randomId: 1848690,
		replyMarkup: new Api.ReplyMarkup({...}),
		entities: [new Api.MessageEntity({...})],
		scheduleDate: 789917,
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
    const result: Api.Updates = await client.invoke(new Api.messages.sendMessage({
		noWebpage: true,
		silent: true,
		background: true,
		clearDraft: true,
		peer: new Api.InputPeer({...}),
		replyToMsgId: 6872073,
		message: 'random string here',
		randomId: 1848690,
		replyMarkup: new Api.ReplyMarkup({...}),
		entities: [new Api.MessageEntity({...})],
		scheduleDate: 789917,
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
messages.sendMessage#520c3870 flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true peer:InputPeer reply_to_msg_id:flags.0?int message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int = Updates;
```

## Parameters

|        Name         | Type                                                                                                                                                                                                 | Description                                                                                             |
| :-----------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|      **flags**      | [#](https://core.telegram.org/type/%23)                                                                                                                                                              | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|   **no_webpage**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true)                                                                    | Set this flag to disable generation of the webpage preview                                              |
|     **silent**      | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](https://core.telegram.org/constructor/true)                                                                    | Send this message silently (no notifications for the receivers)                                         |
|   **background**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](https://core.telegram.org/constructor/true)                                                                    | Send this message as background message                                                                 |
|   **clear_draft**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](https://core.telegram.org/constructor/true)                                                                    | Clear the draft field                                                                                   |
|      **peer**       | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                                                                                                | The destination where the message will be sent                                                          |
| **reply_to_msg_id** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](https://core.telegram.org/type/int)                                                                             | The message ID to which this message will reply to                                                      |
|     **message**     | [string](https://core.telegram.org/type/string)                                                                                                                                                      | The message                                                                                             |
|    **random_id**    | [long](https://core.telegram.org/type/long)                                                                                                                                                          | Unique client message ID required to prevent message resending                                          |
|  **reply_markup**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[ReplyMarkup](https://core.telegram.org/type/ReplyMarkup)                                                             | Reply markup for sending bot buttons                                                                    |
|    **entities**     | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t) < [MessageEntity](https://core.telegram.org/type/MessageEntity) > | Message [entities](https://core.telegram.org/api/entities) for sending styled text                      |
|  **schedule_date**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[int](https://core.telegram.org/type/int)                                                                            | Scheduled message date for [scheduled messages](https://core.telegram.org/api/scheduled-messages)       |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                        | Description                                                                                                                     |
| :--: | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 401  | AUTH_KEY_PERM_EMPTY         | The temporary auth key must be binded to the permanent auth key to use these methods.                                           |
| 400  | BOT_DOMAIN_INVALID          | Bot domain invalid                                                                                                              |
| 400  | BOT_INVALID                 | This is not a valid bot                                                                                                         |
| 400  | BUTTON_DATA_INVALID         | The data of one or more of the buttons you provided is invalid                                                                  |
| 400  | BUTTON_TYPE_INVALID         | The type of one or more of the buttons you provided is invalid                                                                  |
| 400  | BUTTON_URL_INVALID          | Button URL invalid                                                                                                              |
| 400  | CHANNEL_INVALID             | The provided channel is invalid                                                                                                 |
| 400  | CHANNEL_PRIVATE             | You haven't joined this channel/supergroup                                                                                      |
| 400  | CHAT_ADMIN_REQUIRED         | You must be an admin in this chat to do this                                                                                    |
| 400  | CHAT_ID_INVALID             | The provided chat id is invalid                                                                                                 |
| 400  | CHAT_RESTRICTED             | You can't send messages in this chat, you were restricted                                                                       |
| 403  | CHAT_WRITE_FORBIDDEN        | You can't write in this chat                                                                                                    |
| 400  | ENCRYPTION_DECLINED         | The secret chat was declined                                                                                                    |
| 400  | ENTITY_MENTION_USER_INVALID | You mentioned an invalid user                                                                                                   |
| 400  | FROM_MESSAGE_BOT_DISABLED   | Bots can't use fromMessage min constructors                                                                                     |
| 400  | INPUT_USER_DEACTIVATED      | The specified user was deleted                                                                                                  |
| 400  | MESSAGE_EMPTY               | The provided message is empty                                                                                                   |
| 400  | MESSAGE_TOO_LONG            | The provided message is too long                                                                                                |
| 400  | MSG_ID_INVALID              | Provided reply_to_msg_id is invalid                                                                                             |
| 400  | PEER_ID_INVALID             | The provided peer id is invalid                                                                                                 |
| 400  | PINNED_DIALOGS_TOO_MUCH     | Too many pinned dialogs                                                                                                         |
| 400  | REPLY_MARKUP_INVALID        | The provided reply markup is invalid                                                                                            |
| 400  | SCHEDULE_BOT_NOT_ALLOWED    | Bots cannot schedule messages                                                                                                   |
| 400  | SCHEDULE_DATE_TOO_LATE      | You can't schedule a message this far in the future                                                                             |
| 400  | SCHEDULE_TOO_MUCH           | There are too many scheduled messages                                                                                           |
| 420  | SLOWMODE_WAIT_X             | Slowmode is enabled in this chat: you must wait for the specified number of seconds before sending another message to the chat. |
| 400  | USER_BANNED_IN_CHANNEL      | You're banned from sending messages in supergroups/channels                                                                     |
| 400  | USER_IS_BLOCKED             | You were blocked by this user                                                                                                   |
| 400  | USER_IS_BOT                 | Bots can't send messages to other bots                                                                                          |
| 400  | YOU_BLOCKED_USER            | You blocked this user                                                                                                           |

## Can bots use this method?

Yes

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Scheduled messages](https://core.telegram.org/api/scheduled-messages)

Telegram allows scheduling messages
