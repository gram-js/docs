# messages.installStickerSet

Install a stickerset

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
        new Api.messages.installStickerSet({
            stickerset: new Api.InputStickerSet({
                /* ... */
            }),
            archived: new Api.Bool({
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
    const result: Api.messages.StickerSetInstallResult = await client.invoke(
        new Api.messages.installStickerSet({
            stickerset: new Api.InputStickerSet({
                /* ... */
            }),
            archived: new Api.Bool({
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
messages.stickerSetInstallResultSuccess#38641628 = messages.StickerSetInstallResult;
messages.stickerSetInstallResultArchive#35e410a8 sets:Vector<StickerSetCovered> = messages.StickerSetInstallResult;
---functions---
messages.installStickerSet#c78fe460 stickerset:InputStickerSet archived:Bool = messages.StickerSetInstallResult;
```

## Parameters

|      Name      | Type                                                              | Description                   |
| :------------: | ----------------------------------------------------------------- | ----------------------------- |
| **stickerset** | [InputStickerSet](https://core.telegram.org/type/InputStickerSet) | Stickerset to install         |
|  **archived**  | [Bool](https://core.telegram.org/type/Bool)                       | Whether to archive stickerset |

## Result

[messages.StickerSetInstallResult](https://core.telegram.org/type/messages.StickerSetInstallResult)

## Possible errors

| Code | Type               | Description                         |
| :--: | ------------------ | ----------------------------------- |
| 400  | STICKERSET_INVALID | The provided sticker set is invalid |

## Can bots use this method?

Yes

## Related pages
