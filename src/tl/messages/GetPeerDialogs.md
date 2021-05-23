# messages.GetPeerDialogs

Get dialog info of specified peers



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.GetPeerDialogs({
    peers: ['username']
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
    const result: Api.messages.PeerDialogs = await client.invoke(new Api.messages.GetPeerDialogs({
    peers: ['username']
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **peers** | [Vector](https://core.telegram.org/type/Vector%20t)<[InputDialogPeer](https://core.telegram.org/type/InputDialogPeer)> | Peers 


## Result

[messages.PeerDialogs](https://core.telegram.org/type/messages.PeerDialogs)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | CHANNEL\_INVALID | The provided channel is invalid 
| 400 | CHANNEL\_PRIVATE | You haven't joined this channel/supergroup 
| 400 | CONNECTION\_DEVICE\_MODEL\_EMPTY | Device model empty 
| 400 | MSG\_ID\_INVALID | Invalid message ID provided 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid 


## Can bots use this method?

Yes

## Related pages


