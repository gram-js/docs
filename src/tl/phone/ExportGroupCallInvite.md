# phone.ExportGroupCallInvite

Get an invite link for a group call or livestream



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

    const result = await client.invoke(new Api.phone.ExportGroupCallInvite({
    call: new Api.InputGroupCall({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    canSelfUnmute: true
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

    const result: Api.phone.ExportedGroupCallInvite = await client.invoke(new Api.phone.ExportGroupCallInvite({
    call: new Api.InputGroupCall({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    canSelfUnmute: true
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
| **canSelfUnmute** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | For livestreams, if set, users that join using this link will be able to speak without explicitly requesting permission by (for example by raising their hand). 
| **call** | [InputGroupCall](https://core.telegram.org/type/InputGroupCall) | The group call 


## Result

[phone.ExportedGroupCallInvite](https://core.telegram.org/type/phone.ExportedGroupCallInvite)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages


