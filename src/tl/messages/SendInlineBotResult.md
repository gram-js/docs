# messages.SendInlineBotResult

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
    new Api.messages.SendInlineBotResult({
      peer: "username",
      randomId: BigInt("-4156887774564"),
      queryId: BigInt("-4156887774564"),
      id: "some string here",
      hideVia: true,
      scheduleDate: 43,
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
  const result: Api.Updates = await client.invoke(
    new Api.messages.SendInlineBotResult({
      peer: "username",
      randomId: BigInt("-4156887774564"),
      queryId: BigInt("-4156887774564"),
      id: "some string here",
      hideVia: true,
      scheduleDate: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|     Name     | Type      | Description          |
| :----------: | --------- | -------------------- |
|    silent    | true      | No description found |
|  background  | true      | No description found |
|  clearDraft  | true      | No description found |
|   hideVia    | true      | No description found |
|     peer     | InputPeer | No description found |
| replyToMsgId | int       | No description found |
|   randomId   | long      | No description found |
|   queryId    | long      | No description found |
|      id      | string    | No description found |
| scheduleDate | int       | No description found |

### [](#result)Result

Updates

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
