# channels.GetAdminLog

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
    new Api.channels.GetAdminLog({
      channel: "username",
      q: "some string here",
      maxId: 0,
      minId: 0,
      limit: 100,
      eventsFilter: new Api.ChannelAdminLogEventsFilter({
        join: true,
        leave: true,
        invite: true,
        ban: true,
        unban: true,
        kick: true,
        unkick: true,
        promote: true,
        demote: true,
        info: true,
        settings: true,
        pinned: true,
        groupCall: true,
      }),
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
  const result: Api.channels.AdminLogResults = await client.invoke(
    new Api.channels.GetAdminLog({
      channel: "username",
      q: "some string here",
      maxId: 0,
      minId: 0,
      limit: 100,
      eventsFilter: new Api.ChannelAdminLogEventsFilter({
        join: true,
        leave: true,
        invite: true,
        ban: true,
        unban: true,
        kick: true,
        unkick: true,
        promote: true,
        demote: true,
        info: true,
        settings: true,
        pinned: true,
        groupCall: true,
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|     Name     | Type                        | Description          |
| :----------: | --------------------------- | -------------------- |
|   channel    | InputChannel                | No description found |
|      q       | string                      | No description found |
| eventsFilter | ChannelAdminLogEventsFilter | No description found |
|    admins    | InputUser                   | No description found |
|    maxId     | long                        | No description found |
|    minId     | long                        | No description found |
|    limit     | int                         | No description found |

### [](#result)Result

channels.AdminLogResults

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
