# messages.GetHistory

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
    new Api.messages.GetHistory({
      peer: "username",
      offsetId: 43,
      offsetDate: 43,
      addOffset: 0,
      limit: 100,
      maxId: 0,
      minId: 0,
      hash: 0,
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
  const result: Api.messages.Messages = await client.invoke(
    new Api.messages.GetHistory({
      peer: "username",
      offsetId: 43,
      offsetDate: 43,
      addOffset: 0,
      limit: 100,
      maxId: 0,
      minId: 0,
      hash: 0,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|    Name    | Type      | Description          |
| :--------: | --------- | -------------------- |
|    peer    | InputPeer | No description found |
|  offsetId  | int       | No description found |
| offsetDate | int       | No description found |
| addOffset  | int       | No description found |
|   limit    | int       | No description found |
|   maxId    | int       | No description found |
|   minId    | int       | No description found |
|    hash    | int       | No description found |

### [](#result)Result

messages.Messages

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
