# messages.EditMessage

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
    new Api.messages.EditMessage({
      peer: "username",
      id: 43,
      noWebpage: true,
      message: "Hello there!",
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
    new Api.messages.EditMessage({
      peer: "username",
      id: 43,
      noWebpage: true,
      message: "Hello there!",
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
      scheduleDate: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|     Name     | Type          | Description          |
| :----------: | ------------- | -------------------- |
|  noWebpage   | true          | No description found |
|     peer     | InputPeer     | No description found |
|      id      | int           | No description found |
|   message    | string        | No description found |
|    media     | InputMedia    | No description found |
| replyMarkup  | ReplyMarkup   | No description found |
|   entities   | MessageEntity | No description found |
| scheduleDate | int           | No description found |

### [](#result)Result

Updates

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
