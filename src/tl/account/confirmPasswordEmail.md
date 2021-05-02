# account.confirmPasswordEmail

Verify an email to use as [2FA recovery method](https://core.telegram.org/api/srp).

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
        new Api.account.confirmPasswordEmail({
            code: 'random string here',
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
        new Api.account.confirmPasswordEmail({
            code: 'random string here',
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
account.confirmPasswordEmail#8fdf1920 code:string = Bool;
```

## Parameters

|   Name   | Type                                            | Description                                                                                                             |
| :------: | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **code** | [string](https://core.telegram.org/type/string) | The phone code that was received after [setting a recovery email](https://core.telegram.org/api/srp#email-verification) |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type               | Description        |
| :--: | ------------------ | ------------------ |
| 400  | CODE_INVALID       | Code invalid       |
| 400  | EMAIL_HASH_EXPIRED | Email hash expired |

## Can bots use this method?

Yes

## Related pages

### [Two-factor authentication](https://core.telegram.org/api/srp)

How to login to a user's account if they have enabled 2FA, how to change password.
