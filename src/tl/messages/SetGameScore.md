# messages.SetGameScore

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
    new Api.messages.SetGameScore({
      peer: "username",
      id: 43,
      userId: "username",
      score: 43,
      editMessage: true,
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
  const result: Api.Updates = await client.invoke(
    new Api.messages.SetGameScore({
      peer: "username",
      id: 43,
      userId: "username",
      score: 43,
      editMessage: true,
      force: true,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|    Name     | Type      | Description          |
| :---------: | --------- | -------------------- |
| editMessage | true      | No description found |
|    force    | true      | No description found |
|    peer     | InputPeer | No description found |
|     id      | int       | No description found |
|   userId    | InputUser | No description found |
|    score    | int       | No description found |

### [](#result)Result

Updates

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
