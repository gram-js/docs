# payments.sendPaymentForm

Send compiled payment form

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.payments.sendPaymentForm({
		msgId: 6158322,
		requestedInfoId: 'random string here',
		shippingOptionId: 'random string here',
		credentials: new Api.InputPaymentCredentials({...}),
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
    const result: Api.payments.PaymentResult = await client.invoke(new Api.payments.sendPaymentForm({
		msgId: 6158322,
		requestedInfoId: 'random string here',
		shippingOptionId: 'random string here',
		credentials: new Api.InputPaymentCredentials({...}),
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
payments.paymentResult#4e5f810d updates:Updates = payments.PaymentResult;
payments.paymentVerificationNeeded#d8411139 url:string = payments.PaymentResult;
---functions---
payments.sendPaymentForm#2b8879b3 flags:# msg_id:int requested_info_id:flags.0?string shipping_option_id:flags.1?string credentials:InputPaymentCredentials = payments.PaymentResult;
```

## Parameters

|          Name          | Type                                                                                                                           | Description                                                                                                   |
| :--------------------: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
|       **flags**        | [#](https://core.telegram.org/type/%23)                                                                                        | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)       |
|       **msg_id**       | [int](https://core.telegram.org/type/int)                                                                                      | Message ID of form                                                                                            |
| **requested_info_id**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](https://core.telegram.org/type/string) | ID of saved and validated [order info](https://core.telegram.org/constructor/payments.validatedRequestedInfo) |
| **shipping_option_id** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](https://core.telegram.org/type/string) | Chosen shipping option ID                                                                                     |
|    **credentials**     | [InputPaymentCredentials](https://core.telegram.org/type/InputPaymentCredentials)                                              | Payment credentials                                                                                           |

## Result

[payments.PaymentResult](https://core.telegram.org/type/payments.PaymentResult)

## Possible errors

| Code | Type               | Description                        |
| :--: | ------------------ | ---------------------------------- |
| 400  | MESSAGE_ID_INVALID | The provided message id is invalid |

## Can bots use this method?

Yes

## Related pages

#### [payments.ValidatedRequestedInfo](https://core.telegram.org/constructor/payments.validatedRequestedInfo)

Validated user-provided info
