# messages.SendScreenshotNotification

Notify the other user in a private chat that a screenshot of the chat was taken



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

    const result = await client.invoke(new Api.messages.SendScreenshotNotification({
    peer: 'username',
    replyTo: new Api.InputReplyToMessage({
        replyToMsgId: 43,
        topMsgId: 43
    }),
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

const session = new StringSession(''); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    await client.connect() // This assumes you have already authenticated with .start()

    const result: Api.Updates = await client.invoke(new Api.messages.SendScreenshotNotification({
    peer: 'username',
    replyTo: new Api.InputReplyToMessage({
        replyToMsgId: 43,
        topMsgId: 43
    }),
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

| 400 | PEER\_ID\_INVALID | The provided peer id is invalid. 
| 400 | YOU\_BLOCKED\_USER | You blocked this user. 


## Can bots use this method?

No

## Related pages


