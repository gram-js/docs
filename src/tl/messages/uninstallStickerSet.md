# messages.uninstallStickerSet

Uninstall a stickerset

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.uninstallStickerSet({
		stickerset: new Api.InputStickerSet({...}),
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
    const result: Api.Bool = await client.invoke(new Api.messages.uninstallStickerSet({
		stickerset: new Api.InputStickerSet({...}),
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.uninstallStickerSet#f96e55de stickerset:InputStickerSet = Bool;
```

## Parameters

|      Name      | Type                                                              | Description                 |
| :------------: | ----------------------------------------------------------------- | --------------------------- |
| **stickerset** | [InputStickerSet](https://core.telegram.org/type/InputStickerSet) | The stickerset to uninstall |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type               | Description                         |
| :--: | ------------------ | ----------------------------------- |
| 400  | STICKERSET_INVALID | The provided sticker set is invalid |

## Can bots use this method?

Yes

## Related pages
