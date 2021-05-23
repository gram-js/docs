# account.UploadTheme

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
    new Api.account.UploadTheme({
      file: client.uploadFile("/path/to/file.jpg"),
      fileName: "some string here",
      mimeType: "some string here",
      thumb: client.uploadFile("/path/to/file.jpg"),
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
  const result: Api.Document = await client.invoke(
    new Api.account.UploadTheme({
      file: client.uploadFile("/path/to/file.jpg"),
      fileName: "some string here",
      mimeType: "some string here",
      thumb: client.uploadFile("/path/to/file.jpg"),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|   Name   | Type      | Description          |
| :------: | --------- | -------------------- |
|   file   | InputFile | No description found |
|  thumb   | InputFile | No description found |
| fileName | string    | No description found |
| mimeType | string    | No description found |

### [](#result)Result

Document

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
