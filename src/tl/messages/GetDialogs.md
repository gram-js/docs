# messages.GetDialogs

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
    new Api.messages.GetDialogs({
      offsetDate: 43,
      offsetId: 43,
      offsetPeer: "username",
      limit: 100,
      hash: 0,
      excludePinned: true,
      folderId: 43,
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
  const result: Api.messages.Dialogs = await client.invoke(
    new Api.messages.GetDialogs({
      offsetDate: 43,
      offsetId: 43,
      offsetPeer: "username",
      limit: 100,
      hash: 0,
      excludePinned: true,
      folderId: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|     Name      | Type      | Description          |
| :-----------: | --------- | -------------------- |
| excludePinned | true      | No description found |
|   folderId    | int       | No description found |
|  offsetDate   | int       | No description found |
|   offsetId    | int       | No description found |
|  offsetPeer   | InputPeer | No description found |
|     limit     | int       | No description found |
|     hash      | int       | No description found |

### [](#result)Result

messages.Dialogs

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
