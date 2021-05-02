# stickers.removeStickerFromSet

Remove a sticker from the set where it belongs, bots only. The sticker set must have been created by the bot.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(
        new Api.stickers.removeStickerFromSet({
            sticker: new Api.InputDocument({
                /* ... */
            }),
        }),
    );
    console.log(result); // prints the result
})();
```

:::

:::tab{title="TypeScript"}

```ts
import { Api, TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.messages.StickerSet = await client.invoke(
        new Api.stickers.removeStickerFromSet({
            sticker: new Api.InputDocument({
                /* ... */
            }),
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
messages.stickerSet#b60a24a6 set:StickerSet packs:Vector<StickerPack> documents:Vector<Document> = messages.StickerSet;
---functions---
stickers.removeStickerFromSet#f7760f51 sticker:InputDocument = messages.StickerSet;
```

## Parameters

|    Name     | Type                                                          | Description           |
| :---------: | ------------------------------------------------------------- | --------------------- |
| **sticker** | [InputDocument](https://core.telegram.org/type/InputDocument) | The sticker to remove |

## Result

[messages.StickerSet](https://core.telegram.org/type/messages.StickerSet)

## Possible errors

| Code | Type            | Description                          |
| :--: | --------------- | ------------------------------------ |
| 400  | BOT_MISSING     | This method can only be run by a bot |
| 400  | STICKER_INVALID | The provided sticker is invalid      |

## Can bots use this method?

Yes

## Related pages
