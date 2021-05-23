# messages.GetInlineBotResults

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
    new Api.messages.GetInlineBotResults({
      bot: "username",
      peer: "username",
      query: "some string here",
      offset: "some string here",
      geoPoint: new Api.InputGeoPoint({
        lat: 8.24,
        long: 8.24,
        accuracyRadius: 43,
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
  const result: Api.messages.BotResults = await client.invoke(
    new Api.messages.GetInlineBotResults({
      bot: "username",
      peer: "username",
      query: "some string here",
      offset: "some string here",
      geoPoint: new Api.InputGeoPoint({
        lat: 8.24,
        long: 8.24,
        accuracyRadius: 43,
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|   Name   | Type          | Description          |
| :------: | ------------- | -------------------- |
|   bot    | InputUser     | No description found |
|   peer   | InputPeer     | No description found |
| geoPoint | InputGeoPoint | No description found |
|  query   | string        | No description found |
|  offset  | string        | No description found |

### [](#result)Result

messages.BotResults

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
