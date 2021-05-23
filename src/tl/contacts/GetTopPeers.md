# contacts.GetTopPeers

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
    new Api.contacts.GetTopPeers({
      offset: 43,
      limit: 100,
      hash: 0,
      correspondents: true,
      botsPm: true,
      botsInline: true,
      phoneCalls: true,
      forwardUsers: true,
      forwardChats: true,
      groups: true,
      channels: true,
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
  const result: Api.contacts.TopPeers = await client.invoke(
    new Api.contacts.GetTopPeers({
      offset: 43,
      limit: 100,
      hash: 0,
      correspondents: true,
      botsPm: true,
      botsInline: true,
      phoneCalls: true,
      forwardUsers: true,
      forwardChats: true,
      groups: true,
      channels: true,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|      Name      | Type | Description          |
| :------------: | ---- | -------------------- |
| correspondents | true | No description found |
|     botsPm     | true | No description found |
|   botsInline   | true | No description found |
|   phoneCalls   | true | No description found |
|  forwardUsers  | true | No description found |
|  forwardChats  | true | No description found |
|     groups     | true | No description found |
|    channels    | true | No description found |
|     offset     | int  | No description found |
|     limit      | int  | No description found |
|      hash      | int  | No description found |

### [](#result)Result

contacts.TopPeers

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
