# payments.getPaymentForm

Get a payment form

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
        new Api.payments.getPaymentForm({
            msgId: 8022817,
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
    const result: Api.payments.PaymentForm = await client.invoke(
        new Api.payments.getPaymentForm({
            msgId: 8022817,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
payments.paymentForm#3f56aea3 flags:# can_save_credentials:flags.2?true password_missing:flags.3?true bot_id:int invoice:Invoice provider_id:int url:string native_provider:flags.4?string native_params:flags.4?DataJSON saved_info:flags.0?PaymentRequestedInfo saved_credentials:flags.1?PaymentSavedCredentials users:Vector<User> = payments.PaymentForm;
---functions---
payments.getPaymentForm#99f09745 msg_id:int = payments.PaymentForm;
```

## Parameters

|    Name    | Type                                      | Description                |
| :--------: | ----------------------------------------- | -------------------------- |
| **msg_id** | [int](https://core.telegram.org/type/int) | Message ID of payment form |

## Result

[payments.PaymentForm](https://core.telegram.org/type/payments.PaymentForm)

## Possible errors

| Code | Type               | Description                        |
| :--: | ------------------ | ---------------------------------- |
| 400  | MESSAGE_ID_INVALID | The provided message id is invalid |

## Can bots use this method?

Yes

## Related pages
