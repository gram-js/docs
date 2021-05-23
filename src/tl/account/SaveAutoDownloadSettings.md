# account.SaveAutoDownloadSettings

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
    new Api.account.SaveAutoDownloadSettings({
      settings: new Api.AutoDownloadSettings({
        photoSizeMax: 43,
        videoSizeMax: 43,
        fileSizeMax: 43,
        videoUploadMaxbitrate: 43,
        disabled: true,
        videoPreloadLarge: true,
        audioPreloadNext: true,
        phonecallsLessData: true,
      }),
      low: true,
      high: true,
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
    new Api.account.SaveAutoDownloadSettings({
      settings: new Api.AutoDownloadSettings({
        photoSizeMax: 43,
        videoSizeMax: 43,
        fileSizeMax: 43,
        videoUploadMaxbitrate: 43,
        disabled: true,
        videoPreloadLarge: true,
        audioPreloadNext: true,
        phonecallsLessData: true,
      }),
      low: true,
      high: true,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|   Name   | Type                 | Description          |
| :------: | -------------------- | -------------------- |
|   low    | true                 | No description found |
|   high   | true                 | No description found |
| settings | AutoDownloadSettings | No description found |

### [](#result)Result

Bool

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
