# payments.GetPaymentReceipt

Get payment receipt

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
    new Api.payments.GetPaymentReceipt({
      peer: "username",
      msgId: 43,
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

  const result: Api.payments.PaymentReceipt = await client.invoke(
    new Api.payments.GetPaymentReceipt({
      peer: "username",
      msgId: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|   Name    | Type                                                  | Description                                 |
| :-------: | ----------------------------------------------------- | ------------------------------------------- |
| **peer**  | [InputPeer](https://core.telegram.org/type/InputPeer) | The peer where the payment receipt was sent |
| **msgId** | [int](https://core.telegram.org/type/int)             | Message ID of receipt                       |

## Result

[payments.PaymentReceipt](https://core.telegram.org/type/payments.PaymentReceipt)

## Possible errors

| Code | Type               | Description                         |
| :--: | ------------------ | ----------------------------------- |
| 400  | MESSAGE_ID_INVALID | The provided message id is invalid. |

## Can bots use this method?

No

## Related pages
