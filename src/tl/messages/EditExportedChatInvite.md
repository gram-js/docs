# messages.EditExportedChatInvite

Edit an exported chat invite



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

    const result = await client.invoke(new Api.messages.EditExportedChatInvite({
    peer: 'username',
    link: 'some string here',
    revoked: true,
    expireDate: 43,
    usageLimit: 43,
    requestNeeded: false,
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

    const result: Api.messages.ExportedChatInvite = await client.invoke(new Api.messages.EditExportedChatInvite({
    peer: 'username',
    link: 'some string here',
    revoked: true,
    expireDate: 43,
    usageLimit: 43,
    requestNeeded: false,
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
| **revoked** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](https://core.telegram.org/constructor/true) | Whether to revoke the chat invite 
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Chat 
| **link** | [string](https://core.telegram.org/type/string) | Invite link 
| **expireDate** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](https://core.telegram.org/type/int) | New expiration date 
| **usageLimit** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](https://core.telegram.org/type/int) | Maximum number of users that can join using this link 
| **requestNeeded** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Bool](https://core.telegram.org/type/Bool) | Whether admin confirmation is required before admitting each separate user into the chat 
| **title** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[string](https://core.telegram.org/type/string) | Description of the invite link, visible only to administrators 


## Result

[messages.ExportedChatInvite](https://core.telegram.org/type/messages.ExportedChatInvite)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 403 | EDIT\_BOT\_INVITE\_FORBIDDEN | Normal users can't edit invites that were created by bots. 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid. 


## Can bots use this method?

Yes

## Related pages


