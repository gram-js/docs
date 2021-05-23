# account.GetAuthorizationForm

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
    new Api.account.GetAuthorizationForm({
      botId: 43,
      scope: "some string here",
      publicKey: "some string here",
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
  const result: Api.account.AuthorizationForm = await client.invoke(
    new Api.account.GetAuthorizationForm({
      botId: 43,
      scope: "some string here",
      publicKey: "some string here",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|   Name    | Type   | Description          |
| :-------: | ------ | -------------------- |
|   botId   | int    | No description found |
|   scope   | string | No description found |
| publicKey | string | No description found |

### [](#result)Result

account.AuthorizationForm

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
