# payments.ValidateRequestedInfo

Submit requested order information for validation

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result = await client.invoke(
    new Api.payments.ValidateRequestedInfo({
      invoice: new Api.InputInvoiceMessage({
        peer: "username",
        msgId: 43,
      }),
      info: new Api.PaymentRequestedInfo({
        name: "some string here",
        phone: "some string here",
        email: "some string here",
        shippingAddress: new Api.PostAddress({
          streetLine1: "some string here",
          streetLine2: "some string here",
          city: "some string here",
          state: "some string here",
          countryIso2: "some string here",
          postCode: "some string here",
        }),
      }),
      save: true,
    })
  );
  console.log(result); // prints the result
})();
```

:::

:::tab{title="TypeScript"}

```ts
import { Api, TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result: Api.payments.ValidatedRequestedInfo = await client.invoke(
    new Api.payments.ValidateRequestedInfo({
      invoice: new Api.InputInvoiceMessage({
        peer: "username",
        msgId: 43,
      }),
      info: new Api.PaymentRequestedInfo({
        name: "some string here",
        phone: "some string here",
        email: "some string here",
        shippingAddress: new Api.PostAddress({
          streetLine1: "some string here",
          streetLine2: "some string here",
          city: "some string here",
          state: "some string here",
          countryIso2: "some string here",
          postCode: "some string here",
        }),
      }),
      save: true,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|   Name    | Type                                                                                                                              | Description                                                                                             |
| :-------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **flags** | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| **save**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Save order information to re-use it for future orders                                                   |
| **peer**  | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                             | Peer where the payment form was sent                                                                    |
| **msgId** | [int](https://core.telegram.org/type/int)                                                                                         | Message ID of payment form                                                                              |
| **info**  | [PaymentRequestedInfo](https://core.telegram.org/type/PaymentRequestedInfo)                                                       | Requested order information                                                                             |

## Result

[payments.ValidatedRequestedInfo](https://core.telegram.org/type/payments.ValidatedRequestedInfo)

## Possible errors

| Code | Type               | Description                         |
| :--: | ------------------ | ----------------------------------- |
| 400  | MESSAGE_ID_INVALID | The provided message id is invalid. |

## Can bots use this method?

No

## Related pages
