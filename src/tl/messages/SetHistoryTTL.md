# messages.SetHistoryTTL

Set maximum Time-To-Live of all messages in the specified chat



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

    const result = await client.invoke(new Api.messages.SetHistoryTTL({
    peer: 'username',
    period: 43
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

    const result: Api.Updates = await client.invoke(new Api.messages.SetHistoryTTL({
    peer: 'username',
    period: 43
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | The dialog 
| **period** | [int](https://core.telegram.org/type/int) | Automatically delete all messages sent in the chat after this many seconds 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | CHAT\_NOT\_MODIFIED | The pinned message wasn't modified. 
| 400 | TTL\_PERIOD\_INVALID | The specified TTL period is invalid. 


## Can bots use this method?

No

## Related pages


