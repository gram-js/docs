# messages.HideAllChatJoinRequests

Dismiss or approve all [join requests](https://core.telegram.org/api/invites#join-requests) related to a specific chat or channel.



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

    const result = await client.invoke(new Api.messages.HideAllChatJoinRequests({
    peer: 'username',
    approved: true,
    link: 'some string here'
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

    const result: Api.Updates = await client.invoke(new Api.messages.HideAllChatJoinRequests({
    peer: 'username',
    approved: true,
    link: 'some string here'
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
| **approved** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Whether to dismiss or approve all chat [join requests »](https://core.telegram.org/api/invites#join-requests) 
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | The chat or channel 
| **link** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](https://core.telegram.org/type/string) | Only dismiss or approve [join requests »](https://core.telegram.org/api/invites#join-requests) initiated using this invite link 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages

#### [Invites](https://core.telegram.org/api/invites)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.




