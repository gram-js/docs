# InvokeWithMessagesRange

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
    new Api.InvokeWithMessagesRange({
      range: new Api.MessageRange({
        minId: 0,
        maxId: 0,
      }),
      query: new Api.AnyRequest({
        /*...*/
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
  const result: Api.AnyRequest = await client.invoke(
    new Api.InvokeWithMessagesRange({
      range: new Api.MessageRange({
        minId: 0,
        maxId: 0,
      }),
      query: new Api.AnyRequest({
        /*...*/
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

| Name  | Type         | Description          |
| :---: | ------------ | -------------------- |
|   x   | Type         | No description found |
| range | MessageRange | No description found |
| query | X            | No description found |

### [](#result)Result

AnyRequest

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
