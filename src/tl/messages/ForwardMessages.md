# messages.ForwardMessages

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
    const result = await client.invoke(new Api.messages.ForwardMessages({
    fromPeer: 'username',
    id: [43],
    randomId: [BigInt('-4156887774564')],
    toPeer: 'username',
    withMyScore: true,
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
    const result: Api.Updates = await client.invoke(new Api.messages.ForwardMessages({
    fromPeer: 'username',
    id: [43],
    randomId: [BigInt('-4156887774564')],
    toPeer: 'username',
    withMyScore: true,
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
| **silent** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](https://core.telegram.org/constructor/true) | Whether to send messages silently (no notification will be triggered on the destination clients) 
| **background** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](https://core.telegram.org/constructor/true) | Whether to send the message in background 
| **withMyScore** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](https://core.telegram.org/constructor/true) | When forwarding games, whether to include your score in the game 
| **fromPeer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Source of messages 
| **id** | [Vector](https://core.telegram.org/type/Vector%20t)<[int](https://core.telegram.org/type/int)> | IDs of messages 
| **randomId** | [Vector](https://core.telegram.org/type/Vector%20t)<[long](https://core.telegram.org/type/long)> | Random ID to prevent resending of messages 
| **toPeer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Destination peer 
| **scheduleDate** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[int](https://core.telegram.org/type/int) | Scheduled message date for scheduled messages 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | BROADCAST\_PUBLIC\_VOTERS\_FORBIDDEN | You can't forward polls with public voters 
| 400 | CHANNEL\_INVALID | The provided channel is invalid 
| 400 | CHANNEL\_PRIVATE | You haven't joined this channel/supergroup 
| 400 | CHAT\_ADMIN\_REQUIRED | You must be an admin in this chat to do this 
| 400 | CHAT\_ID\_INVALID | The provided chat id is invalid 
| 400 | CHAT\_RESTRICTED | You can't send messages in this chat, you were restricted 
| 403 | CHAT\_SEND\_GIFS\_FORBIDDEN | You can't send gifs in this chat 
| 403 | CHAT\_SEND\_MEDIA\_FORBIDDEN | You can't send media in this chat 
| 403 | CHAT\_SEND\_POLL\_FORBIDDEN | You can't send polls in this chat 
| 403 | CHAT\_SEND\_STICKERS\_FORBIDDEN | You can't send stickers in this chat. 
| 403 | CHAT\_WRITE\_FORBIDDEN | You can't write in this chat 
| 400 | GROUPED\_MEDIA\_INVALID | Invalid grouped media 
| 400 | INPUT\_USER\_DEACTIVATED | The specified user was deleted 
| 400 | MEDIA\_EMPTY | The provided media object is invalid 
| 400 | MESSAGE\_IDS\_EMPTY | No message ids were provided 
| 400 | MESSAGE\_ID\_INVALID | The provided message id is invalid 
| 400 | MSG\_ID\_INVALID | Invalid message ID provided 
| 420 | P0NY\_FLOODWAIT |  
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid 
| 400 | RANDOM\_ID\_INVALID | A provided random ID is invalid 
| 400 | SCHEDULE\_TOO\_MUCH | There are too many scheduled messages 
| 400 | SLOWMODE\_MULTI\_MSGS\_DISABLED | Slowmode is enabled, you cannot forward multiple messages to this group. 
| 420 | SLOWMODE\_WAIT\_X | Slowmode is enabled in this chat: you must wait for the specified number of seconds before sending another message to the chat. 
| 400 | USER\_BANNED\_IN\_CHANNEL | You're banned from sending messages in supergroups/channels 
| 400 | USER\_IS\_BLOCKED | You were blocked by this user 
| 400 | USER\_IS\_BOT | Bots can't send messages to other bots 
| 400 | YOU\_BLOCKED\_USER | You blocked this user 


## Can bots use this method?

Yes

## Related pages


