# upload.GetCdnFile

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
    new Api.upload.GetCdnFile({
      fileToken: Buffer.from("arbitrary data here"),
      offset: 43,
      limit: 100,
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
  const result: Api.upload.CdnFile = await client.invoke(
    new Api.upload.GetCdnFile({
      fileToken: Buffer.from("arbitrary data here"),
      offset: 43,
      limit: 100,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|   Name    | Type  | Description          |
| :-------: | ----- | -------------------- |
| fileToken | bytes | No description found |
|  offset   | int   | No description found |
|   limit   | int   | No description found |

### [](#result)Result

upload.CdnFile

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
