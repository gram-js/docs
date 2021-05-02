# account.confirmPhone

Confirm a phone number to cancel account deletion, for more info [click here »](https://core.telegram.org/api/account-deletion)

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
        new Api.account.confirmPhone({
            phoneCodeHash: 'random string here',
            phoneCode: 'random string here',
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
        new Api.account.confirmPhone({
            phoneCodeHash: 'random string here',
            phoneCode: 'random string here',
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.confirmPhone#5f2178c3 phone_code_hash:string phone_code:string = Bool;
```

## Parameters

|        Name         | Type                                            | Description                                                                                   |
| :-----------------: | ----------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **phone_code_hash** | [string](https://core.telegram.org/type/string) | Phone code hash, for more info [click here »](https://core.telegram.org/api/account-deletion) |
|   **phone_code**    | [string](https://core.telegram.org/type/string) | SMS code, for more info [click here »](https://core.telegram.org/api/account-deletion)        |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type              | Description           |
| :--: | ----------------- | --------------------- |
| 400  | CODE_HASH_INVALID | Code hash invalid     |
| 400  | PHONE_CODE_EMPTY  | phone_code is missing |

## Can bots use this method?

Yes

## Related pages

#### [Account deletion](https://core.telegram.org/api/account-deletion)

How to reset an account if the 2FA password was forgotten.
