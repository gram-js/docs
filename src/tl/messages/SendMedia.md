# messages.SendMedia

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
    const result = await client.invoke(new Api.messages.SendMedia({
    peer: 'username',
    media: new Api.InputMediaUploadedPhoto({
        file: client.uploadFile('/path/to/file.jpg'),
        stickers: [new Api.InputDocument({
            id: BigInt('-4156887774564'),
            accessHash: BigInt('-4156887774564'),
            fileReference: Buffer.from('arbitrary data here')
        })],
        ttlSeconds: 43
    }),
    message: 'Hello there!',
    randomId: BigInt('-4156887774564'),
    scheduleDate: 43
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
    const result: Api.Updates = await client.invoke(new Api.messages.SendMedia({
    peer: 'username',
    media: new Api.InputMediaUploadedPhoto({
        file: client.uploadFile('/path/to/file.jpg'),
        stickers: [new Api.InputDocument({
            id: BigInt('-4156887774564'),
            accessHash: BigInt('-4156887774564'),
            fileReference: Buffer.from('arbitrary data here')
        })],
        ttlSeconds: 43
    }),
    message: 'Hello there!',
    randomId: BigInt('-4156887774564'),
    scheduleDate: 43
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **flags** | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) 
| **silent** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](https://core.telegram.org/constructor/true) | Send message silently (no notification should be triggered) 
| **background** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](https://core.telegram.org/constructor/true) | Send message in background 
| **clearDraft** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](https://core.telegram.org/constructor/true) | Clear the draft 
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Destination 
| **replyToMsgId** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](https://core.telegram.org/type/int) | Message ID to which this message should reply to 
| **media** | [InputMedia](https://core.telegram.org/type/InputMedia) | Attached media 
| **message** | [string](https://core.telegram.org/type/string) | Caption 
| **randomId** | [long](https://core.telegram.org/type/long) | Random ID to avoid resending the same message 
| **replyMarkup** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[ReplyMarkup](https://core.telegram.org/type/ReplyMarkup) | Reply markup for bot keyboards 
| **entities** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](https://core.telegram.org/type/MessageEntity)> | Message [entities](https://core.telegram.org/api/entities) for styled text 
| **scheduleDate** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[int](https://core.telegram.org/type/int) | Scheduled message date for [scheduled messages](https://core.telegram.org/api/scheduled-messages) 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | BROADCAST\_PUBLIC\_VOTERS\_FORBIDDEN | You can't forward polls with public voters 
| 400 | BUTTON\_DATA\_INVALID | The data of one or more of the buttons you provided is invalid 
| 400 | BUTTON\_TYPE\_INVALID | The type of one or more of the buttons you provided is invalid 
| 400 | BUTTON\_URL\_INVALID | Button URL invalid 
| 400 | CHANNEL\_INVALID | The provided channel is invalid 
| 400 | CHANNEL\_PRIVATE | You haven't joined this channel/supergroup 
| 400 | CHAT\_ADMIN\_REQUIRED | You must be an admin in this chat to do this 
| 400 | CHAT\_RESTRICTED | You can't send messages in this chat, you were restricted 
| 403 | CHAT\_SEND\_GIFS\_FORBIDDEN | You can't send gifs in this chat 
| 403 | CHAT\_SEND\_MEDIA\_FORBIDDEN | You can't send media in this chat 
| 403 | CHAT\_SEND\_STICKERS\_FORBIDDEN | You can't send stickers in this chat. 
| 403 | CHAT\_WRITE\_FORBIDDEN | You can't write in this chat 
| 400 | EXTERNAL\_URL\_INVALID | External URL invalid 
| 400 | FILE\_PARTS\_INVALID | The number of file parts is invalid 
| 400 | FILE\_PART\_LENGTH\_INVALID | The length of a file part is invalid 
| 400 | IMAGE\_PROCESS\_FAILED | Failure while processing image 
| 400 | INPUT\_USER\_DEACTIVATED | The specified user was deleted 
| 400 | MD5\_CHECKSUM\_INVALID | The MD5 checksums do not match 
| 400 | MEDIA\_CAPTION\_TOO\_LONG | The caption is too long 
| 400 | MEDIA\_EMPTY | The provided media object is invalid 
| 400 | MEDIA\_INVALID | Media invalid 
| 400 | MSG\_ID\_INVALID | Invalid message ID provided 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid 
| 400 | PHOTO\_EXT\_INVALID | The extension of the photo is invalid 
| 400 | PHOTO\_INVALID\_DIMENSIONS | The photo dimensions are invalid 
| 400 | PHOTO\_SAVE\_FILE\_INVALID | Internal issues, try again later 
| 400 | POLL\_ANSWERS\_INVALID | Invalid poll answers were provided 
| 400 | POLL\_OPTION\_DUPLICATE | Duplicate poll options provided 
| 400 | POLL\_OPTION\_INVALID | Invalid poll option provided 
| 400 | QUIZ\_CORRECT\_ANSWERS\_EMPTY | No correct quiz answer was specified 
| 400 | QUIZ\_CORRECT\_ANSWER\_INVALID | An invalid value was provided to the correct\_answers field 
| 400 | REPLY\_MARKUP\_BUY\_EMPTY | Reply markup for buy button empty 
| 400 | REPLY\_MARKUP\_INVALID | The provided reply markup is invalid 
| 400 | SCHEDULE\_TOO\_MUCH | There are too many scheduled messages 
| 420 | SLOWMODE\_WAIT\_X | Slowmode is enabled in this chat: you must wait for the specified number of seconds before sending another message to the chat. 
| 400 | TTL\_MEDIA\_INVALID | Invalid media Time To Live was provided 
| 400 | USER\_BANNED\_IN\_CHANNEL | You're banned from sending messages in supergroups/channels 
| 400 | USER\_IS\_BLOCKED | You were blocked by this user 
| 400 | USER\_IS\_BOT | Bots can't send messages to other bots 
| 400 | WEBPAGE\_CURL\_FAILED | Failure while fetching the webpage with cURL 
| 400 | WEBPAGE\_MEDIA\_EMPTY | Webpage media empty 
| 400 | YOU\_BLOCKED\_USER | You blocked this user 


## Can bots use this method?

Yes

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities



#### [Scheduled messages](https://core.telegram.org/api/scheduled-messages)

Telegram allows scheduling messages




