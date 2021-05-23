# phone.RequestCall

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
    new Api.phone.RequestCall({
      userId: "username",
      randomId: 43,
      gAHash: Buffer.from("arbitrary data here"),
      protocol: new Api.PhoneCallProtocol({
        minLayer: 43,
        maxLayer: 43,
        libraryVersions: ["some string here"],
        udpP2p: true,
        udpReflector: true,
      }),
      video: true,
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
    new Api.phone.RequestCall({
      userId: "username",
      randomId: 43,
      gAHash: Buffer.from("arbitrary data here"),
      protocol: new Api.PhoneCallProtocol({
        minLayer: 43,
        maxLayer: 43,
        libraryVersions: ["some string here"],
        udpP2p: true,
        udpReflector: true,
      }),
      video: true,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|   Name   | Type              | Description          |
| :------: | ----------------- | -------------------- |
|  video   | true              | No description found |
|  userId  | InputUser         | No description found |
| randomId | int               | No description found |
|  gAHash  | bytes             | No description found |
| protocol | PhoneCallProtocol | No description found |

### [](#result)Result

phone.PhoneCall

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
