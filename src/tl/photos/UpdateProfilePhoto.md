# photos.UpdateProfilePhoto

Installs a previously uploaded photo as a profile photo.



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

    const result = await client.invoke(new Api.photos.UpdateProfilePhoto({
    id: new Api.InputPhoto({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564'),
        fileReference: Buffer.from('arbitrary data here')
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

    const result: Api.photos.Photo = await client.invoke(new Api.photos.UpdateProfilePhoto({
    id: new Api.InputPhoto({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564'),
        fileReference: Buffer.from('arbitrary data here')
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

| **id** | [InputPhoto](https://core.telegram.org/type/InputPhoto) | Input photo 


## Result

[UserProfilePhoto](https://core.telegram.org/type/UserProfilePhoto)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | ALBUM\_PHOTOS\_TOO\_MANY | You have uploaded too many profile photos, delete some before retrying. 
| 400 | FILE\_PARTS\_INVALID | The number of file parts is invalid. 
| 400 | IMAGE\_PROCESS\_FAILED | Failure while processing image. 
| 400 | LOCATION\_INVALID | The provided location is invalid. 
| 400 | PHOTO\_CROP\_SIZE\_SMALL | Photo is too small. 
| 400 | PHOTO\_EXT\_INVALID | The extension of the photo is invalid. 
| 400 | PHOTO\_ID\_INVALID | Photo ID invalid. 


## Can bots use this method?

No

## Related pages


