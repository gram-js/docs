# phone.ConfirmCall

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
    new Api.phone.ConfirmCall({
      peer: new Api.InputPhoneCall({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
      gA: Buffer.from("arbitrary data here"),
      keyFingerprint: BigInt("-4156887774564"),
      protocol: new Api.PhoneCallProtocol({
        minLayer: 43,
        maxLayer: 43,
        libraryVersions: ["some string here"],
        udpP2p: true,
        udpReflector: true,
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
  const result: Api.phone.PhoneCall = await client.invoke(
    new Api.phone.ConfirmCall({
      peer: new Api.InputPhoneCall({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
      gA: Buffer.from("arbitrary data here"),
      keyFingerprint: BigInt("-4156887774564"),
      protocol: new Api.PhoneCallProtocol({
        minLayer: 43,
        maxLayer: 43,
        libraryVersions: ["some string here"],
        udpP2p: true,
        udpReflector: true,
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|      Name      | Type              | Description          |
| :------------: | ----------------- | -------------------- |
|      peer      | InputPhoneCall    | No description found |
|       gA       | bytes             | No description found |
| keyFingerprint | long              | No description found |
|    protocol    | PhoneCallProtocol | No description found |

### [](#result)Result

phone.PhoneCall

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
