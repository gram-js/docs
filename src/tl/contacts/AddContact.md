# contacts.AddContact

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
    new Api.contacts.AddContact({
      id: "username",
      firstName: "some string here",
      lastName: "some string here",
      phone: "some string here",
      addPhonePrivacyException: true,
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
    new Api.contacts.AddContact({
      id: "username",
      firstName: "some string here",
      lastName: "some string here",
      phone: "some string here",
      addPhonePrivacyException: true,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|           Name           | Type      | Description          |
| :----------------------: | --------- | -------------------- |
| addPhonePrivacyException | true      | No description found |
|            id            | InputUser | No description found |
|        firstName         | string    | No description found |
|         lastName         | string    | No description found |
|          phone           | string    | No description found |

### [](#result)Result

Updates

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
