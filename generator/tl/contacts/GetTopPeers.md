# contacts.GetTopPeers

Get most used peers



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

    const result = await client.invoke(new Api.contacts.GetTopPeers({
    offset: 43,
    limit: 100,
    hash: BigInt('-4156887774564'),
    correspondents: true,
    botsPm: true,
    botsInline: true,
    phoneCalls: true,
    forwardUsers: true,
    forwardChats: true,
    groups: true,
    channels: true
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

    const result: Api.contacts.TopPeers = await client.invoke(new Api.contacts.GetTopPeers({
    offset: 43,
    limit: 100,
    hash: BigInt('-4156887774564'),
    correspondents: true,
    botsPm: true,
    botsInline: true,
    phoneCalls: true,
    forwardUsers: true,
    forwardChats: true,
    groups: true,
    channels: true
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
| **correspondents** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Users we've chatted most frequently with 
| **botsPm** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true) | Most used bots 
| **botsInline** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](https://core.telegram.org/constructor/true) | Most used inline bots 
| **phoneCalls** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](https://core.telegram.org/constructor/true) | Most frequently called users 
| **forwardUsers** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](https://core.telegram.org/constructor/true) | Users to which the users often forwards messages to 
| **forwardChats** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](https://core.telegram.org/constructor/true) | Chats to which the users often forwards messages to 
| **groups** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[true](https://core.telegram.org/constructor/true) | Often-opened groups and supergroups 
| **channels** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[true](https://core.telegram.org/constructor/true) | Most frequently visited channels 
| **offset** | [int](https://core.telegram.org/type/int) | Offset for [pagination](https://core.telegram.org/api/offsets) 
| **limit** | [int](https://core.telegram.org/type/int) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) 
| **hash** | [long](https://core.telegram.org/type/long) | [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) 


## Result

[contacts.TopPeers](https://core.telegram.org/type/contacts.TopPeers)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | TYPES\_EMPTY | No top peer type was provided. 


## Can bots use this method?

No

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.




