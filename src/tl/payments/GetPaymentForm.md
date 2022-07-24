# payments.GetPaymentForm

Get a payment form



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

    const result = await client.invoke(new Api.payments.GetPaymentForm({
    invoice: new Api.InputInvoiceMessage({
        peer: 'username',
        msgId: 43
    }),
    themeParams: new Api.DataJSON({
        data: 'some string here'
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

    const result: Api.payments.PaymentForm = await client.invoke(new Api.payments.GetPaymentForm({
    invoice: new Api.InputInvoiceMessage({
        peer: 'username',
        msgId: 43
    }),
    themeParams: new Api.DataJSON({
        data: 'some string here'
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

| **flags** | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) 
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | The peer where the payment form was sent 
| **msgId** | [int](https://core.telegram.org/type/int) | Message ID of payment form 
| **themeParams** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[DataJSON](https://core.telegram.org/type/DataJSON) | A JSON object with the following keys, containing color theme information (integers, RGB24) to pass to the payment provider, to apply in eventual verification pages: `bg_color` - Background color `text_color` - Text color `hint_color` - Hint text color `link_color` - Link color `button_color` - Button color `button_text_color` - Button text color 


## Result

[payments.PaymentForm](https://core.telegram.org/type/payments.PaymentForm)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | MESSAGE\_ID\_INVALID | The provided message id is invalid. 


## Can bots use this method?

No

## Related pages


