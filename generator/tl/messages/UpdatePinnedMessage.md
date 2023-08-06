# messages.UpdatePinnedMessage

Pin a message



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

    const result = await client.invoke(new Api.messages.UpdatePinnedMessage({
    peer: 'username',
    id: 43,
    unpin: true,
    pmOneside: true
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

    const result: Api.Updates = await client.invoke(new Api.messages.UpdatePinnedMessage({
    peer: 'username',
    id: 43,
    unpin: true,
    pmOneside: true
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
| **silent** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Pin the message silently, without triggering a notification 
| **unpin** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true) | Whether the message should unpinned or pinned 
| **pmOneside** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](https://core.telegram.org/constructor/true) | Whether the message should only be pinned on the local side of a one-to-one chat 
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | The peer where to pin the message 
| **id** | [int](https://core.telegram.org/type/int) | The message to pin or unpin 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | BOT\_ONESIDE\_NOT\_AVAIL | Bots can't pin messages in PM just for themselves. 
| 400 | CHANNEL\_PRIVATE | You haven't joined this channel/supergroup. 
| 400 | CHAT\_ADMIN\_REQUIRED | You must be an admin in this chat to do this. 
| 400 | CHAT\_NOT\_MODIFIED | The pinned message wasn't modified. 
| 403 | CHAT\_WRITE\_FORBIDDEN | You can't write in this chat. 
| 400 | MESSAGE\_ID\_INVALID | The provided message id is invalid. 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid. 
| 400 | PIN\_RESTRICTED | You can't pin messages. 
| 400 | USER\_BANNED\_IN\_CHANNEL | You're banned from sending messages in supergroups/channels. 


## Can bots use this method?

Yes

## Related pages


