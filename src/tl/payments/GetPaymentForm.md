# payments.GetPaymentForm

Get a payment form



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.payments.GetPaymentForm({
    msgId: 43
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
    const result: Api.payments.PaymentForm = await client.invoke(new Api.payments.GetPaymentForm({
    msgId: 43
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **msgId** | [int](https://core.telegram.org/type/int) | Message ID of payment form 


## Result

[payments.PaymentForm](https://core.telegram.org/type/payments.PaymentForm)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | MESSAGE\_ID\_INVALID | The provided message id is invalid 


## Can bots use this method?

Yes

## Related pages


