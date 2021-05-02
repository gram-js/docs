# help.getPassportConfig

Get [passport](https://core.telegram.org/passport) configuration

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
        new Api.help.getPassportConfig({
            hash: 4160854,
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
    const result: Api.help.PassportConfig = await client.invoke(
        new Api.help.getPassportConfig({
            hash: 4160854,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
help.passportConfigNotModified#bfb9f457 = help.PassportConfig;
help.passportConfig#a098d6af hash:int countries_langs:DataJSON = help.PassportConfig;
---functions---
help.getPassportConfig#c661ad08 hash:int = help.PassportConfig;
```

## Parameters

|   Name   | Type                                      | Description                                                                                            |
| :------: | ----------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **hash** | [int](https://core.telegram.org/type/int) | [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |

## Result

[help.PassportConfig](https://core.telegram.org/type/help.PassportConfig)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Telegram Passport Manual](https://core.telegram.org/passport)
