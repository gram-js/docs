# contacts.BlockFromReplies

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
    new Api.contacts.BlockFromReplies({
      msgId: 43,
      deleteMessage: true,
      deleteHistory: true,
      reportSpam: true,
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
    new Api.contacts.BlockFromReplies({
      msgId: 43,
      deleteMessage: true,
      deleteHistory: true,
      reportSpam: true,
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
| deleteMessage | true | No description found |
| deleteHistory | true | No description found |
|  reportSpam   | true | No description found |
|     msgId     | int  | No description found |

### [](#result)Result

Updates

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
