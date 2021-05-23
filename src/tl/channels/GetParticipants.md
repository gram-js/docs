# channels.GetParticipants

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
    new Api.channels.GetParticipants({
      channel: "username",
      filter: new Api.ChannelParticipantsRecent({}),
      offset: 43,
      limit: 100,
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
  const result: Api.channels.ChannelParticipants = await client.invoke(
    new Api.channels.GetParticipants({
      channel: "username",
      filter: new Api.ChannelParticipantsRecent({}),
      offset: 43,
      limit: 100,
      hash: 0,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|  Name   | Type                      | Description          |
| :-----: | ------------------------- | -------------------- |
| channel | InputChannel              | No description found |
| filter  | ChannelParticipantsFilter | No description found |
| offset  | int                       | No description found |
|  limit  | int                       | No description found |
|  hash   | int                       | No description found |

### [](#result)Result

channels.ChannelParticipants

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
