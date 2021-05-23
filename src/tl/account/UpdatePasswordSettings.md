# account.UpdatePasswordSettings

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
    new Api.account.UpdatePasswordSettings({
      password: new Api.InputCheckPasswordSRP({
        srpId: BigInt("-4156887774564"),
        a: Buffer.from("arbitrary data here"),
        m1: Buffer.from("arbitrary data here"),
      }),
      newSettings: new Api.account.PasswordInputSettings({
        newAlgo: new Api.PasswordKdfAlgoUnknown({}),
        newPasswordHash: Buffer.from("arbitrary data here"),
        hint: "some string here",
        email: "some string here",
        newSecureSettings: new Api.SecureSecretSettings({
          secureAlgo: new Api.SecurePasswordKdfAlgoUnknown({}),
          secureSecret: Buffer.from("arbitrary data here"),
          secureSecretId: BigInt("-4156887774564"),
        }),
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
  const result: Api.Bool = await client.invoke(
    new Api.account.UpdatePasswordSettings({
      password: new Api.InputCheckPasswordSRP({
        srpId: BigInt("-4156887774564"),
        a: Buffer.from("arbitrary data here"),
        m1: Buffer.from("arbitrary data here"),
      }),
      newSettings: new Api.account.PasswordInputSettings({
        newAlgo: new Api.PasswordKdfAlgoUnknown({}),
        newPasswordHash: Buffer.from("arbitrary data here"),
        hint: "some string here",
        email: "some string here",
        newSecureSettings: new Api.SecureSecretSettings({
          secureAlgo: new Api.SecurePasswordKdfAlgoUnknown({}),
          secureSecret: Buffer.from("arbitrary data here"),
          secureSecretId: BigInt("-4156887774564"),
        }),
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|    Name     | Type                          | Description          |
| :---------: | ----------------------------- | -------------------- |
|  password   | InputCheckPasswordSRP         | No description found |
| newSettings | account.PasswordInputSettings | No description found |

### [](#result)Result

Bool

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
