# account.getTheme

Get theme information

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
        new Api.account.getTheme({
            format: 'random string here',
            theme: new Api.InputTheme({
                /* ... */
            }),
            documentId: 5205056,
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
    const result: Api.Theme = await client.invoke(
        new Api.account.getTheme({
            format: 'random string here',
            theme: new Api.InputTheme({
                /* ... */
            }),
            documentId: 5205056,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
theme#28f1114 flags:# creator:flags.0?true default:flags.1?true id:long access_hash:long slug:string title:string document:flags.2?Document settings:flags.3?ThemeSettings installs_count:int = Theme;
---functions---
account.getTheme#8d9d742b format:string theme:InputTheme document_id:long = Theme;
```

## Parameters

|      Name       | Type                                                    | Description                                                                        |
| :-------------: | ------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|   **format**    | [string](https://core.telegram.org/type/string)         | Theme format, a string that identifies the theming engines supported by the client |
|    **theme**    | [InputTheme](https://core.telegram.org/type/InputTheme) | Theme                                                                              |
| **document_id** | [long](https://core.telegram.org/type/long)             | Document ID                                                                        |

## Result

[Theme](https://core.telegram.org/type/Theme)

## Possible errors

| Code | Type                 | Description                   |
| :--: | -------------------- | ----------------------------- |
| 400  | THEME_FORMAT_INVALID | Invalid theme format provided |
| 400  | THEME_INVALID        | Invalid theme provided        |

## Can bots use this method?

Yes

## Related pages
