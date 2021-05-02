# account.getPasswordSettings

Get private info associated to the password info (recovery email, telegram [passport](https://core.telegram.org/passport) info & so on)

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.getPasswordSettings({
		password: new Api.InputCheckPasswordSRP({...}),
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
    const result: Api.account.PasswordSettings = await client.invoke(new Api.account.getPasswordSettings({
		password: new Api.InputCheckPasswordSRP({...}),
		}));
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
account.passwordSettings#9a5c33e5 flags:# email:flags.0?string secure_settings:flags.1?SecureSecretSettings = account.PasswordSettings;
---functions---
account.getPasswordSettings#9cd4eaf9 password:InputCheckPasswordSRP = account.PasswordSettings;
```

## Parameters

|     Name     | Type                                                                          | Description                                                 |
| :----------: | ----------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **password** | [InputCheckPasswordSRP](https://core.telegram.org/type/InputCheckPasswordSRP) | The password (see [SRP](https://core.telegram.org/api/srp)) |

## Result

[account.PasswordSettings](https://core.telegram.org/type/account.PasswordSettings)

## Possible errors

| Code | Type                  | Description                           |
| :--: | --------------------- | ------------------------------------- |
| 400  | PASSWORD_HASH_INVALID | The provided password hash is invalid |

## Can bots use this method?

Yes

## Related pages

#### [Two-factor authentication](https://core.telegram.org/api/srp)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [Telegram Passport Manual](https://core.telegram.org/passport)
