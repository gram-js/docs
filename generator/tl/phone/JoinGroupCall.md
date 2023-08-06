# phone.JoinGroupCall

Join a group call



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

    const result = await client.invoke(new Api.phone.JoinGroupCall({
    call: new Api.InputGroupCall({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    joinAs: 'username',
    params: new Api.DataJSON({
        data: 'some string here'
    }),
    muted: true,
    videoStopped: true,
    inviteHash: 'some string here'
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

    const result: Api.Updates = await client.invoke(new Api.phone.JoinGroupCall({
    call: new Api.InputGroupCall({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    joinAs: 'username',
    params: new Api.DataJSON({
        data: 'some string here'
    }),
    muted: true,
    videoStopped: true,
    inviteHash: 'some string here'
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
| **muted** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | If set, the user will be muted by default upon joining. 
| **videoStopped** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](https://core.telegram.org/constructor/true) | If set, the user's video will be disabled by default upon joining. 
| **call** | [InputGroupCall](https://core.telegram.org/type/InputGroupCall) | The group call 
| **joinAs** | [InputPeer](https://core.telegram.org/type/InputPeer) | Join the group call, presenting yourself as the specified user/channel 
| **inviteHash** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](https://core.telegram.org/type/string) | The invitation hash from the invite link: `https://t.me/username?voicechat=hash` 
| **params** | [DataJSON](https://core.telegram.org/type/DataJSON) | WebRTC parameters 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | GROUPCALL\_SSRC\_DUPLICATE\_MUCH | The app needs to retry joining the group call with a new SSRC value. 


## Can bots use this method?

No

## Related pages


