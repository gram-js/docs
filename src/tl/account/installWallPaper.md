# account.installWallPaper

Install wallpaper

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
        new Api.account.installWallPaper({
            wallpaper: new Api.InputWallPaper({
                /* ... */
            }),
            settings: new Api.WallPaperSettings({
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
    const result: Api.Bool = await client.invoke(
        new Api.account.installWallPaper({
            wallpaper: new Api.InputWallPaper({
                /* ... */
            }),
            settings: new Api.WallPaperSettings({
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
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.installWallPaper#feed5769 wallpaper:InputWallPaper settings:WallPaperSettings = Bool;
```

## Parameters

|     Name      | Type                                                                  | Description          |
| :-----------: | --------------------------------------------------------------------- | -------------------- |
| **wallpaper** | [InputWallPaper](https://core.telegram.org/type/InputWallPaper)       | Wallpaper to install |
| **settings**  | [WallPaperSettings](https://core.telegram.org/type/WallPaperSettings) | Wallpaper settings   |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
