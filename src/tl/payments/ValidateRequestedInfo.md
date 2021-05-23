# payments.ValidateRequestedInfo

No description found

### [](#example)Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const session = new StringSession("");
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  const result = await client.invoke(
    new Api.payments.ValidateRequestedInfo({
      msgId: 43,
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

const session = new StringSession("");
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  const result: Api.payments.ValidatedRequestedInfo = await client.invoke(
    new Api.payments.ValidateRequestedInfo({
      msgId: 43,
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

### [](#parameters)Parameters

| Name  | Type                 | Description          |
| :---: | -------------------- | -------------------- |
| save  | true                 | No description found |
| msgId | int                  | No description found |
| info  | PaymentRequestedInfo | No description found |

### [](#result)Result

payments.ValidatedRequestedInfo

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
