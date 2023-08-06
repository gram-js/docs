# messages.SendInlineBotResult

Send a result obtained using [messages.getInlineBotResults](https://core.telegram.org/method/messages.getInlineBotResults).



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

    const result = await client.invoke(new Api.messages.SendInlineBotResult({
    peer: 'username',
    randomId: BigInt('-4156887774564'),
    queryId: BigInt('-4156887774564'),
    id: 'some string here',
    hideVia: true,
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

    const result: Api.Updates = await client.invoke(new Api.messages.SendInlineBotResult({
    peer: 'username',
    randomId: BigInt('-4156887774564'),
    queryId: BigInt('-4156887774564'),
    id: 'some string here',
    hideVia: true,
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
| **silent** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](https://core.telegram.org/constructor/true) | Whether to send the message silently (no notification will be triggered on the other client) 
| **background** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](https://core.telegram.org/constructor/true) | Whether to send the message in background 
| **clearDraft** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](https://core.telegram.org/constructor/true) | Whether to clear the [draft](https://core.telegram.org/api/drafts) 
| **hideVia** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[true](https://core.telegram.org/constructor/true) | Whether to hide the `via @botname` in the resulting message (only for bot usernames encountered in the [config](https://core.telegram.org/constructor/config)) 
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Destination 
| **replyToMsgId** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](https://core.telegram.org/type/int) | ID of the message this message should reply to 
| **randomId** | [long](https://core.telegram.org/type/long) | Random ID to avoid resending the same query 
| **queryId** | [long](https://core.telegram.org/type/long) | Query ID from [messages.getInlineBotResults](https://core.telegram.org/method/messages.getInlineBotResults) 
| **id** | [string](https://core.telegram.org/type/string) | Result ID from [messages.getInlineBotResults](https://core.telegram.org/method/messages.getInlineBotResults) 
| **scheduleDate** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[int](https://core.telegram.org/type/int) | Scheduled message date for scheduled messages 
| **sendAs** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[InputPeer](https://core.telegram.org/type/InputPeer) | Send this message as the specified peer 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | CHANNEL\_INVALID | The provided channel is invalid. 
| 400 | CHANNEL\_PRIVATE | You haven't joined this channel/supergroup. 
| 400 | CHAT\_ADMIN\_REQUIRED | You must be an admin in this chat to do this. 
| 400 | CHAT\_RESTRICTED | You can't send messages in this chat, you were restricted. 
| 403 | CHAT\_SEND\_GAME\_FORBIDDEN | You can't send a game to this chat. 
| 403 | CHAT\_SEND\_GIFS\_FORBIDDEN | You can't send gifs in this chat. 
| 403 | CHAT\_SEND\_INLINE\_FORBIDDEN | You can't send inline messages in this group. 
| 403 | CHAT\_SEND\_MEDIA\_FORBIDDEN | You can't send media in this chat. 
| 403 | CHAT\_SEND\_STICKERS\_FORBIDDEN | You can't send stickers in this chat. 
| 403 | CHAT\_WRITE\_FORBIDDEN | You can't write in this chat. 
| 400 | INLINE\_RESULT\_EXPIRED | The inline query expired. 
| 400 | INPUT\_USER\_DEACTIVATED | The specified user was deleted. 
| 400 | MEDIA\_EMPTY | The provided media object is invalid. 
| 400 | MSG\_ID\_INVALID | Invalid message ID provided. 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid. 
| 400 | QUERY\_ID\_EMPTY | The query ID is empty. 
| 500 | RANDOM\_ID\_DUPLICATE | You provided a random ID that was already used. 
| 400 | RESULT\_ID\_EMPTY | Result ID empty. 
| 400 | SCHEDULE\_DATE\_TOO\_LATE | You can't schedule a message this far in the future. 
| 400 | SCHEDULE\_TOO\_MUCH | There are too many scheduled messages. 
| 420 | SLOWMODE\_WAIT\_%d | Slowmode is enabled in this chat: wait %d seconds before sending another message to this chat. 
| 400 | USER\_BANNED\_IN\_CHANNEL | You're banned from sending messages in supergroups/channels. 
| 400 | WEBPAGE\_CURL\_FAILED | Failure while fetching the webpage with cURL. 
| 400 | WEBPAGE\_MEDIA\_EMPTY | Webpage media empty. 
| 400 | YOU\_BLOCKED\_USER | You blocked this user. 


## Can bots use this method?

No

## Related pages

#### [Message drafts](https://core.telegram.org/api/drafts)

How to handle message drafts



#### [config](https://core.telegram.org/constructor/config)

Current configuration



#### [messages.getInlineBotResults](https://core.telegram.org/method/messages.getInlineBotResults)

Query an inline bot




