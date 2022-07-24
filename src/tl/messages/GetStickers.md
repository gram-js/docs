# messages.GetStickers

Get info about a stickerset



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

    const result = await client.invoke(new Api.messages.GetStickers({
    emoticon: 'some string here',
    hash: BigInt('-4156887774564')
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

    const result: Api.messages.Stickers = await client.invoke(new Api.messages.GetStickers({
    emoticon: 'some string here',
    hash: BigInt('-4156887774564')
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
| **hash** | [int](https://core.telegram.org/type/int) | [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) 


## Result

[messages.StickerSet](https://core.telegram.org/type/messages.StickerSet)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 406 | STICKERSET\_INVALID | The provided sticker set is invalid. 


## Can bots use this method?

Yes

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.




