# auth.SignUp

Registers a validated phone number in the system.



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

    const result = await client.invoke(new Api.auth.SignUp({
    phoneNumber: 'some string here',
    phoneCodeHash: 'some string here',
    firstName: 'some string here',
    lastName: 'some string here'
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

    const result: Api.auth.Authorization = await client.invoke(new Api.auth.SignUp({
    phoneNumber: 'some string here',
    phoneCodeHash: 'some string here',
    firstName: 'some string here',
    lastName: 'some string here'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **phoneNumber** | [string](https://core.telegram.org/type/string) | Phone number in the international format 
| **phoneCodeHash** | [string](https://core.telegram.org/type/string) | SMS-message ID 
| **firstName** | [string](https://core.telegram.org/type/string) | New user first name 
| **lastName** | [string](https://core.telegram.org/type/string) | New user last name 


## Result

Returns an [auth.Authorization](https://core.telegram.org/type/auth.Authorization) object with information about the new authorization.



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | FIRSTNAME\_INVALID | The first name is invalid. 
| 400 | LASTNAME\_INVALID | The last name is invalid. 
| 400 | PHONE\_CODE\_EMPTY | phone\_code is missing. 
| 400 | PHONE\_CODE\_EXPIRED | The phone code you provided has expired. 
| 400 | PHONE\_CODE\_INVALID | The provided phone code is invalid. 
| 400 | PHONE\_NUMBER\_FLOOD | You asked for the code too many times. 
| 406 | PHONE\_NUMBER\_INVALID | The phone number is invalid. 
| 400 | PHONE\_NUMBER\_OCCUPIED | The phone number is already in use. 


## Can bots use this method?

No

## Related pages


