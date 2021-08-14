# payments.SendPaymentForm

Send compiled payment form

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
    new Api.payments.SendPaymentForm({
      formId: BigInt("-4156887774564"),
      peer: "username",
      msgId: 43,
      credentials: new Api.InputPaymentCredentialsSaved({
        id: "some string here",
        tmpPassword: Buffer.from("arbitrary data here"),
      }),
      requestedInfoId: "some string here",
      shippingOptionId: "some string here",
      tipAmount: BigInt("-4156887774564"),
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

  const result: Api.payments.PaymentResult = await client.invoke(
    new Api.payments.SendPaymentForm({
      formId: BigInt("-4156887774564"),
      peer: "username",
      msgId: 43,
      credentials: new Api.InputPaymentCredentialsSaved({
        id: "some string here",
        tmpPassword: Buffer.from("arbitrary data here"),
      }),
      requestedInfoId: "some string here",
      shippingOptionId: "some string here",
      tipAmount: BigInt("-4156887774564"),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|         Name         | Type                                                                                                                           | Description                                                                                                   |
| :------------------: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
|      **flags**       | [#](https://core.telegram.org/type/%23)                                                                                        | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)       |
|      **msgId**       | [int](https://core.telegram.org/type/int)                                                                                      | Message ID of form                                                                                            |
| **requestedInfoId**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](https://core.telegram.org/type/string) | ID of saved and validated [order info](https://core.telegram.org/constructor/payments.validatedRequestedInfo) |
| **shippingOptionId** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](https://core.telegram.org/type/string) | Chosen shipping option ID                                                                                     |
|   **credentials**    | [InputPaymentCredentials](https://core.telegram.org/type/InputPaymentCredentials)                                              | Payment credentials                                                                                           |

## Result

[payments.PaymentResult](https://core.telegram.org/type/payments.PaymentResult)

## Possible errors

| Code | Type               | Description                        |
| :--: | ------------------ | ---------------------------------- |
| 400  | MESSAGE_ID_INVALID | The provided message id is invalid |

## Can bots use this method?

No

## Related pages

#### [payments.ValidatedRequestedInfo](https://core.telegram.org/constructor/payments.validatedRequestedInfo)

Validated user-provided info
