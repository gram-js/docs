# account.getWallPaper

Get info about a certain wallpaper

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.getWallPaper({
		wallpaper: new Api.InputWallPaper({...}),
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
    const result: Api.WallPaper = await client.invoke(new Api.account.getWallPaper({
		wallpaper: new Api.InputWallPaper({...}),
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
wallPaper#a437c3ed id:long flags:# creator:flags.0?true default:flags.1?true pattern:flags.3?true dark:flags.4?true access_hash:long slug:string document:Document settings:flags.2?WallPaperSettings = WallPaper;
wallPaperNoFile#8af40b25 flags:# default:flags.1?true dark:flags.4?true settings:flags.2?WallPaperSettings = WallPaper;
---functions---
account.getWallPaper#fc8ddbea wallpaper:InputWallPaper = WallPaper;
```

## Parameters

|     Name      | Type                                                            | Description                     |
| :-----------: | --------------------------------------------------------------- | ------------------------------- |
| **wallpaper** | [InputWallPaper](https://core.telegram.org/type/InputWallPaper) | The wallpaper to get info about |

## Result

[WallPaper](https://core.telegram.org/type/WallPaper)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
