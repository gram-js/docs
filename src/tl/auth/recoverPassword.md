# auth.recoverPassword

Reset the [2FA password](https://core.telegram.org/api/srp) using the recovery code sent using [auth.requestPasswordRecovery](https://core.telegram.org/method/auth.requestPasswordRecovery).

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
        new Api.auth.recoverPassword({
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
    const result: Api.auth.Authorization = await client.invoke(
        new Api.auth.recoverPassword({
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
auth.authorization#cd050916 flags:# tmp_sessions:flags.0?int user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;
---functions---
auth.recoverPassword#4ea56e92 code:string = auth.Authorization;
```

## Parameters

|   Name   | Type                                            | Description             |
| :------: | ----------------------------------------------- | ----------------------- |
| **code** | [string](https://core.telegram.org/type/string) | Code received via email |

## Result

[auth.Authorization](https://core.telegram.org/type/auth.Authorization)

## Possible errors

| Code | Type       | Description                |
| :--: | ---------- | -------------------------- |
| 400  | CODE_EMPTY | The provided code is empty |

## Can bots use this method?

Yes

## Related pages

#### [Two-factor authentication](https://core.telegram.org/api/srp)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [auth.requestPasswordRecovery](https://core.telegram.org/method/auth.requestPasswordRecovery)

Request recovery code of a [2FA password](https://core.telegram.org/api/srp), only for accounts with a [recovery email configured](https://core.telegram.org/api/srp#email-verification).
