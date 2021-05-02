# messages.saveRecentSticker

Add/remove sticker from recent stickers list

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.saveRecentSticker({
		attached: true,
		id: new Api.InputDocument({...}),
		unsave: new Api.Bool({...}),
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
    const result: Api.Bool = await client.invoke(new Api.messages.saveRecentSticker({
		attached: true,
		id: new Api.InputDocument({...}),
		unsave: new Api.Bool({...}),
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
messages.saveRecentSticker#392718f8 flags:# attached:flags.0?true id:InputDocument unsave:Bool = Bool;
```

## Parameters

|     Name     | Type                                                                                                                              | Description                                                                                             |
| :----------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  **flags**   | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| **attached** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Whether to add/remove stickers recently attached to photo or video files                                |
|    **id**    | [InputDocument](https://core.telegram.org/type/InputDocument)                                                                     | Sticker                                                                                                 |
|  **unsave**  | [Bool](https://core.telegram.org/type/Bool)                                                                                       | Whether to save or unsave the sticker                                                                   |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type               | Description                        |
| :--: | ------------------ | ---------------------------------- |
| 400  | STICKER_ID_INVALID | The provided sticker ID is invalid |

## Can bots use this method?

Yes

## Related pages
