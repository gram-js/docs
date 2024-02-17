# account.ChangeAuthorizationSettings

Change authorization settings



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

    const result = await client.invoke(new Api.account.ChangeAuthorizationSettings({
    hash: BigInt('-4156887774564'),
    confirmed: true,
    encryptedRequestsDisabled: false,
    callRequestsDisabled: false
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

    const result: Api.Bool = await client.invoke(new Api.account.ChangeAuthorizationSettings({
    hash: BigInt('-4156887774564'),
    confirmed: true,
    encryptedRequestsDisabled: false,
    callRequestsDisabled: false
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
| **hash** | [long](https://core.telegram.org/type/long) | Session ID from the [authorization](https://core.telegram.org/constructor/authorization) constructor, fetchable using [account.getAuthorizations](https://core.telegram.org/method/account.getAuthorizations) 
| **encryptedRequestsDisabled** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Bool](https://core.telegram.org/type/Bool) | Whether to enable or disable receiving encrypted chats: if the flag is not set, the previous setting is not changed 
| **callRequestsDisabled** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Bool](https://core.telegram.org/type/Bool) | Whether to enable or disable receiving calls: if the flag is not set, the previous setting is not changed 


## Result

[Bool](https://core.telegram.org/type/Bool)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | HASH\_INVALID | The provided hash is invalid. 


## Can bots use this method?

No

## Related pages

#### [authorization](https://core.telegram.org/constructor/authorization)

Logged-in session



#### [account.getAuthorizations](https://core.telegram.org/method/account.getAuthorizations)

Get logged-in sessions




