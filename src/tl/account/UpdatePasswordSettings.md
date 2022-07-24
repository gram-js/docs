# account.UpdatePasswordSettings

Set a new 2FA password



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

    const result = await client.invoke(new Api.account.UpdatePasswordSettings({
    password: new Api.InputCheckPasswordSRP({
        srpId: BigInt('-4156887774564'),
        a: Buffer.from('arbitrary data here'),
        m1: Buffer.from('arbitrary data here')
    }),
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

    const result: Api.Bool = await client.invoke(new Api.account.UpdatePasswordSettings({
    password: new Api.InputCheckPasswordSRP({
        srpId: BigInt('-4156887774564'),
        a: Buffer.from('arbitrary data here'),
        m1: Buffer.from('arbitrary data here')
    }),
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

| **password** | [InputCheckPasswordSRP](https://core.telegram.org/type/InputCheckPasswordSRP) | The old password (see [SRP](https://core.telegram.org/api/srp)) 
| **newSettings** | [account.PasswordInputSettings](https://core.telegram.org/type/account.PasswordInputSettings) | The new password (see [SRP](https://core.telegram.org/api/srp)) 


## Result

[Bool](https://core.telegram.org/type/Bool)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | EMAIL\_UNCONFIRMED\_%d | The provided email isn't confirmed, %d is the length of the verification code that was just sent to the email: use [account.verifyEmail](https://core.telegram.org/method/account.verifyEmail) to enter the received verification code and enable the recovery email. 
| 400 | EMAIL\_INVALID | The specified email is invalid. 
| 400 | EMAIL\_UNCONFIRMED | Email unconfirmed. 
| 400 | NEW\_SALT\_INVALID | The new salt is invalid. 
| 400 | NEW\_SETTINGS\_INVALID | The new password settings are invalid. 
| 400 | PASSWORD\_HASH\_INVALID | The provided password hash is invalid. 
| 400 | SRP\_ID\_INVALID | Invalid SRP ID provided. 
| 400 | SRP\_PASSWORD\_CHANGED | Password has changed. 


## Can bots use this method?

No

## Related pages

#### [Two-factor authentication](https://core.telegram.org/api/srp)

How to login to a user's account if they have enabled 2FA, how to change password.



#### [account.verifyEmail](https://core.telegram.org/method/account.verifyEmail)

Verify an email address for telegram [passport](https://core.telegram.org/passport).




