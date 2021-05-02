# messages.sendInlineBotResult

Send a result obtained using [messages.getInlineBotResults](https://core.telegram.org/method/messages.getInlineBotResults).

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
        new Api.messages.sendInlineBotResult({
            silent: true,
            background: true,
            clearDraft: true,
            hideVia: true,
            peer: new Api.InputPeer({
                /* ... */
            }),
            replyToMsgId: 2934528,
            randomId: 7448617,
            queryId: 388190,
            id: 'random string here',
            scheduleDate: 5444600,
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
    const result: Api.Updates = await client.invoke(
        new Api.messages.sendInlineBotResult({
            silent: true,
            background: true,
            clearDraft: true,
            hideVia: true,
            peer: new Api.InputPeer({
                /* ... */
            }),
            replyToMsgId: 2934528,
            randomId: 7448617,
            queryId: 388190,
            id: 'random string here',
            scheduleDate: 5444600,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
updatesTooLong#e317af7e = Updates;
updateShortMessage#2296d2c8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:int message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?int reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> = Updates;
updateShortChatMessage#402d5dbb flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:int chat_id:int message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?int reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#11f1331c flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> = Updates;
---functions---
messages.sendInlineBotResult#220815b0 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true hide_via:flags.11?true peer:InputPeer reply_to_msg_id:flags.0?int random_id:long query_id:long id:string schedule_date:flags.10?int = Updates;
```

## Parameters

|        Name         | Type                                                                                                                               | Description                                                                                                                                                  |
| :-----------------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|      **flags**      | [#](https://core.telegram.org/type/%23)                                                                                            | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)                                                      |
|     **silent**      | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](https://core.telegram.org/constructor/true)  | Whether to send the message silently (no notification will be triggered on the other client)                                                                 |
|   **background**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](https://core.telegram.org/constructor/true)  | Whether to send the message in background                                                                                                                    |
|   **clear_draft**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](https://core.telegram.org/constructor/true)  | Whether to clear the [draft](https://core.telegram.org/api/drafts)                                                                                           |
|    **hide_via**     | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[true](https://core.telegram.org/constructor/true) | Whether to hide the via @botname in the resulting message (only for bot usernames encountered in the [config](https://core.telegram.org/constructor/config)) |
|      **peer**       | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                              | Destination                                                                                                                                                  |
| **reply_to_msg_id** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](https://core.telegram.org/type/int)           | ID of the message this message should reply to                                                                                                               |
|    **random_id**    | [long](https://core.telegram.org/type/long)                                                                                        | Random ID to avoid resending the same query                                                                                                                  |
|    **query_id**     | [long](https://core.telegram.org/type/long)                                                                                        | Query ID from [messages.getInlineBotResults](https://core.telegram.org/method/messages.getInlineBotResults)                                                  |
|       **id**        | [string](https://core.telegram.org/type/string)                                                                                    | Result ID from [messages.getInlineBotResults](https://core.telegram.org/method/messages.getInlineBotResults)                                                 |
|  **schedule_date**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[int](https://core.telegram.org/type/int)          | Scheduled message date for scheduled messages                                                                                                                |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                         | Description                                                                                                                     |
| :--: | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 400  | CHANNEL_INVALID              | The provided channel is invalid                                                                                                 |
| 400  | CHANNEL_PRIVATE              | You haven't joined this channel/supergroup                                                                                      |
| 400  | CHAT_ADMIN_REQUIRED          | You must be an admin in this chat to do this                                                                                    |
| 400  | CHAT_RESTRICTED              | You can't send messages in this chat, you were restricted                                                                       |
| 403  | CHAT_SEND_GIFS_FORBIDDEN     | You can't send gifs in this chat                                                                                                |
| 403  | CHAT_SEND_INLINE_FORBIDDEN   | You can't send inline messages in this group                                                                                    |
| 403  | CHAT_SEND_MEDIA_FORBIDDEN    | You can't send media in this chat                                                                                               |
| 403  | CHAT_SEND_STICKERS_FORBIDDEN | You can't send stickers in this chat.                                                                                           |
| 403  | CHAT_WRITE_FORBIDDEN         | You can't write in this chat                                                                                                    |
| 400  | INLINE_RESULT_EXPIRED        | The inline query expired                                                                                                        |
| 400  | INPUT_USER_DEACTIVATED       | The specified user was deleted                                                                                                  |
| 400  | MEDIA_EMPTY                  | The provided media object is invalid                                                                                            |
| 400  | MSG_ID_INVALID               | Invalid message ID provided                                                                                                     |
| 400  | PEER_ID_INVALID              | The provided peer id is invalid                                                                                                 |
| 400  | QUERY_ID_EMPTY               | The query ID is empty                                                                                                           |
| 400  | RESULT_ID_EMPTY              | Result ID empty                                                                                                                 |
| 420  | SLOWMODE_WAIT_X              | Slowmode is enabled in this chat: you must wait for the specified number of seconds before sending another message to the chat. |
| 400  | USER_BANNED_IN_CHANNEL       | You're banned from sending messages in supergroups/channels                                                                     |
| 400  | WEBPAGE_CURL_FAILED          | Failure while fetching the webpage with cURL                                                                                    |
| 400  | WEBPAGE_MEDIA_EMPTY          | Webpage media empty                                                                                                             |
| 400  | YOU_BLOCKED_USER             | You blocked this user                                                                                                           |

## Can bots use this method?

Yes

## Related pages

### [Message drafts](https://core.telegram.org/api/drafts)

How to handle message drafts

### [config](https://core.telegram.org/constructor/config)

Current configuration

### [messages.getInlineBotResults](https://core.telegram.org/method/messages.getInlineBotResults)

Query an inline bot
