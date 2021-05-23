# messages.SetBotShippingResults

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
    new Api.messages.SetBotShippingResults({
      queryId: BigInt("-4156887774564"),
      error: "some string here",
      shippingOptions: [
        new Api.ShippingOption({
          id: "some string here",
          title: "My very normal title",
          prices: [
            new Api.LabeledPrice({
              label: "some string here",
              amount: BigInt("-4156887774564"),
            }),
          ],
        }),
      ],
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
  const result: Api.Bool = await client.invoke(
    new Api.messages.SetBotShippingResults({
      queryId: BigInt("-4156887774564"),
      error: "some string here",
      shippingOptions: [
        new Api.ShippingOption({
          id: "some string here",
          title: "My very normal title",
          prices: [
            new Api.LabeledPrice({
              label: "some string here",
              amount: BigInt("-4156887774564"),
            }),
          ],
        }),
      ],
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|      Name       | Type           | Description          |
| :-------------: | -------------- | -------------------- |
|     queryId     | long           | No description found |
|      error      | string         | No description found |
| shippingOptions | ShippingOption | No description found |

### [](#result)Result

Bool

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
