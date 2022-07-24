# phone.ToggleGroupCallSettings

Change group call settings



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

    const result = await client.invoke(new Api.phone.ToggleGroupCallSettings({
    call: new Api.InputGroupCall({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    resetInviteHash: true,
    joinMuted: false
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

    const result: Api.Updates = await client.invoke(new Api.phone.ToggleGroupCallSettings({
    call: new Api.InputGroupCall({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    resetInviteHash: true,
    joinMuted: false
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
| **resetInviteHash** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true) | Invalidate existing invite links 
| **call** | [InputGroupCall](https://core.telegram.org/type/InputGroupCall) | Group call 
| **joinMuted** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Bool](https://core.telegram.org/type/Bool) | Whether all users will that join this group call are muted by default upon joining the group call 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | GROUPCALL\_NOT\_MODIFIED | Group call settings weren't modified. 


## Can bots use this method?

No

## Related pages


