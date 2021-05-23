# bots.SendCustomRequest

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
    new Api.bots.SendCustomRequest({
      customMethod: "some string here",
      params: new Api.DataJSON({
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
  const result: Api.DataJSON = await client.invoke(
    new Api.bots.SendCustomRequest({
      customMethod: "some string here",
      params: new Api.DataJSON({
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

|     Name     | Type     | Description          |
| :----------: | -------- | -------------------- |
| customMethod | string   | No description found |
|    params    | DataJSON | No description found |

### [](#result)Result

DataJSON

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
