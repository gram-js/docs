# payments.validateRequestedInfo

Submit requested order information for validation

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
        new Api.payments.validateRequestedInfo({
            save: true,
            msgId: 9171703,
            info: new Api.PaymentRequestedInfo({
                /* ... */
            }),
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
    const result: Api.payments.ValidatedRequestedInfo = await client.invoke(
        new Api.payments.validateRequestedInfo({
            save: true,
            msgId: 9171703,
            info: new Api.PaymentRequestedInfo({
                /* ... */
            }),
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
payments.validatedRequestedInfo#d1451883 flags:# id:flags.0?string shipping_options:flags.1?Vector<ShippingOption> = payments.ValidatedRequestedInfo;
---functions---
payments.validateRequestedInfo#770a8e74 flags:# save:flags.0?true msg_id:int info:PaymentRequestedInfo = payments.ValidatedRequestedInfo;
```

## Parameters

|    Name    | Type                                                                                                                              | Description                                                                                             |
| :--------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **flags**  | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|  **save**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Save order information to re-use it for future orders                                                   |
| **msg_id** | [int](https://core.telegram.org/type/int)                                                                                         | Message ID of payment form                                                                              |
|  **info**  | [PaymentRequestedInfo](https://core.telegram.org/type/PaymentRequestedInfo)                                                       | Requested order information                                                                             |

## Result

[payments.ValidatedRequestedInfo](https://core.telegram.org/type/payments.ValidatedRequestedInfo)

## Possible errors

| Code | Type               | Description                        |
| :--: | ------------------ | ---------------------------------- |
| 400  | MESSAGE_ID_INVALID | The provided message id is invalid |

## Can bots use this method?

Yes

## Related pages
