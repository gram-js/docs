# auth.AcceptLoginToken

Accept QR code login token, logging in the app that generated it.



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.auth.AcceptLoginToken({
    token: Buffer.from('arbitrary data here')
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
    const result: Api.Authorization = await client.invoke(new Api.auth.AcceptLoginToken({
    token: Buffer.from('arbitrary data here')
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **token** | [bytes](https://core.telegram.org/type/bytes) | Login token embedded in QR code, for more info, see [login via QR code](https://core.telegram.org/api/qr-login). 


## Result

[Authorization](https://core.telegram.org/type/Authorization)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | AUTH\_TOKEN\_INVALIDX | The specified auth token is invalid 


## Can bots use this method?

No

## Related pages

#### [Login via QR code](https://core.telegram.org/api/qr-login)

QR code login flow




