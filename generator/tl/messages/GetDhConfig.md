# messages.GetDhConfig

Returns configuration parameters for Diffie-Hellman key generation. Can also return a random sequence of bytes of required length.



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

    const result = await client.invoke(new Api.messages.GetDhConfig({
    version: 43,
    randomLength: 43
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

    const result: Api.messages.DhConfig = await client.invoke(new Api.messages.GetDhConfig({
    version: 43,
    randomLength: 43
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **version** | [int](https://core.telegram.org/type/int) | Value of the **version** parameter from [messages.dhConfig](https://core.telegram.org/constructor/messages.dhConfig), available at the client 
| **randomLength** | [int](https://core.telegram.org/type/int) | Length of the required random sequence 


## Result

[messages.DhConfig](https://core.telegram.org/type/messages.DhConfig)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | RANDOM\_LENGTH\_INVALID | Random length invalid. 


## Can bots use this method?

No

## Related pages

#### [messages.dhConfig](https://core.telegram.org/constructor/messages.dhConfig)

New set of configuring parameters.




