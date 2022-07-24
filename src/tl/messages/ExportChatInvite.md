# messages.ExportChatInvite

Export an invite link for a chat



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

    const result = await client.invoke(new Api.messages.ExportChatInvite({
    peer: 'username',
    legacyRevokePermanent: true,
    requestNeeded: true,
    expireDate: 43,
    usageLimit: 43,
    title: 'My very normal title'
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

    const result: Api.ExportedChatInvite = await client.invoke(new Api.messages.ExportChatInvite({
    peer: 'username',
    legacyRevokePermanent: true,
    requestNeeded: true,
    expireDate: 43,
    usageLimit: 43,
    title: 'My very normal title'
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
| **legacyRevokePermanent** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](https://core.telegram.org/constructor/true) | Legacy flag, reproducing legacy behavior of this method: if set, revokes all previous links before creating a new one. Kept for bot API BC, should not be used by modern clients. 
| **requestNeeded** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](https://core.telegram.org/constructor/true) | Whether admin confirmation is required before admitting each separate user into the chat 
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Chat 
| **expireDate** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](https://core.telegram.org/type/int) | Expiration date 
| **usageLimit** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](https://core.telegram.org/type/int) | Maximum number of users that can join using this link 
| **title** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[string](https://core.telegram.org/type/string) | Description of the invite link, visible only to administrators 


## Result

[ExportedChatInvite](https://core.telegram.org/type/ExportedChatInvite)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | CHANNEL\_PRIVATE | You haven't joined this channel/supergroup. 
| 400 | CHAT\_ADMIN\_REQUIRED | You must be an admin in this chat to do this. 
| 400 | CHAT\_ID\_INVALID | The provided chat id is invalid. 
| 403 | CHAT\_WRITE\_FORBIDDEN | You can't write in this chat. 
| 400 | EXPIRE\_DATE\_INVALID | The specified expiration date is invalid. 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid. 
| 400 | USAGE\_LIMIT\_INVALID | The specified usage limit is invalid. 


## Can bots use this method?

Yes

## Related pages


