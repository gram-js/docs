# messages.SendScreenshotNotification

Notify the other user in a private chat that a screenshot of the chat was taken



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.SendScreenshotNotification({
    peer: 'username',
    replyToMsgId: 43,
    randomId: BigInt('-4156887774564')
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
    const result: Api.Updates = await client.invoke(new Api.messages.SendScreenshotNotification({
    peer: 'username',
    replyToMsgId: 43,
    randomId: BigInt('-4156887774564')
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Other user 
| **replyToMsgId** | [int](https://core.telegram.org/type/int) | ID of message that was screenshotted, can be 0 
| **randomId** | [long](https://core.telegram.org/type/long) | Random ID to avoid message resending 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid 


## Can bots use this method?

Yes

## Related pages


