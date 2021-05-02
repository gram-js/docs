# auth.requestPasswordRecovery

Request recovery code of a [2FA password](https://core.telegram.org/api/srp), only for accounts with a [recovery email configured](https://core.telegram.org/api/srp#email-verification).

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.auth.requestPasswordRecovery({
		400: new Api.PASSWORD_EMPTY({...}),
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
    const result: Api.auth.PasswordRecovery = await client.invoke(new Api.auth.requestPasswordRecovery({
		400: new Api.PASSWORD_EMPTY({...}),
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
auth.passwordRecovery#137948a5 email_pattern:string = auth.PasswordRecovery;
---functions---
auth.requestPasswordRecovery#d897bc66 = auth.PasswordRecovery;
```

## Parameters

| Name | Type           | Description                    |
| :--: | -------------- | ------------------------------ |
| 400  | PASSWORD_EMPTY | The provided password is empty |

## Result

[auth.PasswordRecovery](https://core.telegram.org/type/auth.PasswordRecovery)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [Two-factor authentication](https://core.telegram.org/api/srp)

How to login to a user's account if they have enabled 2FA, how to change password.
