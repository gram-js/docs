# messages.UploadMedia

Upload a file and associate it to a chat (without actually sending it to the chat)



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

    const result = await client.invoke(new Api.messages.UploadMedia({
    peer: 'username',
    media: new Api.InputMediaUploadedPhoto({
        file: await client.uploadFile({file:new CustomFile("file.bin", fs.statSync("../file.bin").size, "../file.bin"),workers:1}),
        spoiler: true,
        stickers: [new Api.InputDocument({
            id: BigInt('-4156887774564'),
            accessHash: BigInt('-4156887774564'),
            fileReference: Buffer.from('arbitrary data here')
        })],
        ttlSeconds: 43
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

    const result: Api.MessageMedia = await client.invoke(new Api.messages.UploadMedia({
    peer: 'username',
    media: new Api.InputMediaUploadedPhoto({
        file: await client.uploadFile({file:new CustomFile("file.bin", fs.statSync("../file.bin").size, "../file.bin"),workers:1}),
        spoiler: true,
        stickers: [new Api.InputDocument({
            id: BigInt('-4156887774564'),
            accessHash: BigInt('-4156887774564'),
            fileReference: Buffer.from('arbitrary data here')
        })],
        ttlSeconds: 43
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

| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | The chat, can be an [inputPeerEmpty](https://core.telegram.org/constructor/inputPeerEmpty) for bots 
| **media** | [InputMedia](https://core.telegram.org/type/InputMedia) | File uploaded in chunks as described in [files »](https://core.telegram.org/api/files) 


## Result

[MessageMedia](https://core.telegram.org/type/MessageMedia)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | BOT\_MISSING | This method can only be run by a bot. 
| 400 | CHANNEL\_PRIVATE | You haven't joined this channel/supergroup. 
| 400 | CHAT\_ADMIN\_REQUIRED | You must be an admin in this chat to do this. 
| 400 | CHAT\_RESTRICTED | You can't send messages in this chat, you were restricted. 
| 403 | CHAT\_WRITE\_FORBIDDEN | You can't write in this chat. 
| 400 | FILE\_PARTS\_INVALID | The number of file parts is invalid. 
| 400 | IMAGE\_PROCESS\_FAILED | Failure while processing image. 
| 400 | INPUT\_USER\_DEACTIVATED | The specified user was deleted. 
| 400 | MEDIA\_INVALID | Media invalid. 
| 400 | MSG\_ID\_INVALID | Invalid message ID provided. 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid. 
| 400 | PHOTO\_EXT\_INVALID | The extension of the photo is invalid. 
| 400 | PHOTO\_INVALID\_DIMENSIONS | The photo dimensions are invalid. 
| 400 | PHOTO\_SAVE\_FILE\_INVALID | Internal issues, try again later. 
| 400 | USER\_BANNED\_IN\_CHANNEL | You're banned from sending messages in supergroups/channels. 
| 400 | WEBPAGE\_CURL\_FAILED | Failure while fetching the webpage with cURL. 


## Can bots use this method?

Yes

## Related pages

#### [inputPeerEmpty](https://core.telegram.org/constructor/inputPeerEmpty)

An empty constructor, no user or chat is defined.



#### [Uploading and Downloading Files](https://core.telegram.org/api/files)

How to transfer large data batches correctly.




