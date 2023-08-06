# stickers.CreateStickerSet

Create a stickerset, bots only.



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

    const result = await client.invoke(new Api.stickers.CreateStickerSet({
    userId: 'username',
    title: 'My very normal title',
    shortName: 'some string here',
    stickers: [new Api.InputStickerSetItem({
        document: new Api.InputDocument({
            id: BigInt('-4156887774564'),
            accessHash: BigInt('-4156887774564'),
            fileReference: Buffer.from('arbitrary data here')
        }),
        emoji: 'some string here',
        maskCoords: new Api.MaskCoords({
            n: 43,
            x: 8.24,
            y: 8.24,
            zoom: 8.24
        }),
        keywords: 'some string here'
    })],
    masks: true,
    animated: true,
    videos: true,
    emojis: true,
    textColor: true,
    thumb: new Api.InputDocument({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564'),
        fileReference: Buffer.from('arbitrary data here')
    }),
    software: 'some string here'
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

    const result: Api.messages.StickerSet = await client.invoke(new Api.stickers.CreateStickerSet({
    userId: 'username',
    title: 'My very normal title',
    shortName: 'some string here',
    stickers: [new Api.InputStickerSetItem({
        document: new Api.InputDocument({
            id: BigInt('-4156887774564'),
            accessHash: BigInt('-4156887774564'),
            fileReference: Buffer.from('arbitrary data here')
        }),
        emoji: 'some string here',
        maskCoords: new Api.MaskCoords({
            n: 43,
            x: 8.24,
            y: 8.24,
            zoom: 8.24
        }),
        keywords: 'some string here'
    })],
    masks: true,
    animated: true,
    videos: true,
    emojis: true,
    textColor: true,
    thumb: new Api.InputDocument({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564'),
        fileReference: Buffer.from('arbitrary data here')
    }),
    software: 'some string here'
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
| **masks** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Whether this is a mask stickerset 
| **animated** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true) | Whether this is an animated stickerset 
| **videos** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](https://core.telegram.org/constructor/true) | Whether this is a video stickerset 
| **userId** | [InputUser](https://core.telegram.org/type/InputUser) | Stickerset owner 
| **title** | [string](https://core.telegram.org/type/string) | Stickerset name, `1-64` chars 
| **shortName** | [string](https://core.telegram.org/type/string) | Sticker set name. Can contain only English letters, digits and underscores. Must end with *"*by*"* ( is case insensitive); 1-64 characters 
| **thumb** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InputDocument](https://core.telegram.org/type/InputDocument) | Thumbnail 
| **stickers** | [Vector](https://core.telegram.org/type/Vector%20t)<[InputStickerSetItem](https://core.telegram.org/type/InputStickerSetItem)> | Stickers 
| **software** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[string](https://core.telegram.org/type/string) | Used when [importing stickers using the sticker import SDKs](https://core.telegram.org/import-stickers), specifies the name of the software that created the stickers 


## Result

[messages.StickerSet](https://core.telegram.org/type/messages.StickerSet)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | BOT\_MISSING | This method can only be run by a bot. 
| 400 | PACK\_SHORT\_NAME\_INVALID | Short pack name invalid. 
| 400 | PACK\_SHORT\_NAME\_OCCUPIED | A stickerpack with this name already exists. 
| 400 | PACK\_TITLE\_INVALID | The stickerpack title is invalid. 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid. 
| 400 | STICKERS\_EMPTY | No sticker provided. 
| 400 | STICKER\_EMOJI\_INVALID | Sticker emoji invalid. 
| 400 | STICKER\_FILE\_INVALID | Sticker file invalid. 
| 400 | STICKER\_GIF\_DIMENSIONS | The specified video sticker has invalid dimensions. 
| 400 | STICKER\_PNG\_DIMENSIONS | Sticker png dimensions invalid. 
| 400 | STICKER\_PNG\_NOPNG | One of the specified stickers is not a valid PNG file. 
| 400 | STICKER\_TGS\_NODOC | Incorrect document type for sticker. 
| 400 | STICKER\_TGS\_NOTGS | Invalid TGS sticker provided. 
| 400 | STICKER\_THUMB\_PNG\_NOPNG | Incorrect stickerset thumb file provided, PNG / WEBP expected. 
| 400 | STICKER\_THUMB\_TGS\_NOTGS | Incorrect stickerset TGS thumb file provided. 
| 400 | STICKER\_VIDEO\_BIG | The specified video sticker is too big. 
| 400 | STICKER\_VIDEO\_NOWEBM | The specified video sticker is not in webm format. 
| 400 | USER\_ID\_INVALID | The provided user ID is invalid. 


## Can bots use this method?

Yes

## Related pages


