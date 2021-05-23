# messages.UploadEncryptedFile

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
    new Api.messages.UploadEncryptedFile({
      peer: new Api.InputEncryptedChat({
        chatId: 43,
        accessHash: BigInt("-4156887774564"),
      }),
      file: new Api.InputEncryptedFileUploaded({
        id: BigInt("-4156887774564"),
        parts: 43,
        md5Checksum: "some string here",
        keyFingerprint: 43,
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
  const result: Api.EncryptedFile = await client.invoke(
    new Api.messages.UploadEncryptedFile({
      peer: new Api.InputEncryptedChat({
        chatId: 43,
        accessHash: BigInt("-4156887774564"),
      }),
      file: new Api.InputEncryptedFileUploaded({
        id: BigInt("-4156887774564"),
        parts: 43,
        md5Checksum: "some string here",
        keyFingerprint: 43,
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

| Name | Type               | Description          |
| :--: | ------------------ | -------------------- |
| peer | InputEncryptedChat | No description found |
| file | InputEncryptedFile | No description found |

### [](#result)Result

EncryptedFile

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
