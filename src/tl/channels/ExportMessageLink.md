# channels.ExportMessageLink

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
    new Api.channels.ExportMessageLink({
      channel: "username",
      id: 43,
      thread: true,
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
  const result: Api.ExportedMessageLink = await client.invoke(
    new Api.channels.ExportMessageLink({
      channel: "username",
      id: 43,
      thread: true,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|  Name   | Type         | Description          |
| :-----: | ------------ | -------------------- |
| grouped | true         | No description found |
| thread  | true         | No description found |
| channel | InputChannel | No description found |
|   id    | int          | No description found |

### [](#result)Result

ExportedMessageLink

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
