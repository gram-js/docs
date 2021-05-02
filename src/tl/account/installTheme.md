# account.installTheme

Install a theme

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
        new Api.account.installTheme({
            dark: true,
            format: 'random string here',
            theme: new Api.InputTheme({
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
        new Api.account.installTheme({
            dark: true,
            format: 'random string here',
            theme: new Api.InputTheme({
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
account.installTheme#7ae43737 flags:# dark:flags.0?true format:flags.1?string theme:flags.1?InputTheme = Bool;
```

## Parameters

|    Name    | Type                                                                                                                                   | Description                                                                                             |
| :--------: | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **flags**  | [#](https://core.telegram.org/type/%23)                                                                                                | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|  **dark**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true)      | Whether to install the dark version                                                                     |
| **format** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](https://core.telegram.org/type/string)         | Theme format, a string that identifies the theming engines supported by the client                      |
| **theme**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[InputTheme](https://core.telegram.org/type/InputTheme) | Theme to install                                                                                        |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
