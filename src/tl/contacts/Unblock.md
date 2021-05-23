# contacts.Unblock

Deletes the user from the blacklist.

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
    new Api.contacts.Unblock({
      id: "username",
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
  const result: Api.Bool = await client.invoke(
    new Api.contacts.Unblock({
      id: "username",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|  Name  | Type | Description                                           |
| :----: | ---- | ----------------------------------------------------- | --- | ------- | --- |
| **id** |      | [InputPeer](https://core.telegram.org/type/InputPeer) |     | User ID |     |

### [](#result)Result

[Bool](https://core.telegram.org/type/Bool)

### [](#possible-errors)Possible errors

| Code | Type | Description        |
| :--: | ---- | ------------------ | --- | ---------------------------------- | --- |
| 400  |      | CONTACT_ID_INVALID |     | The provided contact ID is invalid |     |

### [](#can-bots-use-this-method)Can bots use this methd ?

####Yes

### [](#related-pages)Related pages
