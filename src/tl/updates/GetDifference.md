# updates.GetDifference

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
    new Api.updates.GetDifference({
      pts: 43,
      date: Date.now(),
      qts: 43,
      ptsTotalLimit: 43,
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
  const result: Api.updates.Difference = await client.invoke(
    new Api.updates.GetDifference({
      pts: 43,
      date: Date.now(),
      qts: 43,
      ptsTotalLimit: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|     Name      | Type | Description          |
| :-----------: | ---- | -------------------- |
|      pts      | int  | No description found |
| ptsTotalLimit | int  | No description found |
|     date      | date | No description found |
|      qts      | int  | No description found |

### [](#result)Result

updates.Difference

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
