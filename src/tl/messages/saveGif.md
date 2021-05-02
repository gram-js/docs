# messages.saveGif

Add GIF to saved gifs list

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.saveGif({
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
    const result: Api.Bool = await client.invoke(new Api.messages.saveGif({
		id: new Api.InputDocument({...}),
		unsave: new Api.Bool({...}),
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
messages.saveGif#327a30cb id:InputDocument unsave:Bool = Bool;
```

## Parameters

|    Name    | Type                                                          | Description                                |
| :--------: | ------------------------------------------------------------- | ------------------------------------------ |
|   **id**   | [InputDocument](https://core.telegram.org/type/InputDocument) | GIF to save                                |
| **unsave** | [Bool](https://core.telegram.org/type/Bool)                   | Whether to remove GIF from saved gifs list |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type           | Description                    |
| :--: | -------------- | ------------------------------ |
| 400  | GIF_ID_INVALID | The provided GIF ID is invalid |

## Can bots use this method?

Yes

## Related pages
