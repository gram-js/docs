# stickers.SetStickerSetThumb

Set stickerset thumbnail



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

    const result = await client.invoke(new Api.stickers.SetStickerSetThumb({
    stickerset: new Api.InputStickerSetID({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    thumb: new Api.InputDocument({
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

    const result: Api.messages.StickerSet = await client.invoke(new Api.stickers.SetStickerSetThumb({
    stickerset: new Api.InputStickerSetID({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    thumb: new Api.InputDocument({
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

| **stickerset** | [InputStickerSet](https://core.telegram.org/type/InputStickerSet) | Stickerset 
| **thumb** | [InputDocument](https://core.telegram.org/type/InputDocument) | Thumbnail 


## Result

[messages.StickerSet](https://core.telegram.org/type/messages.StickerSet)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | STICKERSET\_INVALID | The provided sticker set is invalid. 
| 400 | STICKER\_THUMB\_PNG\_NOPNG | Incorrect stickerset thumb file provided, PNG / WEBP expected. 
| 400 | STICKER\_THUMB\_TGS\_NOTGS | Incorrect stickerset TGS thumb file provided. 


## Can bots use this method?

Yes

## Related pages


