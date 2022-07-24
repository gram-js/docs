# auth.CancelCode

Cancel the login verification code



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

    const result = await client.invoke(new Api.auth.CancelCode({
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

    const result: Api.Bool = await client.invoke(new Api.auth.CancelCode({
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

| **phoneNumber** | [string](https://core.telegram.org/type/string) | Phone number 
| **phoneCodeHash** | [string](https://core.telegram.org/type/string) | Phone code hash from [auth.sendCode](https://core.telegram.org/method/auth.sendCode) 


## Result

[Bool](https://core.telegram.org/type/Bool)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | PHONE\_CODE\_EXPIRED | The phone code you provided has expired. 
| 406 | PHONE\_NUMBER\_INVALID | The phone number is invalid. 


## Can bots use this method?

No

## Related pages

#### [auth.sendCode](https://core.telegram.org/method/auth.sendCode)

Send the verification code for login




