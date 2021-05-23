# updates.GetChannelDifference

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
    new Api.updates.GetChannelDifference({
      channel: "username",
      filter: new Api.ChannelMessagesFilter({
        ranges: [
          new Api.MessageRange({
            minId: 0,
            maxId: 0,
          }),
        ],
        excludeNewMessages: true,
      }),
      pts: 43,
      limit: 100,
      force: true,
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
  const result: Api.updates.ChannelDifference = await client.invoke(
    new Api.updates.GetChannelDifference({
      channel: "username",
      filter: new Api.ChannelMessagesFilter({
        ranges: [
          new Api.MessageRange({
            minId: 0,
            maxId: 0,
          }),
        ],
        excludeNewMessages: true,
      }),
      pts: 43,
      limit: 100,
      force: true,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|  Name   | Type                  | Description          |
| :-----: | --------------------- | -------------------- |
|  force  | true                  | No description found |
| channel | InputChannel          | No description found |
| filter  | ChannelMessagesFilter | No description found |
|   pts   | int                   | No description found |
|  limit  | int                   | No description found |

### [](#result)Result

updates.ChannelDifference

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
