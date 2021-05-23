# account.RegisterDevice

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
    new Api.account.RegisterDevice({
      tokenType: 43,
      token: "some string here",
      appSandbox: false,
      secret: Buffer.from("arbitrary data here"),
      otherUids: [43],
      noMuted: true,
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
    new Api.account.RegisterDevice({
      tokenType: 43,
      token: "some string here",
      appSandbox: false,
      secret: Buffer.from("arbitrary data here"),
      otherUids: [43],
      noMuted: true,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|    Name    | Type   | Description          |
| :--------: | ------ | -------------------- |
|  noMuted   | true   | No description found |
| tokenType  | int    | No description found |
|   token    | string | No description found |
| appSandbox | Bool   | No description found |
|   secret   | bytes  | No description found |
| otherUids  | int    | No description found |

### [](#result)Result

Bool

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
