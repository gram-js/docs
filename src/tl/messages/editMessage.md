# messages.editMessage

Edit message

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
        new Api.messages.editMessage({
            noWebpage: true,
            peer: new Api.InputPeer({
                /* ... */
            }),
            id: 8810695,
            message: 'random string here',
            media: new Api.InputMedia({
                /* ... */
            }),
            replyMarkup: new Api.ReplyMarkup({
                /* ... */
            }),
            entities: [
                new Api.MessageEntity({
                    /* ... */
                }),
            ],
            scheduleDate: 1557612,
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
        new Api.messages.editMessage({
            noWebpage: true,
            peer: new Api.InputPeer({
                /* ... */
            }),
            id: 8810695,
            message: 'random string here',
            media: new Api.InputMedia({
                /* ... */
            }),
            replyMarkup: new Api.ReplyMarkup({
                /* ... */
            }),
            entities: [
                new Api.MessageEntity({
                    /* ... */
                }),
            ],
            scheduleDate: 1557612,
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
messages.editMessage#48f71778 flags:# no_webpage:flags.1?true peer:InputPeer id:int message:flags.11?string media:flags.14?InputMedia reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.15?int = Updates;
```

## Parameters

|       Name        | Type                                                                                                                                                                                                 | Description                                                                                             |
| :---------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|     **flags**     | [#](https://core.telegram.org/type/%23)                                                                                                                                                              | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|  **no_webpage**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true)                                                                    | Disable webpage preview                                                                                 |
|     **peer**      | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                                                                                                | Where was the message sent                                                                              |
|      **id**       | [int](https://core.telegram.org/type/int)                                                                                                                                                            | ID of the message to edit                                                                               |
|    **message**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[string](https://core.telegram.org/type/string)                                                                      | New message                                                                                             |
|     **media**     | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[InputMedia](https://core.telegram.org/type/InputMedia)                                                              | New attached media                                                                                      |
| **reply_markup**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[ReplyMarkup](https://core.telegram.org/type/ReplyMarkup)                                                             | Reply markup for inline keyboards                                                                       |
|   **entities**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t) < [MessageEntity](https://core.telegram.org/type/MessageEntity) > | [Message entities for styled text](https://core.telegram.org/api/entities)                              |
| **schedule_date** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[int](https://core.telegram.org/type/int)                                                                            | Scheduled message date for [scheduled messages](https://core.telegram.org/api/scheduled-messages)       |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                      | Description                                                                       |
| :--: | ------------------------- | --------------------------------------------------------------------------------- |
| 400  | BUTTON_DATA_INVALID       | The data of one or more of the buttons you provided is invalid                    |
| 400  | BUTTON_TYPE_INVALID       | The type of one or more of the buttons you provided is invalid                    |
| 400  | BUTTON_URL_INVALID        | Button URL invalid                                                                |
| 400  | CHANNEL_INVALID           | The provided channel is invalid                                                   |
| 400  | CHANNEL_PRIVATE           | You haven't joined this channel/supergroup                                        |
| 400  | CHAT_ADMIN_REQUIRED       | You must be an admin in this chat to do this                                      |
| 403  | CHAT_WRITE_FORBIDDEN      | You can't write in this chat                                                      |
| 403  | INLINE_BOT_REQUIRED       | Only the inline bot can edit message                                              |
| 400  | INPUT_USER_DEACTIVATED    | The specified user was deleted                                                    |
| 400  | MEDIA_CAPTION_TOO_LONG    | The caption is too long                                                           |
| 400  | MEDIA_PREV_INVALID        | Previous media invalid                                                            |
| 403  | MESSAGE_AUTHOR_REQUIRED   | Message author required                                                           |
| 400  | MESSAGE_EDIT_TIME_EXPIRED | You can't edit this message anymore, too much time has passed since its creation. |
| 400  | MESSAGE_EMPTY             | The provided message is empty                                                     |
| 400  | MESSAGE_ID_INVALID        | The provided message id is invalid                                                |
| 400  | MESSAGE_NOT_MODIFIED      | The message text has not changed                                                  |
| 400  | MESSAGE_TOO_LONG          | The provided message is too long                                                  |
| 400  | MSG_ID_INVALID            | Invalid message ID provided                                                       |
| 400  | PEER_ID_INVALID           | The provided peer id is invalid                                                   |
| 400  | REPLY_MARKUP_INVALID      | The provided reply markup is invalid                                              |
| 400  | SCHEDULE_DATE_INVALID     | Invalid schedule date provided                                                    |
| 400  | USER_BANNED_IN_CHANNEL    | You're banned from sending messages in supergroups/channels                       |

## Can bots use this method?

Yes

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Scheduled messages](https://core.telegram.org/api/scheduled-messages)

Telegram allows scheduling messages
