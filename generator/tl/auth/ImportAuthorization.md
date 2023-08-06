# auth.ImportAuthorization

Logs in a user using a key transmitted from his native data-center.



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

    const result = await client.invoke(new Api.auth.ImportAuthorization({
    id: BigInt('-4156887774564'),
    bytes: Buffer.from('arbitrary data here')
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

    const result: Api.auth.Authorization = await client.invoke(new Api.auth.ImportAuthorization({
    id: BigInt('-4156887774564'),
    bytes: Buffer.from('arbitrary data here')
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **id** | [long](https://core.telegram.org/type/long) | User ID 
| **bytes** | [bytes](https://core.telegram.org/type/bytes) | Authorization key 


## Result

[auth.Authorization](https://core.telegram.org/type/auth.Authorization)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | AUTH\_BYTES\_INVALID | The provided authorization is invalid. 
| 400 | USER\_ID\_INVALID | The provided user ID is invalid. 


## Can bots use this method?

Yes

## Related pages


