# messages.sendMultiMedia

Send an [album or grouped media](https://core.telegram.org/api/files#albums-grouped-media)

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
        new Api.messages.sendMultiMedia({
            silent: true,
            background: true,
            clearDraft: true,
            peer: new Api.InputPeer({
                /* ... */
            }),
            replyToMsgId: 9838180,
            multiMedia: [
                new Api.InputSingleMedia({
                    /* ... */
                }),
            ],
            scheduleDate: 6930295,
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
        new Api.messages.sendMultiMedia({
            silent: true,
            background: true,
            clearDraft: true,
            peer: new Api.InputPeer({
                /* ... */
            }),
            replyToMsgId: 9838180,
            multiMedia: [
                new Api.InputSingleMedia({
                    /* ... */
                }),
            ],
            scheduleDate: 6930295,
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
messages.sendMultiMedia#cc0110cb flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true peer:InputPeer reply_to_msg_id:flags.0?int multi_media:Vector<InputSingleMedia> schedule_date:flags.10?int = Updates;
```

## Parameters

|        Name         | Type                                                                                                                              | Description                                                                                             |
| :-----------------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|      **flags**      | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|     **silent**      | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](https://core.telegram.org/constructor/true) | Whether to send the album silently (no notification triggered)                                          |
|   **background**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](https://core.telegram.org/constructor/true) | Send in background?                                                                                     |
|   **clear_draft**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](https://core.telegram.org/constructor/true) | Whether to clear [drafts](https://core.telegram.org/api/drafts)                                         |
|      **peer**       | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                             | The destination chat                                                                                    |
| **reply_to_msg_id** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](https://core.telegram.org/type/int)          | The message to reply to                                                                                 |
|   **multi_media**   | [Vector](https://core.telegram.org/type/Vector%20t) < [InputSingleMedia](https://core.telegram.org/type/InputSingleMedia) >       | The medias to send                                                                                      |
|  **schedule_date**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[int](https://core.telegram.org/type/int)         | Scheduled message date for scheduled messages                                                           |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                 | Description                                  |
| :--: | -------------------- | -------------------------------------------- |
| 400  | CHAT_ADMIN_REQUIRED  | You must be an admin in this chat to do this |
| 400  | MEDIA_EMPTY          | The provided media object is invalid         |
| 400  | MEDIA_INVALID        | Media invalid                                |
| 400  | MULTI_MEDIA_TOO_LONG | Too many media files for album               |
| 400  | PEER_ID_INVALID      | The provided peer id is invalid              |
| 400  | RANDOM_ID_EMPTY      | Random ID empty                              |

## Can bots use this method?

Yes

## Related pages

### [Message drafts](https://core.telegram.org/api/drafts)

How to handle message drafts

### [Uploading and Downloading Files](https://core.telegram.org/api/files)

How to transfer large data batches correctly.
