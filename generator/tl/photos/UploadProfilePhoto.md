# photos.UploadProfilePhoto

Updates current user profile photo.



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

    const result = await client.invoke(new Api.photos.UploadProfilePhoto({
    fallback: true,
    bot: 'username',
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

    const result: Api.photos.Photo = await client.invoke(new Api.photos.UploadProfilePhoto({
    fallback: true,
    bot: 'username',
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

| **flags** | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) 
| **file** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputFile](https://core.telegram.org/type/InputFile) | File saved in parts by means of [upload.saveFilePart](https://core.telegram.org/method/upload.saveFilePart) method 
| **video** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[InputFile](https://core.telegram.org/type/InputFile) | [Animated profile picture](https://core.telegram.org/api/files#animated-profile-pictures) video 
| **videoStartTs** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[double](https://core.telegram.org/type/double) | Floating point UNIX timestamp in seconds, indicating the frame of the video that should be used as static preview. 


## Result

[photos.Photo](https://core.telegram.org/type/photos.Photo)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | ALBUM\_PHOTOS\_TOO\_MANY | You have uploaded too many profile photos, delete some before retrying. 
| 400 | FILE\_PARTS\_INVALID | The number of file parts is invalid. 
| 400 | IMAGE\_PROCESS\_FAILED | Failure while processing image. 
| 400 | PHOTO\_CROP\_FILE\_MISSING | Photo crop file missing. 
| 400 | PHOTO\_CROP\_SIZE\_SMALL | Photo is too small. 
| 400 | PHOTO\_EXT\_INVALID | The extension of the photo is invalid. 
| 400 | PHOTO\_FILE\_MISSING | Profile photo file missing. 
| 400 | VIDEO\_FILE\_INVALID | The specified video file is invalid. 


## Can bots use this method?

No

## Related pages

#### [upload.saveFilePart](https://core.telegram.org/method/upload.saveFilePart)

Saves a part of file for further sending to one of the methods.



#### [Uploading and Downloading Files](https://core.telegram.org/api/files)

How to transfer large data batches correctly.




