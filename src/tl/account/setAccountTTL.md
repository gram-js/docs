# account.setAccountTTL

Set account self-destruction period

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
        new Api.account.setAccountTTL({
            ttl: new Api.AccountDaysTTL({
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
        new Api.account.setAccountTTL({
            ttl: new Api.AccountDaysTTL({
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
account.setAccountTTL#2442485e ttl:AccountDaysTTL = Bool;
```

## Parameters

|  Name   | Type                                                            | Description          |
| :-----: | --------------------------------------------------------------- | -------------------- |
| **ttl** | [AccountDaysTTL](https://core.telegram.org/type/AccountDaysTTL) | Time to live in days |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type             | Description                 |
| :--: | ---------------- | --------------------------- |
| 400  | TTL_DAYS_INVALID | The provided TTL is invalid |

## Can bots use this method?

Yes

## Related pages
