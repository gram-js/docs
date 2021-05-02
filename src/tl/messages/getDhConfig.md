# messages.getDhConfig

Returns configuration parameters for Diffie-Hellman key generation. Can also return a random sequence of bytes of required length.

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
        new Api.messages.getDhConfig({
            version: 6115373,
            randomLength: 6606435,
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
    const result: Api.messages.DhConfig = await client.invoke(
        new Api.messages.getDhConfig({
            version: 6115373,
            randomLength: 6606435,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
messages.dhConfigNotModified#c0e24635 random:bytes = messages.DhConfig;
messages.dhConfig#2c221edd g:int p:bytes version:int random:bytes = messages.DhConfig;
---functions---
messages.getDhConfig#26cf8950 version:int random_length:int = messages.DhConfig;
```

## Parameters

|       Name        | Type                                      | Description                                                                                                                                   |
| :---------------: | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|    **version**    | [int](https://core.telegram.org/type/int) | Value of the **version** parameter from [messages.dhConfig](https://core.telegram.org/constructor/messages.dhConfig), avialable at the client |
| **random_length** | [int](https://core.telegram.org/type/int) | Length of the required random sequence                                                                                                        |

## Result

[messages.DhConfig](https://core.telegram.org/type/messages.DhConfig)

## Possible errors

| Code | Type                  | Description           |
| :--: | --------------------- | --------------------- |
| 400  | RANDOM_LENGTH_INVALID | Random length invalid |

## Can bots use this method?

Yes

## Related pages

#### [messages.dhConfig](https://core.telegram.org/constructor/messages.dhConfig)

New set of configuring parameters.
