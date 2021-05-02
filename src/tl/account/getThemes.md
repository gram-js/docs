# account.getThemes

Get installed themes

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
        new Api.account.getThemes({
            format: 'random string here',
            hash: 3632801,
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
    const result: Api.account.Themes = await client.invoke(
        new Api.account.getThemes({
            format: 'random string here',
            hash: 3632801,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
account.themesNotModified#f41eb622 = account.Themes;
account.themes#7f676421 hash:int themes:Vector<Theme> = account.Themes;
---functions---
account.getThemes#285946f8 format:string hash:int = account.Themes;
```

## Parameters

|    Name    | Type                                            | Description                                                                                            |
| :--------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **format** | [string](https://core.telegram.org/type/string) | Theme format, a string that identifies the theming engines supported by the client                     |
|  **hash**  | [int](https://core.telegram.org/type/int)       | [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |

## Result

[account.Themes](https://core.telegram.org/type/account.Themes)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
