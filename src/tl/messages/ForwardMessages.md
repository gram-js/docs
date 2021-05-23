# messages.ForwardMessages

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
    new Api.messages.ForwardMessages({
      fromPeer: "username",
      id: [43],
      randomId: [BigInt("-4156887774564")],
      toPeer: "username",
      withMyScore: true,
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
    new Api.messages.ForwardMessages({
      fromPeer: "username",
      id: [43],
      randomId: [BigInt("-4156887774564")],
      toPeer: "username",
      withMyScore: true,
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
| withMyScore  | true      | No description found |
|   fromPeer   | InputPeer | No description found |
|      id      | int       | No description found |
|   randomId   | long      | No description found |
|    toPeer    | InputPeer | No description found |
| scheduleDate | int       | No description found |

### [](#result)Result

Updates

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
