# upload.GetFile

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
    new Api.upload.GetFile({
      location: new Api.InputFileLocation({
        volumeId: BigInt("-4156887774564"),
        localId: 43,
        secret: BigInt("-4156887774564"),
        fileReference: Buffer.from("arbitrary data here"),
      }),
      offset: 43,
      limit: 100,
      precise: true,
      cdnSupported: true,
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
  const result: Api.upload.File = await client.invoke(
    new Api.upload.GetFile({
      location: new Api.InputFileLocation({
        volumeId: BigInt("-4156887774564"),
        localId: 43,
        secret: BigInt("-4156887774564"),
        fileReference: Buffer.from("arbitrary data here"),
      }),
      offset: 43,
      limit: 100,
      precise: true,
      cdnSupported: true,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|     Name     | Type              | Description          |
| :----------: | ----------------- | -------------------- |
|   precise    | true              | No description found |
| cdnSupported | true              | No description found |
|   location   | InputFileLocation | No description found |
|    offset    | int               | No description found |
|    limit     | int               | No description found |

### [](#result)Result

upload.File

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
