# bots.AnswerWebhookJSONQuery

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
    new Api.bots.AnswerWebhookJSONQuery({
      queryId: BigInt("-4156887774564"),
      data: new Api.DataJSON({
        data: "some string here",
      }),
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
    new Api.bots.AnswerWebhookJSONQuery({
      queryId: BigInt("-4156887774564"),
      data: new Api.DataJSON({
        data: "some string here",
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|  Name   | Type     | Description          |
| :-----: | -------- | -------------------- |
| queryId | long     | No description found |
|  data   | DataJSON | No description found |

### [](#result)Result

Bool

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
