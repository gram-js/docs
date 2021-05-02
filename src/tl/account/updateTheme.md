# account.updateTheme

Update theme

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.updateTheme({
		format: 'random string here',
		theme: new Api.InputTheme({...}),
		slug: 'random string here',
		title: 'random string here',
		document: new Api.InputDocument({...}),
		settings: new Api.InputThemeSettings({...}),
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
    const result: Api.Theme = await client.invoke(new Api.account.updateTheme({
		format: 'random string here',
		theme: new Api.InputTheme({...}),
		slug: 'random string here',
		title: 'random string here',
		document: new Api.InputDocument({...}),
		settings: new Api.InputThemeSettings({...}),
		}));
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
theme#28f1114 flags:# creator:flags.0?true default:flags.1?true id:long access_hash:long slug:string title:string document:flags.2?Document settings:flags.3?ThemeSettings installs_count:int = Theme;
---functions---
account.updateTheme#5cb367d5 flags:# format:string theme:InputTheme slug:flags.0?string title:flags.1?string document:flags.2?InputDocument settings:flags.3?InputThemeSettings = Theme;
```

## Parameters

|     Name     | Type                                                                                                                                                   | Description                                                                                             |
| :----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
|  **flags**   | [#](https://core.telegram.org/type/%23)                                                                                                                | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|  **format**  | [string](https://core.telegram.org/type/string)                                                                                                        | Theme format, a string that identifies the theming engines supported by the client                      |
|  **theme**   | [InputTheme](https://core.telegram.org/type/InputTheme)                                                                                                | Theme to update                                                                                         |
|   **slug**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](https://core.telegram.org/type/string)                         | Unique theme ID                                                                                         |
|  **title**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](https://core.telegram.org/type/string)                         | Theme name                                                                                              |
| **document** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InputDocument](https://core.telegram.org/type/InputDocument)           | Theme file                                                                                              |
| **settings** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[InputThemeSettings](https://core.telegram.org/type/InputThemeSettings) | Theme settings                                                                                          |

## Result

[Theme](https://core.telegram.org/type/Theme)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
