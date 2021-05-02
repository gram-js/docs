# stickers.addStickerToSet

Add a sticker to a stickerset, bots only. The sticker set must have been created by the bot.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.stickers.addStickerToSet({
		stickerset: new Api.InputStickerSet({...}),
		sticker: new Api.InputStickerSetItem({...}),
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
    const result: Api.messages.StickerSet = await client.invoke(new Api.stickers.addStickerToSet({
		stickerset: new Api.InputStickerSet({...}),
		sticker: new Api.InputStickerSetItem({...}),
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
stickers.addStickerToSet#8653febe stickerset:InputStickerSet sticker:InputStickerSetItem = messages.StickerSet;
```

## Parameters

|      Name      | Type                                                                      | Description    |
| :------------: | ------------------------------------------------------------------------- | -------------- |
| **stickerset** | [InputStickerSet](https://core.telegram.org/type/InputStickerSet)         | The stickerset |
|  **sticker**   | [InputStickerSetItem](https://core.telegram.org/type/InputStickerSetItem) | The sticker    |

## Result

[messages.StickerSet](https://core.telegram.org/type/messages.StickerSet)

## Possible errors

| Code | Type               | Description                          |
| :--: | ------------------ | ------------------------------------ |
| 400  | BOT_MISSING        | This method can only be run by a bot |
| 400  | STICKERSET_INVALID | The provided sticker set is invalid  |

## Can bots use this method?

Yes

## Related pages
