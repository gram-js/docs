# account.uploadWallPaper

Create and upload a new wallpaper

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.uploadWallPaper({
		file: new Api.InputFile({...}),
		mimeType: 'random string here',
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
    const result: Api.WallPaper = await client.invoke(new Api.account.uploadWallPaper({
		file: new Api.InputFile({...}),
		mimeType: 'random string here',
		settings: new Api.WallPaperSettings({...}),
		}));
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
wallPaper#a437c3ed id:long flags:# creator:flags.0?true default:flags.1?true pattern:flags.3?true dark:flags.4?true access_hash:long slug:string document:Document settings:flags.2?WallPaperSettings = WallPaper;
wallPaperNoFile#8af40b25 flags:# default:flags.1?true dark:flags.4?true settings:flags.2?WallPaperSettings = WallPaper;
---functions---
account.uploadWallPaper#dd853661 file:InputFile mime_type:string settings:WallPaperSettings = WallPaper;
```

## Parameters

|     Name      | Type                                                                  | Description                     |
| :-----------: | --------------------------------------------------------------------- | ------------------------------- |
|   **file**    | [InputFile](https://core.telegram.org/type/InputFile)                 | The JPG/PNG wallpaper           |
| **mime_type** | [string](https://core.telegram.org/type/string)                       | MIME type of uploaded wallpaper |
| **settings**  | [WallPaperSettings](https://core.telegram.org/type/WallPaperSettings) | Wallpaper settings              |

## Result

[WallPaper](https://core.telegram.org/type/WallPaper)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
