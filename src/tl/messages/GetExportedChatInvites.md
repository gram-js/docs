# messages.GetExportedChatInvites

Get info about the chat invites of a specific chat



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

    const result = await client.invoke(new Api.messages.GetExportedChatInvites({
    peer: 'username',
    adminId: 'username',
    limit: 100,
    revoked: true,
    offsetDate: 43,
    offsetLink: 'some string here'
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

    const result: Api.messages.ExportedChatInvites = await client.invoke(new Api.messages.GetExportedChatInvites({
    peer: 'username',
    adminId: 'username',
    limit: 100,
    revoked: true,
    offsetDate: 43,
    offsetLink: 'some string here'
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
| **revoked** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](https://core.telegram.org/constructor/true) | Whether to fetch revoked chat invites 
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Chat 
| **adminId** | [InputUser](https://core.telegram.org/type/InputUser) | Whether to only fetch chat invites from this admin 
| **offsetDate** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](https://core.telegram.org/type/int) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) 
| **offsetLink** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](https://core.telegram.org/type/string) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) 
| **limit** | [int](https://core.telegram.org/type/int) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) 


## Result

[messages.ExportedChatInvites](https://core.telegram.org/type/messages.ExportedChatInvites)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | ADMIN\_ID\_INVALID | The specified admin ID is invalid. 
| 400 | CHAT\_ADMIN\_REQUIRED | You must be an admin in this chat to do this. 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid. 


## Can bots use this method?

No

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.




