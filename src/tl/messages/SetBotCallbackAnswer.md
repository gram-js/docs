# messages.SetBotCallbackAnswer

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
    new Api.messages.SetBotCallbackAnswer({
      queryId: BigInt("-4156887774564"),
      cacheTime: 43,
      alert: true,
      message: "Hello there!",
      url: "some string here",
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
    new Api.messages.SetBotCallbackAnswer({
      queryId: BigInt("-4156887774564"),
      cacheTime: 43,
      alert: true,
      message: "Hello there!",
      url: "some string here",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|   Name    | Type   | Description          |
| :-------: | ------ | -------------------- |
|   alert   | true   | No description found |
|  queryId  | long   | No description found |
|  message  | string | No description found |
|    url    | string | No description found |
| cacheTime | int    | No description found |

### [](#result)Result

Bool

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
