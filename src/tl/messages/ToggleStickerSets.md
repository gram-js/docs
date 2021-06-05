# messages.ToggleStickerSets

Apply changes to multiple stickersets



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.ToggleStickerSets({
    stickersets: [new Api.InputStickerSetID({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    })],
    uninstall: true,
    archive: true,
    unarchive: true
}));
    console.log(result); // prints the result
})();
```
:::

:::tab{title="TypeScript"}
```ts
import {Api, TelegramClient} from 'telegram';
import {StringSession} from 'telegram/sessions';

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.Bool = await client.invoke(new Api.messages.ToggleStickerSets({
    stickersets: [new Api.InputStickerSetID({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    })],
    uninstall: true,
    archive: true,
    unarchive: true
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
| **uninstall** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Uninstall the specified stickersets 
| **archive** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true) | Archive the specified stickersets 
| **unarchive** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](https://core.telegram.org/constructor/true) | Unarchive the specified stickersets 
| **stickersets** | [Vector](https://core.telegram.org/type/Vector%20t)<[InputStickerSet](https://core.telegram.org/type/InputStickerSet)> | Stickersets to act upon 


## Result

[Bool](https://core.telegram.org/type/Bool)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |


## Can bots use this method?

No

## Related pages


