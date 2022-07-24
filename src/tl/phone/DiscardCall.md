# phone.DiscardCall

Refuse or end running call



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

    const result = await client.invoke(new Api.phone.DiscardCall({
    peer: new Api.InputPhoneCall({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    duration: 43,
    reason: new Api.PhoneCallDiscardReasonMissed({}),
    connectionId: BigInt('-4156887774564'),
    video: true
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

    const result: Api.Updates = await client.invoke(new Api.phone.DiscardCall({
    peer: new Api.InputPhoneCall({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    duration: 43,
    reason: new Api.PhoneCallDiscardReasonMissed({}),
    connectionId: BigInt('-4156887774564'),
    video: true
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
| **video** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Whether this is a video call 
| **peer** | [InputPhoneCall](https://core.telegram.org/type/InputPhoneCall) | The phone call 
| **duration** | [int](https://core.telegram.org/type/int) | Call duration 
| **reason** | [PhoneCallDiscardReason](https://core.telegram.org/type/PhoneCallDiscardReason) | Why was the call discarded 
| **connectionId** | [long](https://core.telegram.org/type/long) | Preferred libtgvoip relay ID 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | CALL\_ALREADY\_ACCEPTED | The call was already accepted. 
| 400 | CALL\_PEER\_INVALID | The provided call peer object is invalid. 


## Can bots use this method?

No

## Related pages


