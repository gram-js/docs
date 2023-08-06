# stickers.ChangeSticker

Changes the absolute position of a sticker in the set to which it belongs; for bots only. The sticker set must have been created by the bot



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

    const result = await client.invoke(new Api.stickers.ChangeSticker({
    sticker: new Api.InputDocument({
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

    const result: Api.messages.StickerSet = await client.invoke(new Api.stickers.ChangeSticker({
    sticker: new Api.InputDocument({
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
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **sticker** | [InputDocument](https://core.telegram.org/type/InputDocument) | The sticker 
| **position** | [int](https://core.telegram.org/type/int) | The new position of the sticker, zero-based 


## Result

[messages.StickerSet](https://core.telegram.org/type/messages.StickerSet)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | BOT\_MISSING | This method can only be run by a bot. 
| 400 | STICKER\_INVALID | The provided sticker is invalid. 


## Can bots use this method?

Yes

## Related pages


