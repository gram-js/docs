# phone.GetGroupCallStreamChannels

Get info about RTMP streams in a group call or livestream.  

This method should be invoked to the same group/channel-related DC used for [downloading livestream chunks](https://core.telegram.org/api/files#downloading-files).  

As usual, the media DC is preferred, if available.



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

    const result = await client.invoke(new Api.phone.GetGroupCallStreamChannels({
    call: new Api.InputGroupCall({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    })
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

    const result: Api.phone.GroupCallStreamChannels = await client.invoke(new Api.phone.GetGroupCallStreamChannels({
    call: new Api.InputGroupCall({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    })
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **call** | [InputGroupCall](https://core.telegram.org/type/InputGroupCall) | Group call or livestream 


## Result

[phone.GroupCallStreamChannels](https://core.telegram.org/type/phone.GroupCallStreamChannels)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | GROUPCALL\_INVALID | The specified group call is invalid. 
| 400 | GROUPCALL\_JOIN\_MISSING | You haven't joined this group call. 


## Can bots use this method?

No

## Related pages

#### [Uploading and Downloading Files](https://core.telegram.org/api/files)

How to transfer large data batches correctly.




