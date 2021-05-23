# account.AcceptAuthorization

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
    new Api.account.AcceptAuthorization({
      botId: 43,
      scope: "some string here",
      publicKey: "some string here",
      valueHashes: [
        new Api.SecureValueHash({
          type: new Api.SecureValueTypePersonalDetails({}),
          hash: Buffer.from("arbitrary data here"),
        }),
      ],
      credentials: new Api.SecureCredentialsEncrypted({
        data: Buffer.from("arbitrary data here"),
        hash: Buffer.from("arbitrary data here"),
        secret: Buffer.from("arbitrary data here"),
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
    new Api.account.AcceptAuthorization({
      botId: 43,
      scope: "some string here",
      publicKey: "some string here",
      valueHashes: [
        new Api.SecureValueHash({
          type: new Api.SecureValueTypePersonalDetails({}),
          hash: Buffer.from("arbitrary data here"),
        }),
      ],
      credentials: new Api.SecureCredentialsEncrypted({
        data: Buffer.from("arbitrary data here"),
        hash: Buffer.from("arbitrary data here"),
        secret: Buffer.from("arbitrary data here"),
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|    Name     | Type                       | Description          |
| :---------: | -------------------------- | -------------------- |
|    botId    | int                        | No description found |
|    scope    | string                     | No description found |
|  publicKey  | string                     | No description found |
| valueHashes | SecureValueHash            | No description found |
| credentials | SecureCredentialsEncrypted | No description found |

### [](#result)Result

Bool

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
