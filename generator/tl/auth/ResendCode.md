# auth.ResendCode

Resend the login code via another medium, the phone code type is determined by the return value of the previous auth.sendCode/auth.resendCode: see [login](https://core.telegram.org/api/auth) for more info.



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

    const result = await client.invoke(new Api.auth.ResendCode({
    phoneNumber: 'some string here',
    phoneCodeHash: 'some string here'
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

    const result: Api.auth.SentCode = await client.invoke(new Api.auth.ResendCode({
    phoneNumber: 'some string here',
    phoneCodeHash: 'some string here'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **phoneNumber** | [string](https://core.telegram.org/type/string) | The phone number 
| **phoneCodeHash** | [string](https://core.telegram.org/type/string) | The phone code hash obtained from [auth.sendCode](https://core.telegram.org/method/auth.sendCode) 


## Result

[auth.SentCode](https://core.telegram.org/type/auth.SentCode)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | PHONE\_CODE\_EXPIRED | The phone code you provided has expired. 
| 400 | PHONE\_CODE\_HASH\_EMPTY | phone\_code\_hash is missing. 
| 406 | PHONE\_NUMBER\_INVALID | The phone number is invalid. 
| 406 | SEND\_CODE\_UNAVAILABLE | Returned when all available options for this type of number were already used (e.g. flash-call, then SMS, then this error might be returned to trigger a second resend). 


## Can bots use this method?

No

## Related pages

#### [auth.sendCode](https://core.telegram.org/method/auth.sendCode)

Send the verification code for login



#### [User Authorization](https://core.telegram.org/api/auth)

How to register a user's phone to start using the API.




