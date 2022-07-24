# messages.SaveRecentSticker

Add/remove sticker from recent stickers list



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

    const result = await client.invoke(new Api.messages.SaveRecentSticker({
    id: new Api.InputDocument({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564'),
        fileReference: Buffer.from('arbitrary data here')
    }),
    unsave: false,
    attached: true
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

    const result: Api.Bool = await client.invoke(new Api.messages.SaveRecentSticker({
    id: new Api.InputDocument({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564'),
        fileReference: Buffer.from('arbitrary data here')
    }),
    unsave: false,
    attached: true
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
| **attached** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Whether to add/remove stickers recently attached to photo or video files 
| **id** | [InputDocument](https://core.telegram.org/type/InputDocument) | Sticker 
| **unsave** | [Bool](https://core.telegram.org/type/Bool) | Whether to save or unsave the sticker 


## Result

[Bool](https://core.telegram.org/type/Bool)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | STICKER\_ID\_INVALID | The provided sticker ID is invalid. 


## Can bots use this method?

No

## Related pages


