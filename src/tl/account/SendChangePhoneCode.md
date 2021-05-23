# account.SendChangePhoneCode

Verify a new phone number to associate to the current account



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.SendChangePhoneCode({
    phoneNumber: 'some string here',
    settings: new Api.CodeSettings({
        allowFlashcall: true,
        currentNumber: true,
        allowAppHash: true
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

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.auth.SentCode = await client.invoke(new Api.account.SendChangePhoneCode({
    phoneNumber: 'some string here',
    settings: new Api.CodeSettings({
        allowFlashcall: true,
        currentNumber: true,
        allowAppHash: true
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
| 400 | PHONE\_NUMBER\_INVALID | The phone number is invalid 


## Can bots use this method?

Yes

## Related pages


