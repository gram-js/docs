# account.InitTakeoutSession

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
    new Api.account.InitTakeoutSession({
      contacts: true,
      messageUsers: true,
      messageChats: true,
      messageMegagroups: true,
      messageChannels: true,
      files: true,
      fileMaxSize: 43,
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
  const result: Api.account.Takeout = await client.invoke(
    new Api.account.InitTakeoutSession({
      contacts: true,
      messageUsers: true,
      messageChats: true,
      messageMegagroups: true,
      messageChannels: true,
      files: true,
      fileMaxSize: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|       Name        | Type | Description          |
| :---------------: | ---- | -------------------- |
|     contacts      | true | No description found |
|   messageUsers    | true | No description found |
|   messageChats    | true | No description found |
| messageMegagroups | true | No description found |
|  messageChannels  | true | No description found |
|       files       | true | No description found |
|    fileMaxSize    | int  | No description found |

### [](#result)Result

account.Takeout

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
