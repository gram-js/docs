# messages.SendMultiMedia

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
    new Api.messages.SendMultiMedia({
      peer: "username",
      multiMedia: [
        new Api.InputSingleMedia({
          media: new Api.InputMediaUploadedPhoto({
            file: client.uploadFile("/path/to/file.jpg"),
            stickers: [
              new Api.InputDocument({
                id: BigInt("-4156887774564"),
                accessHash: BigInt("-4156887774564"),
                fileReference: Buffer.from("arbitrary data here"),
              }),
            ],
            ttlSeconds: 43,
          }),
          randomId: BigInt("-4156887774564"),
          message: "Hello there!",
        }),
      ],
      scheduleDate: 43,
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
  const result: Api.Updates = await client.invoke(
    new Api.messages.SendMultiMedia({
      peer: "username",
      multiMedia: [
        new Api.InputSingleMedia({
          media: new Api.InputMediaUploadedPhoto({
            file: client.uploadFile("/path/to/file.jpg"),
            stickers: [
              new Api.InputDocument({
                id: BigInt("-4156887774564"),
                accessHash: BigInt("-4156887774564"),
                fileReference: Buffer.from("arbitrary data here"),
              }),
            ],
            ttlSeconds: 43,
          }),
          randomId: BigInt("-4156887774564"),
          message: "Hello there!",
        }),
      ],
      scheduleDate: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|     Name     | Type             | Description          |
| :----------: | ---------------- | -------------------- |
|    silent    | true             | No description found |
|  background  | true             | No description found |
|  clearDraft  | true             | No description found |
|     peer     | InputPeer        | No description found |
| replyToMsgId | int              | No description found |
|  multiMedia  | InputSingleMedia | No description found |
| scheduleDate | int              | No description found |

### [](#result)Result

Updates

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
