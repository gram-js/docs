# stickers.setStickerSetThumb

Set stickerset thumbnail

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.stickers.setStickerSetThumb({
		stickerset: new Api.InputStickerSet({...}),
		thumb: new Api.InputDocument({...}),
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
    const result: Api.messages.StickerSet = await client.invoke(new Api.stickers.setStickerSetThumb({
		stickerset: new Api.InputStickerSet({...}),
		thumb: new Api.InputDocument({...}),
		}));
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
messages.stickerSet#b60a24a6 set:StickerSet packs:Vector<StickerPack> documents:Vector<Document> = messages.StickerSet;
---functions---
stickers.setStickerSetThumb#9a364e30 stickerset:InputStickerSet thumb:InputDocument = messages.StickerSet;
```

## Parameters

|      Name      | Type                                                              | Description |
| :------------: | ----------------------------------------------------------------- | ----------- |
| **stickerset** | [InputStickerSet](https://core.telegram.org/type/InputStickerSet) | Stickerset  |
|   **thumb**    | [InputDocument](https://core.telegram.org/type/InputDocument)     | Thumbnail   |

## Result

[messages.StickerSet](https://core.telegram.org/type/messages.StickerSet)

## Possible errors

| Code | Type               | Description                         |
| :--: | ------------------ | ----------------------------------- |
| 400  | STICKERSET_INVALID | The provided sticker set is invalid |

## Can bots use this method?

Yes

## Related pages
