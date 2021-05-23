# auth.SignUp

Registers a validated phone number in the system.



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
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

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
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
| 400 | FIRSTNAME\_INVALID | Invalid first name 
| 400 | INPUT\_REQUEST\_TOO\_LONG | The request is too big 
| 400 | LASTNAME\_INVALID | Invalid last name 
| 400 | PHONE\_CODE\_EMPTY | **phone\_code** from a SMS is empty 
| 400 | PHONE\_CODE\_EXPIRED | SMS expired 
| 400 | PHONE\_CODE\_INVALID | Invalid SMS code was sent 
| 400 | PHONE\_NUMBER\_FLOOD | You asked for the code too many times. 
| 400 | PHONE\_NUMBER\_INVALID | Invalid phone number 
| 400 | PHONE\_NUMBER\_OCCUPIED | The phone number is already in use 


## Can bots use this method?

Yes

## Related pages


