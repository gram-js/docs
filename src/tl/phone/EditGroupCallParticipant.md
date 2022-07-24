# phone.EditGroupCallParticipant

Edit information about a given group call participant



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

    const result = await client.invoke(new Api.phone.EditGroupCallParticipant({
    call: new Api.InputGroupCall({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    participant: 'username',
    muted: false,
    volume: 43,
    raiseHand: false,
    videoStopped: false,
    videoPaused: false,
    presentationPaused: false
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

    const result: Api.Updates = await client.invoke(new Api.phone.EditGroupCallParticipant({
    call: new Api.InputGroupCall({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    participant: 'username',
    muted: false,
    volume: 43,
    raiseHand: false,
    videoStopped: false,
    videoPaused: false,
    presentationPaused: false
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
| **call** | [InputGroupCall](https://core.telegram.org/type/InputGroupCall) | The group call 
| **participant** | [InputPeer](https://core.telegram.org/type/InputPeer) | The group call participant (can also be the user itself) 
| **muted** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Bool](https://core.telegram.org/type/Bool) | Whether to mute or unmute the specified participant 
| **volume** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](https://core.telegram.org/type/int) | New volume 
| **raiseHand** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[Bool](https://core.telegram.org/type/Bool) | Raise or lower hand 
| **videoStopped** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Bool](https://core.telegram.org/type/Bool) | Start or stop the video stream 
| **videoPaused** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[Bool](https://core.telegram.org/type/Bool) | Pause or resume the video stream 
| **presentationPaused** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[Bool](https://core.telegram.org/type/Bool) | Pause or resume the screen sharing stream 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | USER\_VOLUME\_INVALID | The specified user volume is invalid. 


## Can bots use this method?

No

## Related pages

#### [Bool](https://core.telegram.org/type/Bool)

Boolean type.



#### [boolTrue](https://core.telegram.org/constructor/boolTrue)

The constructor can be interpreted as a \*\*boolean\*\*`true` value.



#### [boolFalse](https://core.telegram.org/constructor/boolFalse)

Constructor may be interpreted as a \*\*boolean\*\*`false` value.




