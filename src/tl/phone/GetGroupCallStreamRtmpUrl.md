# phone.GetGroupCallStreamRtmpUrl

Get RTMP URL and stream key for RTMP livestreams. Can be used even before creating the actual RTMP livestream with [phone.createGroupCall](https://core.telegram.org/method/phone.createGroupCall) (the `rtmp_stream` flag must be set).



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

    const result = await client.invoke(new Api.phone.GetGroupCallStreamRtmpUrl({
    peer: 'username',
    revoke: false
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

    const result: Api.phone.GroupCallStreamRtmpUrl = await client.invoke(new Api.phone.GetGroupCallStreamRtmpUrl({
    peer: 'username',
    revoke: false
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Peer to livestream into 
| **revoke** | [Bool](https://core.telegram.org/type/Bool) | Whether to revoke the previous stream key or simply return the existing one 


## Result

[phone.GroupCallStreamRtmpUrl](https://core.telegram.org/type/phone.GroupCallStreamRtmpUrl)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages

#### [phone.createGroupCall](https://core.telegram.org/method/phone.createGroupCall)

Create a group call or livestream




