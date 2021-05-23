# messages.SendMessage

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
    new Api.messages.SendMessage({
      peer: "username",
      message: "Hello there!",
      randomId: BigInt("-4156887774564"),
      noWebpage: true,
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
    new Api.messages.SendMessage({
      peer: "username",
      message: "Hello there!",
      randomId: BigInt("-4156887774564"),
      noWebpage: true,
      scheduleDate: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|     Name     | Type          | Description          |
| :----------: | ------------- | -------------------- |
|  noWebpage   | true          | No description found |
|    silent    | true          | No description found |
|  background  | true          | No description found |
|  clearDraft  | true          | No description found |
|     peer     | InputPeer     | No description found |
| replyToMsgId | int           | No description found |
|   message    | string        | No description found |
|   randomId   | long          | No description found |
| replyMarkup  | ReplyMarkup   | No description found |
|   entities   | MessageEntity | No description found |
| scheduleDate | int           | No description found |

### [](#result)Result

Updates

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
