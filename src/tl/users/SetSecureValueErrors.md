# users.SetSecureValueErrors

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
    new Api.users.SetSecureValueErrors({
      id: "username",
      errors: [
        new Api.SecureValueErrorData({
          type: new Api.SecureValueTypePersonalDetails({}),
          dataHash: Buffer.from("arbitrary data here"),
          field: "some string here",
          text: "some string here",
        }),
      ],
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
    new Api.users.SetSecureValueErrors({
      id: "username",
      errors: [
        new Api.SecureValueErrorData({
          type: new Api.SecureValueTypePersonalDetails({}),
          dataHash: Buffer.from("arbitrary data here"),
          field: "some string here",
          text: "some string here",
        }),
      ],
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|  Name  | Type             | Description          |
| :----: | ---------------- | -------------------- |
|   id   | InputUser        | No description found |
| errors | SecureValueError | No description found |

### [](#result)Result

Bool

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
