# payments.getPaymentReceipt

Get payment receipt

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(
        new Api.payments.getPaymentReceipt({
            msgId: 7166138,
        }),
    );
    console.log(result); // prints the result
})();
```

:::

:::tab{title="TypeScript"}

```ts
import { Api, TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.payments.PaymentReceipt = await client.invoke(
        new Api.payments.getPaymentReceipt({
            msgId: 7166138,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
payments.paymentReceipt#500911e1 flags:# date:int bot_id:int invoice:Invoice provider_id:int info:flags.0?PaymentRequestedInfo shipping:flags.1?ShippingOption currency:string total_amount:long credentials_title:string users:Vector<User> = payments.PaymentReceipt;
---functions---
payments.getPaymentReceipt#a092a980 msg_id:int = payments.PaymentReceipt;
```

## Parameters

|    Name    | Type                                      | Description           |
| :--------: | ----------------------------------------- | --------------------- |
| **msg_id** | [int](https://core.telegram.org/type/int) | Message ID of receipt |

## Result

[payments.PaymentReceipt](https://core.telegram.org/type/payments.PaymentReceipt)

## Possible errors

| Code | Type               | Description                        |
| :--: | ------------------ | ---------------------------------- |
| 400  | MESSAGE_ID_INVALID | The provided message id is invalid |

## Can bots use this method?

Yes

## Related pages
