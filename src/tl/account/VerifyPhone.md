# account.VerifyPhone

Send the verification phone code for telegram [passport](https://core.telegram.org/passport).



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.VerifyPhone({
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
    const result: Api.Bool = await client.invoke(new Api.account.VerifyPhone({
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
| **phoneNumber** | [string](https://core.telegram.org/type/string) | The phone number to verify 
| **settings** | [CodeSettings](https://core.telegram.org/type/CodeSettings) | Phone code settings 


## Result

[auth.SentCode](https://core.telegram.org/type/auth.SentCode)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |


## Can bots use this method?

Yes

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)


