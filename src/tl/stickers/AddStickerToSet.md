# stickers.AddStickerToSet

Add a sticker to a stickerset, bots only. The sticker set must have been created by the bot.

## Example

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

## Parameters

|      Name      | Type                                                                      | Description    |
| :------------: | ------------------------------------------------------------------------- | -------------- |
| **stickerset** | [InputStickerSet](https://core.telegram.org/type/InputStickerSet)         | The stickerset |
|  **sticker**   | [InputStickerSetItem](https://core.telegram.org/type/InputStickerSetItem) | The sticker    |

## Result

[messages.StickerSet](https://core.telegram.org/type/messages.StickerSet)

## Possible errors

| Code | Type               | Description                          |
| :--: | ------------------ | ------------------------------------ |
| 400  | BOT_MISSING        | This method can only be run by a bot |
| 400  | STICKERSET_INVALID | The provided sticker set is invalid  |

## Can bots use this method?

Yes

## Related pages
