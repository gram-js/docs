# auth.ResendCode

Resend the login code via another medium, the phone code type is determined by the return value of the previous auth.sendCode/auth.resendCode: see [login](https://core.telegram.org/api/auth) for more info.



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
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

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
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
| 400 | PHONE\_CODE\_EXPIRED | The phone code you provided has expired, this may happen if it was sent to any chat on telegram (if the code is sent through a telegram chat (not the official account) to avoid it append or prepend to the code some chars) 
| 400 | PHONE\_CODE\_HASH\_EMPTY | phone\_code\_hash is missing 
| 400 | PHONE\_NUMBER\_INVALID | The phone number is invalid 


## Can bots use this method?

Yes

## Related pages

#### [auth.sendCode](https://core.telegram.org/method/auth.sendCode)

Send the verification code for login



#### [User Authorization](https://core.telegram.org/api/auth)

How to register a user's phone to start using the API.




