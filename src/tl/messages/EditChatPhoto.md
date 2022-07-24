# messages.EditChatPhoto

Changes chat photo and sends a service message on it



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

    const result = await client.invoke(new Api.messages.EditChatPhoto({
    chatId: BigInt('-4156887774564'),
    photo: await client.uploadFile({file:new CustomFile("photo.jpg", fs.statSync("../photo.jpg").size, "../photo.jpg"),workers:1})
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

    const result: Api.Updates = await client.invoke(new Api.messages.EditChatPhoto({
    chatId: BigInt('-4156887774564'),
    photo: await client.uploadFile({file:new CustomFile("photo.jpg", fs.statSync("../photo.jpg").size, "../photo.jpg"),workers:1})
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **chatId** | [long](https://core.telegram.org/type/long) | Chat ID 
| **photo** | [InputChatPhoto](https://core.telegram.org/type/InputChatPhoto) | Photo to be set 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | CHAT\_ID\_INVALID | The provided chat id is invalid. 
| 400 | CHAT\_NOT\_MODIFIED | The pinned message wasn't modified. 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid. 
| 400 | PHOTO\_CROP\_SIZE\_SMALL | Photo is too small. 
| 400 | PHOTO\_EXT\_INVALID | The extension of the photo is invalid. 
| 400 | PHOTO\_INVALID | Photo invalid. 


## Can bots use this method?

Yes

## Related pages


