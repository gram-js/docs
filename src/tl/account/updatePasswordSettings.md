# account.updatePasswordSettings

Set a new 2FA password

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.updatePasswordSettings({
		password: new Api.InputCheckPasswordSRP({...}),
		newSettings: new Api.account.PasswordInputSettings({...}),
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
    const result: Api.Bool = await client.invoke(new Api.account.updatePasswordSettings({
		password: new Api.InputCheckPasswordSRP({...}),
		newSettings: new Api.account.PasswordInputSettings({...}),
		}));
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
account.updatePasswordSettings#a59b102f password:InputCheckPasswordSRP new_settings:account.PasswordInputSettings = Bool;
```

## Parameters

|       Name       | Type                                                                                          | Description                                                     |
| :--------------: | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
|   **password**   | [InputCheckPasswordSRP](https://core.telegram.org/type/InputCheckPasswordSRP)                 | The old password (see [SRP](https://core.telegram.org/api/srp)) |
| **new_settings** | [account.PasswordInputSettings](https://core.telegram.org/type/account.PasswordInputSettings) | The new password (see [SRP](https://core.telegram.org/api/srp)) |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type                  | Description                                                                                                                                                                                                                                                          |
| :--: | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 400  | EMAIL_UNCONFIRMED     | Email unconfirmed                                                                                                                                                                                                                                                    |
| 400  | EMAIL_UNCONFIRMED_X   | The provided email isn't confirmed, X is the length of the verification code that was just sent to the email: use [account.verifyEmail](https://core.telegram.org/method/account.verifyEmail) to enter the received verification code and enable the recovery email. |
| 400  | NEW_SALT_INVALID      | The new salt is invalid                                                                                                                                                                                                                                              |
| 400  | NEW_SETTINGS_INVALID  | The new password settings are invalid                                                                                                                                                                                                                                |
| 400  | PASSWORD_HASH_INVALID | The old password hash is invalid                                                                                                                                                                                                                                     |
| 400  | SRP_ID_INVALID        | Invalid SRP ID provided                                                                                                                                                                                                                                              |

## Can bots use this method?

Yes

## Related pages

#### [Two-factor authentication](https://core.telegram.org/api/srp)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [account.verifyEmail](https://core.telegram.org/method/account.verifyEmail)

Verify an email address for telegram [passport](https://core.telegram.org/passport).
