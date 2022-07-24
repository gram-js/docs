# account.SendChangePhoneCode

Verify a new phone number to associate to the current account



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

    const result = await client.invoke(new Api.account.SendChangePhoneCode({
    phoneNumber: 'some string here',
    settings: new Api.CodeSettings({
        allowFlashcall: true,
        currentNumber: true,
        allowAppHash: true,
        allowMissedCall: true,
        logoutTokens: [Buffer.from('arbitrary data here')]
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

    const result: Api.auth.SentCode = await client.invoke(new Api.account.SendChangePhoneCode({
    phoneNumber: 'some string here',
    settings: new Api.CodeSettings({
        allowFlashcall: true,
        currentNumber: true,
        allowAppHash: true,
        allowMissedCall: true,
        logoutTokens: [Buffer.from('arbitrary data here')]
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

| **phoneNumber** | [string](https://core.telegram.org/type/string) | New phone number 
| **settings** | [CodeSettings](https://core.telegram.org/type/CodeSettings) | Phone code settings 


## Result

[auth.SentCode](https://core.telegram.org/type/auth.SentCode)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 406 | FRESH\_CHANGE\_PHONE\_FORBIDDEN | You can't change phone number right after logging in, please wait at least 24 hours. 
| 400 | PHONE\_NUMBER\_BANNED | The provided phone number is banned from telegram. 
| 406 | PHONE\_NUMBER\_INVALID | The phone number is invalid. 
| 400 | PHONE\_NUMBER\_OCCUPIED | The phone number is already in use. 


## Can bots use this method?

No

## Related pages


