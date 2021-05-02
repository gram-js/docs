# messages.getAttachedStickers

Get stickers attached to a photo or video

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
        new Api.messages.getAttachedStickers({
            media: new Api.InputStickeredMedia({
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
    const result: Api.Vector<StickerSetCovered> = await client.invoke(
        new Api.messages.getAttachedStickers({
            media: new Api.InputStickeredMedia({
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
---functions---
messages.getAttachedStickers#cc5b67cc media:InputStickeredMedia = Vector<StickerSetCovered>;
```

## Parameters

|   Name    | Type                                                                      | Description     |
| :-------: | ------------------------------------------------------------------------- | --------------- |
| **media** | [InputStickeredMedia](https://core.telegram.org/type/InputStickeredMedia) | Stickered media |

## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[StickerSetCovered](https://core.telegram.org/type/StickerSetCovered)>

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
