# photos.UploadContactProfilePhoto

No description found

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

    const result = await client.invoke(new Api.photos.UploadContactProfilePhoto({
    userId: 'username',
    suggest: true,
    save: true,
    file: await client.uploadFile({file:new CustomFile("file.bin", fs.statSync("../file.bin").size, "../file.bin"),workers:1}),
    video: await client.uploadFile({file:new CustomFile("video.mp4", fs.statSync("../video.mp4").size, "../video.mp4"),workers:1}),
    videoStartTs: 8.24,
    videoEmojiMarkup: new Api.VideoSize({
        type: 'some string here',
        w: 43,
        h: 43,
        size: 43,
        videoStartTs: 8.24
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

    const result: Api.photos.Photo = await client.invoke(new Api.photos.UploadContactProfilePhoto({
    userId: 'username',
    suggest: true,
    save: true,
    file: await client.uploadFile({file:new CustomFile("file.bin", fs.statSync("../file.bin").size, "../file.bin"),workers:1}),
    video: await client.uploadFile({file:new CustomFile("video.mp4", fs.statSync("../video.mp4").size, "../video.mp4"),workers:1}),
    videoStartTs: 8.24,
    videoEmojiMarkup: new Api.VideoSize({
        type: 'some string here',
        w: 43,
        h: 43,
        size: 43,
        videoStartTs: 8.24
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

|suggest|true|No description found
|save|true|No description found
|userId|InputUser|No description found
|file|InputFile|No description found
|video|InputFile|No description found
|videoStartTs|double|No description found
|videoEmojiMarkup|VideoSize|No description found


## Result

photos.Photo

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages


