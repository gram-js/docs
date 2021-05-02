# messages.faveSticker

Mark a sticker as favorite

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.faveSticker({
		id: new Api.InputDocument({...}),
		unfave: new Api.Bool({...}),
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
    const result: Api.Bool = await client.invoke(new Api.messages.faveSticker({
		id: new Api.InputDocument({...}),
		unfave: new Api.Bool({...}),
		}));
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.faveSticker#b9ffc55b id:InputDocument unfave:Bool = Bool;
```

## Parameters

|    Name    | Type                                                          | Description                 |
| :--------: | ------------------------------------------------------------- | --------------------------- |
|   **id**   | [InputDocument](https://core.telegram.org/type/InputDocument) | Sticker to mark as favorite |
| **unfave** | [Bool](https://core.telegram.org/type/Bool)                   | Unfavorite                  |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type               | Description                        |
| :--: | ------------------ | ---------------------------------- |
| 400  | STICKER_ID_INVALID | The provided sticker ID is invalid |

## Can bots use this method?

Yes

## Related pages
