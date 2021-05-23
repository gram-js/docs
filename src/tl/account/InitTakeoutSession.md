# account.InitTakeoutSession

Intialize account takeout session



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.InitTakeoutSession({
    contacts: true,
    messageUsers: true,
    messageChats: true,
    messageMegagroups: true,
    messageChannels: true,
    files: true,
    fileMaxSize: 43
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
    const result: Api.account.Takeout = await client.invoke(new Api.account.InitTakeoutSession({
    contacts: true,
    messageUsers: true,
    messageChats: true,
    messageMegagroups: true,
    messageChannels: true,
    files: true,
    fileMaxSize: 43
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
| **contacts** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Whether to export contacts 
| **messageUsers** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true) | Whether to export messages in private chats 
| **messageChats** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](https://core.telegram.org/constructor/true) | Whether to export messages in [legacy groups](https://core.telegram.org/api/channel) 
| **messageMegagroups** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](https://core.telegram.org/constructor/true) | Whether to export messages in [supergroups](https://core.telegram.org/api/channel) 
| **messageChannels** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](https://core.telegram.org/constructor/true) | Whether to export messages in [channels](https://core.telegram.org/api/channel) 
| **files** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](https://core.telegram.org/constructor/true) | Whether to export files 
| **fileMaxSize** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[int](https://core.telegram.org/type/int) | Maximum size of files to export 


## Result

[account.Takeout](https://core.telegram.org/type/account.Takeout)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 420 | TAKEOUT\_INIT\_DELAY\_X | Wait X seconds before initing takeout 


## Can bots use this method?

Yes

## Related pages

#### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.




