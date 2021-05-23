# photos.UploadProfilePhoto

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
    new Api.photos.UploadProfilePhoto({
      file: client.uploadFile("/path/to/file.jpg"),
      video: client.upload_file("/path/to/file.mp4"),
      videoStartTs: 8.24,
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
  const result: Api.photos.Photo = await client.invoke(
    new Api.photos.UploadProfilePhoto({
      file: client.uploadFile("/path/to/file.jpg"),
      video: client.upload_file("/path/to/file.mp4"),
      videoStartTs: 8.24,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|     Name     | Type      | Description          |
| :----------: | --------- | -------------------- |
|     file     | InputFile | No description found |
|    video     | InputFile | No description found |
| videoStartTs | double    | No description found |

### [](#result)Result

photos.Photo

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
