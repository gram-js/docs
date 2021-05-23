# account.UploadWallPaper

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
    new Api.account.UploadWallPaper({
      file: client.uploadFile("/path/to/file.jpg"),
      mimeType: "some string here",
      settings: new Api.WallPaperSettings({
        blur: true,
        motion: true,
        backgroundColor: 43,
        secondBackgroundColor: 43,
        intensity: 43,
        rotation: 43,
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
  const result: Api.WallPaper = await client.invoke(
    new Api.account.UploadWallPaper({
      file: client.uploadFile("/path/to/file.jpg"),
      mimeType: "some string here",
      settings: new Api.WallPaperSettings({
        blur: true,
        motion: true,
        backgroundColor: 43,
        secondBackgroundColor: 43,
        intensity: 43,
        rotation: 43,
      }),
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
|   file   | InputFile         | No description found |
| mimeType | string            | No description found |
| settings | WallPaperSettings | No description found |

### [](#result)Result

WallPaper

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
