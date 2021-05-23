# stickers.AddStickerToSet

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
    new Api.stickers.AddStickerToSet({
      stickerset: new Api.InputStickerSetID({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
      sticker: new Api.InputStickerSetItem({
        document: new Api.InputDocument({
          id: BigInt("-4156887774564"),
          accessHash: BigInt("-4156887774564"),
          fileReference: Buffer.from("arbitrary data here"),
        }),
        emoji: "some string here",
        maskCoords: new Api.MaskCoords({
          n: 43,
          x: 8.24,
          y: 8.24,
          zoom: 8.24,
        }),
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
  const result: Api.messages.StickerSet = await client.invoke(
    new Api.stickers.AddStickerToSet({
      stickerset: new Api.InputStickerSetID({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
      sticker: new Api.InputStickerSetItem({
        document: new Api.InputDocument({
          id: BigInt("-4156887774564"),
          accessHash: BigInt("-4156887774564"),
          fileReference: Buffer.from("arbitrary data here"),
        }),
        emoji: "some string here",
        maskCoords: new Api.MaskCoords({
          n: 43,
          x: 8.24,
          y: 8.24,
          zoom: 8.24,
        }),
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|    Name    | Type                | Description          |
| :--------: | ------------------- | -------------------- |
| stickerset | InputStickerSet     | No description found |
|  sticker   | InputStickerSetItem | No description found |

### [](#result)Result

messages.StickerSet

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
