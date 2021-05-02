# messages.sendMedia

Send a media

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.sendMedia({
		silent: true,
		background: true,
		clearDraft: true,
		peer: new Api.InputPeer({...}),
		replyToMsgId: 2388882,
		media: new Api.InputMedia({...}),
		message: 'random string here',
		randomId: 9782360,
		replyMarkup: new Api.ReplyMarkup({...}),
		entities: [new Api.MessageEntity({...})],
		scheduleDate: 5175296,
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
    const result: Api.Updates = await client.invoke(new Api.messages.sendMedia({
		silent: true,
		background: true,
		clearDraft: true,
		peer: new Api.InputPeer({...}),
		replyToMsgId: 2388882,
		media: new Api.InputMedia({...}),
		message: 'random string here',
		randomId: 9782360,
		replyMarkup: new Api.ReplyMarkup({...}),
		entities: [new Api.MessageEntity({...})],
		scheduleDate: 5175296,
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
messages.sendMedia#3491eba9 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true peer:InputPeer reply_to_msg_id:flags.0?int media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int = Updates;
```

## Parameters

|        Name         | Type                                                                                                                                                                                                 | Description                                                                                             |
| :-----------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|      **flags**      | [#](https://core.telegram.org/type/%23)                                                                                                                                                              | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|     **silent**      | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](https://core.telegram.org/constructor/true)                                                                    | Send message silently (no notification should be triggered)                                             |
|   **background**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](https://core.telegram.org/constructor/true)                                                                    | Send message in background                                                                              |
|   **clear_draft**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](https://core.telegram.org/constructor/true)                                                                    | Clear the draft                                                                                         |
|      **peer**       | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                                                                                                | Destination                                                                                             |
| **reply_to_msg_id** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](https://core.telegram.org/type/int)                                                                             | Message ID to which this message should reply to                                                        |
|      **media**      | [InputMedia](https://core.telegram.org/type/InputMedia)                                                                                                                                              | Attached media                                                                                          |
|     **message**     | [string](https://core.telegram.org/type/string)                                                                                                                                                      | Caption                                                                                                 |
|    **random_id**    | [long](https://core.telegram.org/type/long)                                                                                                                                                          | Random ID to avoid resending the same message                                                           |
|  **reply_markup**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[ReplyMarkup](https://core.telegram.org/type/ReplyMarkup)                                                             | Reply markup for bot keyboards                                                                          |
|    **entities**     | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t) < [MessageEntity](https://core.telegram.org/type/MessageEntity) > | Message [entities](https://core.telegram.org/api/entities) for styled text                              |
|  **schedule_date**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[int](https://core.telegram.org/type/int)                                                                            | Scheduled message date for [scheduled messages](https://core.telegram.org/api/scheduled-messages)       |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                              | Description                                                                                                                     |
| :--: | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 400  | BROADCAST_PUBLIC_VOTERS_FORBIDDEN | You can't forward polls with public voters                                                                                      |
| 400  | BUTTON_DATA_INVALID               | The data of one or more of the buttons you provided is invalid                                                                  |
| 400  | BUTTON_TYPE_INVALID               | The type of one or more of the buttons you provided is invalid                                                                  |
| 400  | BUTTON_URL_INVALID                | Button URL invalid                                                                                                              |
| 400  | CHANNEL_INVALID                   | The provided channel is invalid                                                                                                 |
| 400  | CHANNEL_PRIVATE                   | You haven't joined this channel/supergroup                                                                                      |
| 400  | CHAT_ADMIN_REQUIRED               | You must be an admin in this chat to do this                                                                                    |
| 400  | CHAT_RESTRICTED                   | You can't send messages in this chat, you were restricted                                                                       |
| 403  | CHAT_SEND_GIFS_FORBIDDEN          | You can't send gifs in this chat                                                                                                |
| 403  | CHAT_SEND_MEDIA_FORBIDDEN         | You can't send media in this chat                                                                                               |
| 403  | CHAT_SEND_STICKERS_FORBIDDEN      | You can't send stickers in this chat.                                                                                           |
| 403  | CHAT_WRITE_FORBIDDEN              | You can't write in this chat                                                                                                    |
| 400  | EXTERNAL_URL_INVALID              | External URL invalid                                                                                                            |
| 400  | FILE_PARTS_INVALID                | The number of file parts is invalid                                                                                             |
| 400  | FILE_PART_LENGTH_INVALID          | The length of a file part is invalid                                                                                            |
| 400  | IMAGE_PROCESS_FAILED              | Failure while processing image                                                                                                  |
| 400  | INPUT_USER_DEACTIVATED            | The specified user was deleted                                                                                                  |
| 400  | MD5_CHECKSUM_INVALID              | The MD5 checksums do not match                                                                                                  |
| 400  | MEDIA_CAPTION_TOO_LONG            | The caption is too long                                                                                                         |
| 400  | MEDIA_EMPTY                       | The provided media object is invalid                                                                                            |
| 400  | MEDIA_INVALID                     | Media invalid                                                                                                                   |
| 400  | MSG_ID_INVALID                    | Invalid message ID provided                                                                                                     |
| 400  | PEER_ID_INVALID                   | The provided peer id is invalid                                                                                                 |
| 400  | PHOTO_EXT_INVALID                 | The extension of the photo is invalid                                                                                           |
| 400  | PHOTO_INVALID_DIMENSIONS          | The photo dimensions are invalid                                                                                                |
| 400  | PHOTO_SAVE_FILE_INVALID           | Internal issues, try again later                                                                                                |
| 400  | POLL_ANSWERS_INVALID              | Invalid poll answers were provided                                                                                              |
| 400  | POLL_OPTION_DUPLICATE             | Duplicate poll options provided                                                                                                 |
| 400  | POLL_OPTION_INVALID               | Invalid poll option provided                                                                                                    |
| 400  | QUIZ_CORRECT_ANSWERS_EMPTY        | No correct quiz answer was specified                                                                                            |
| 400  | QUIZ_CORRECT_ANSWER_INVALID       | An invalid value was provided to the correct_answers field                                                                      |
| 400  | REPLY_MARKUP_BUY_EMPTY            | Reply markup for buy button empty                                                                                               |
| 400  | REPLY_MARKUP_INVALID              | The provided reply markup is invalid                                                                                            |
| 400  | SCHEDULE_TOO_MUCH                 | There are too many scheduled messages                                                                                           |
| 420  | SLOWMODE_WAIT_X                   | Slowmode is enabled in this chat: you must wait for the specified number of seconds before sending another message to the chat. |
| 400  | TTL_MEDIA_INVALID                 | Invalid media Time To Live was provided                                                                                         |
| 400  | USER_BANNED_IN_CHANNEL            | You're banned from sending messages in supergroups/channels                                                                     |
| 400  | USER_IS_BLOCKED                   | You were blocked by this user                                                                                                   |
| 400  | USER_IS_BOT                       | Bots can't send messages to other bots                                                                                          |
| 400  | WEBPAGE_CURL_FAILED               | Failure while fetching the webpage with cURL                                                                                    |
| 400  | WEBPAGE_MEDIA_EMPTY               | Webpage media empty                                                                                                             |
| 400  | YOU_BLOCKED_USER                  | You blocked this user                                                                                                           |

## Can bots use this method?

Yes

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Scheduled messages](https://core.telegram.org/api/scheduled-messages)

Telegram allows scheduling messages
