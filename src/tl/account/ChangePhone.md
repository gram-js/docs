# account.ChangePhone

Change the phone number of the current account



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.ChangePhone({
    phoneNumber: 'some string here',
    phoneCodeHash: 'some string here',
    phoneCode: 'some string here'
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
    const result: Api.User = await client.invoke(new Api.account.ChangePhone({
    phoneNumber: 'some string here',
    phoneCodeHash: 'some string here',
    phoneCode: 'some string here'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **phoneNumber** | [string](https://core.telegram.org/type/string) | New phone number 
| **phoneCodeHash** | [string](https://core.telegram.org/type/string) | Phone code hash received when calling [account.sendChangePhoneCode](https://core.telegram.org/method/account.sendChangePhoneCode) 
| **phoneCode** | [string](https://core.telegram.org/type/string) | Phone code received when calling [account.sendChangePhoneCode](https://core.telegram.org/method/account.sendChangePhoneCode) 


## Result

[User](https://core.telegram.org/type/User)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | PHONE\_CODE\_EMPTY | phone\_code is missing 
| 400 | PHONE\_NUMBER\_INVALID | The phone number is invalid 


## Can bots use this method?

No

## Related pages

#### [account.sendChangePhoneCode](https://core.telegram.org/method/account.sendChangePhoneCode)

Verify a new phone number to associate to the current account




