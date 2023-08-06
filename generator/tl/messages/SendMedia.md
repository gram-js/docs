# messages.SendMedia

Send a media



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession(''); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    await client.connect() // This assumes you have already authenticated with .start()

    const result = await client.invoke(new Api.messages.SendMedia({
    peer: 'username',
    media: new Api.InputMediaUploadedPhoto({
        file: await client.uploadFile({file:new CustomFile("file.bin", fs.statSync("../file.bin").size, "../file.bin"),workers:1}),
        spoiler: true,
        stickers: [new Api.InputDocument({
            id: BigInt('-4156887774564'),
            accessHash: BigInt('-4156887774564'),
            fileReference: Buffer.from('arbitrary data here')
        })],
        ttlSeconds: 43
    }),
    message: 'Hello there!',
    randomId: BigInt('-4156887774564'),
    noforwards: true,
    updateStickersetsOrder: true,
    replyTo: new Api.InputReplyToMessage({
        replyToMsgId: 43,
        topMsgId: 43
    }),
    scheduleDate: 43,
    sendAs: 'username'
}));
    console.log(result); // prints the result
})();
```
:::

:::tab{title="TypeScript"}
```ts
import {Api, TelegramClient} from 'telegram';
import {StringSession} from 'telegram/sessions';

const session = new StringSession(''); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    await client.connect() // This assumes you have already authenticated with .start()

    const result: Api.Updates = await client.invoke(new Api.messages.SendMedia({
    peer: 'username',
    media: new Api.InputMediaUploadedPhoto({
        file: await client.uploadFile({file:new CustomFile("file.bin", fs.statSync("../file.bin").size, "../file.bin"),workers:1}),
        spoiler: true,
        stickers: [new Api.InputDocument({
            id: BigInt('-4156887774564'),
            accessHash: BigInt('-4156887774564'),
            fileReference: Buffer.from('arbitrary data here')
        })],
        ttlSeconds: 43
    }),
    message: 'Hello there!',
    randomId: BigInt('-4156887774564'),
    noforwards: true,
    updateStickersetsOrder: true,
    replyTo: new Api.InputReplyToMessage({
        replyToMsgId: 43,
        topMsgId: 43
    }),
    scheduleDate: 43,
    sendAs: 'username'
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
| **noforwards** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[true](https://core.telegram.org/constructor/true) | Only for bots, disallows forwarding and saving of the messages, even if the destination chat doesn't have [content protection](https://telegram.org/blog/protected-content-delete-by-date-and-more) enabled 
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Destination 
| **replyToMsgId** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](https://core.telegram.org/type/int) | Message ID to which this message should reply to 
| **media** | [InputMedia](https://core.telegram.org/type/InputMedia) | Attached media 
| **message** | [string](https://core.telegram.org/type/string) | Caption 
| **randomId** | [long](https://core.telegram.org/type/long) | Random ID to avoid resending the same message 
| **replyMarkup** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[ReplyMarkup](https://core.telegram.org/type/ReplyMarkup) | Reply markup for bot keyboards 
| **entities** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](https://core.telegram.org/type/MessageEntity)> | Message [entities](https://core.telegram.org/api/entities) for styled text 
| **scheduleDate** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[int](https://core.telegram.org/type/int) | Scheduled message date for [scheduled messages](https://core.telegram.org/api/scheduled-messages) 
| **sendAs** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[InputPeer](https://core.telegram.org/type/InputPeer) | Send this message as the specified peer 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | BOT\_PAYMENTS\_DISABLED | Please enable bot payments in botfather before calling this method. 
| 400 | BROADCAST\_PUBLIC\_VOTERS\_FORBIDDEN | You can't forward polls with public voters. 
| 400 | BUTTON\_DATA\_INVALID | The data of one or more of the buttons you provided is invalid. 
| 400 | BUTTON\_TYPE\_INVALID | The type of one or more of the buttons you provided is invalid. 
| 400 | BUTTON\_URL\_INVALID | Button URL invalid. 
| 400 | CHANNEL\_INVALID | The provided channel is invalid. 
| 400 | CHANNEL\_PRIVATE | You haven't joined this channel/supergroup. 
| 400 | CHAT\_ADMIN\_REQUIRED | You must be an admin in this chat to do this. 
| 400 | CHAT\_FORWARDS\_RESTRICTED | You can't forward messages from a protected chat. 
| 400 | CHAT\_RESTRICTED | You can't send messages in this chat, you were restricted. 
| 403 | CHAT\_SEND\_GIFS\_FORBIDDEN | You can't send gifs in this chat. 
| 403 | CHAT\_SEND\_MEDIA\_FORBIDDEN | You can't send media in this chat. 
| 403 | CHAT\_SEND\_POLL\_FORBIDDEN | You can't send polls in this chat. 
| 403 | CHAT\_SEND\_STICKERS\_FORBIDDEN | You can't send stickers in this chat. 
| 403 | CHAT\_WRITE\_FORBIDDEN | You can't write in this chat. 
| 400 | CURRENCY\_TOTAL\_AMOUNT\_INVALID | The total amount of all prices is invalid. 
| 400 | EMOTICON\_INVALID | The specified emoji is invalid. 
| 400 | EXTERNAL\_URL\_INVALID | External URL invalid. 
| 400 | FILE\_PARTS\_INVALID | The number of file parts is invalid. 
| 400 | FILE\_PART\_LENGTH\_INVALID | The length of a file part is invalid. 
| 400 | FILE\_REFERENCE\_EMPTY | An empty [file reference](https://core.telegram.org/api/file_reference) was specified. 
| 400 | FILE\_REFERENCE\_EXPIRED | File reference expired, it must be refetched as described in [the documentation](https://core.telegram.org/api/file_reference). 
| 400 | GAME\_BOT\_INVALID | Bots can't send another bot's game. 
| 400 | IMAGE\_PROCESS\_FAILED | Failure while processing image. 
| 400 | INPUT\_USER\_DEACTIVATED | The specified user was deleted. 
| 400 | MD5\_CHECKSUM\_INVALID | The MD5 checksums do not match. 
| 400 | MEDIA\_CAPTION\_TOO\_LONG | The caption is too long. 
| 400 | MEDIA\_EMPTY | The provided media object is invalid. 
| 400 | MEDIA\_INVALID | Media invalid. 
| 400 | MSG\_ID\_INVALID | Invalid message ID provided. 
| 400 | PAYMENT\_PROVIDER\_INVALID | The specified payment provider is invalid. 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid. 
| 400 | PHOTO\_EXT\_INVALID | The extension of the photo is invalid. 
| 400 | PHOTO\_INVALID\_DIMENSIONS | The photo dimensions are invalid. 
| 400 | PHOTO\_SAVE\_FILE\_INVALID | Internal issues, try again later. 
| 400 | POLL\_ANSWERS\_INVALID | Invalid poll answers were provided. 
| 400 | POLL\_ANSWER\_INVALID | One of the poll answers is not acceptable. 
| 400 | POLL\_OPTION\_DUPLICATE | Duplicate poll options provided. 
| 400 | POLL\_OPTION\_INVALID | Invalid poll option provided. 
| 400 | POLL\_QUESTION\_INVALID | One of the poll questions is not acceptable. 
| 400 | QUIZ\_CORRECT\_ANSWERS\_EMPTY | No correct quiz answer was specified. 
| 400 | QUIZ\_CORRECT\_ANSWERS\_TOO\_MUCH | You specified too many correct answers in a quiz, quizzes can only have one right answer! 
| 400 | QUIZ\_CORRECT\_ANSWER\_INVALID | An invalid value was provided to the correct\_answers field. 
| 400 | QUIZ\_MULTIPLE\_INVALID | Quizzes can't have the multiple\_choice flag set! 
| 500 | RANDOM\_ID\_DUPLICATE | You provided a random ID that was already used. 
| 400 | REPLY\_MARKUP\_BUY\_EMPTY | Reply markup for buy button empty. 
| 400 | REPLY\_MARKUP\_INVALID | The provided reply markup is invalid. 
| 400 | SCHEDULE\_BOT\_NOT\_ALLOWED | Bots cannot schedule messages. 
| 400 | SCHEDULE\_DATE\_TOO\_LATE | You can't schedule a message this far in the future. 
| 400 | SCHEDULE\_TOO\_MUCH | There are too many scheduled messages. 
| 400 | SEND\_AS\_PEER\_INVALID | You can't send messages as the specified peer. 
| 420 | SLOWMODE\_WAIT\_%d | Slowmode is enabled in this chat: wait %d seconds before sending another message to this chat. 
| 400 | TTL\_MEDIA\_INVALID | Invalid media Time To Live was provided. 
| 400 | USER\_BANNED\_IN\_CHANNEL | You're banned from sending messages in supergroups/channels. 
| 403 | USER\_IS\_BLOCKED | You were blocked by this user. 
| 400 | USER\_IS\_BOT | Bots can't send messages to other bots. 
| 400 | VIDEO\_CONTENT\_TYPE\_INVALID | The video's content type is invalid. 
| 400 | WEBPAGE\_CURL\_FAILED | Failure while fetching the webpage with cURL. 
| 400 | WEBPAGE\_MEDIA\_EMPTY | Webpage media empty. 
| 400 | YOU\_BLOCKED\_USER | You blocked this user. 


## Can bots use this method?

Yes

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities



#### [Scheduled messages](https://core.telegram.org/api/scheduled-messages)

Telegram allows scheduling messages



#### [File references](https://core.telegram.org/api/file\_reference)

How to handle file references.




