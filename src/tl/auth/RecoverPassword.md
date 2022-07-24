# auth.RecoverPassword

Reset the [2FA password](https://core.telegram.org/api/srp) using the recovery code sent using [auth.requestPasswordRecovery](https://core.telegram.org/method/auth.requestPasswordRecovery).



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession(''); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    await client.connect() // This assumes you have already authenticated with .start()

    const result = await client.invoke(new Api.auth.RecoverPassword({
    code: 'some string here',
    newSettings: new Api.account.PasswordInputSettings({
        newAlgo: new Api.PasswordKdfAlgoUnknown({}),
        newPasswordHash: Buffer.from('arbitrary data here'),
        hint: 'some string here',
        email: 'some string here',
        newSecureSettings: new Api.SecureSecretSettings({
            secureAlgo: new Api.SecurePasswordKdfAlgoUnknown({}),
            secureSecret: Buffer.from('arbitrary data here'),
            secureSecretId: BigInt('-4156887774564')
        })
    })
}));
    console.log(result); // prints the result
})();
```
:::

:::tab{title="TypeScript"}
```ts
import {Api, TelegramClient} from 'telegram';
import {StringSession} from 'telegram/sessions';

const session = new StringSession(''); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    await client.connect() // This assumes you have already authenticated with .start()

    const result: Api.auth.Authorization = await client.invoke(new Api.auth.RecoverPassword({
    code: 'some string here',
    newSettings: new Api.account.PasswordInputSettings({
        newAlgo: new Api.PasswordKdfAlgoUnknown({}),
        newPasswordHash: Buffer.from('arbitrary data here'),
        hint: 'some string here',
        email: 'some string here',
        newSecureSettings: new Api.SecureSecretSettings({
            secureAlgo: new Api.SecurePasswordKdfAlgoUnknown({}),
            secureSecret: Buffer.from('arbitrary data here'),
            secureSecretId: BigInt('-4156887774564')
        })
    })
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **flags** | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) 
| **code** | [string](https://core.telegram.org/type/string) | Code received via email 
| **newSettings** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[account.PasswordInputSettings](https://core.telegram.org/type/account.PasswordInputSettings) | New password 


## Result

[auth.Authorization](https://core.telegram.org/type/auth.Authorization)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | CODE\_EMPTY | The provided code is empty. 
| 400 | NEW\_SETTINGS\_INVALID | The new password settings are invalid. 


## Can bots use this method?

No

## Related pages

#### [Two-factor authentication](https://core.telegram.org/api/srp)

How to login to a user's account if they have enabled 2FA, how to change password.



#### [auth.requestPasswordRecovery](https://core.telegram.org/method/auth.requestPasswordRecovery)

Request recovery code of a [2FA password](https://core.telegram.org/api/srp), only for accounts with a [recovery email configured](https://core.telegram.org/api/srp#email-verification).




