# account.saveWallPaper

Install/uninstall wallpaper

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.saveWallPaper({
		wallpaper: new Api.InputWallPaper({...}),
		unsave: new Api.Bool({...}),
		settings: new Api.WallPaperSettings({...}),
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
    const result: Api.Bool = await client.invoke(new Api.account.saveWallPaper({
		wallpaper: new Api.InputWallPaper({...}),
		unsave: new Api.Bool({...}),
		settings: new Api.WallPaperSettings({...}),
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
account.saveWallPaper#6c5a5b37 wallpaper:InputWallPaper unsave:Bool settings:WallPaperSettings = Bool;
```

## Parameters

|     Name      | Type                                                                  | Description          |
| :-----------: | --------------------------------------------------------------------- | -------------------- |
| **wallpaper** | [InputWallPaper](https://core.telegram.org/type/InputWallPaper)       | Wallpaper to save    |
|  **unsave**   | [Bool](https://core.telegram.org/type/Bool)                           | Uninstall wallpaper? |
| **settings**  | [WallPaperSettings](https://core.telegram.org/type/WallPaperSettings) | Wallpaper settings   |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
