# payments.GetBankCardData

Get info about a credit card

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
    new Api.payments.GetBankCardData({
      number: "some string here",
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

  const result: Api.payments.BankCardData = await client.invoke(
    new Api.payments.GetBankCardData({
      number: "some string here",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name    | Type                                            | Description        |
| :--------: | ----------------------------------------------- | ------------------ |
| **number** | [string](https://core.telegram.org/type/string) | Credit card number |

## Result

[payments.BankCardData](https://core.telegram.org/type/payments.BankCardData)

## Possible errors

| Code | Type                     | Description                           |
| :--: | ------------------------ | ------------------------------------- |
| 400  | BANK_CARD_NUMBER_INVALID | The specified card number is invalid. |

## Can bots use this method?

No

## Related pages
