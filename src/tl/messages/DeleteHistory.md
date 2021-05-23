# messages.DeleteHistory

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
    new Api.messages.DeleteHistory({
      peer: "username",
      maxId: 0,
      justClear: true,
      revoke: true,
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
  const result: Api.messages.AffectedHistory = await client.invoke(
    new Api.messages.DeleteHistory({
      peer: "username",
      maxId: 0,
      justClear: true,
      revoke: true,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|   Name    | Type      | Description          |
| :-------: | --------- | -------------------- |
| justClear | true      | No description found |
|  revoke   | true      | No description found |
|   peer    | InputPeer | No description found |
|   maxId   | int       | No description found |

### [](#result)Result

messages.AffectedHistory

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
