# stickers.CreateStickerSet

Create a stickerset, bots only.

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
    new Api.stickers.CreateStickerSet({
      userId: "username",
      title: "My very normal title",
      shortName: "some string here",
      stickers: [
        new Api.InputStickerSetItem({
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
      ],
      masks: true,
      animated: true,
      thumb: new Api.InputDocument({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
        fileReference: Buffer.from("arbitrary data here"),
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
    new Api.stickers.CreateStickerSet({
      userId: "username",
      title: "My very normal title",
      shortName: "some string here",
      stickers: [
        new Api.InputStickerSetItem({
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
      ],
      masks: true,
      animated: true,
      thumb: new Api.InputDocument({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
        fileReference: Buffer.from("arbitrary data here"),
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name      | Type                                                                                                                                         | Description                                                                                                                                |
| :-----------: | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
|   **flags**   | [#](https://core.telegram.org/type/%23)                                                                                                      | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)                                    |
|   **masks**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true)            | Whether this is a mask stickerset                                                                                                          |
| **animated**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true)            | Whether this is an animated stickerset                                                                                                     |
|  **userId**   | [InputUser](https://core.telegram.org/type/InputUser)                                                                                        | Stickerset owner                                                                                                                           |
|   **title**   | [string](https://core.telegram.org/type/string)                                                                                              | Stickerset name, `1-64` chars                                                                                                              |
| **shortName** | [string](https://core.telegram.org/type/string)                                                                                              | Sticker set name. Can contain only English letters, digits and underscores. Must end with *"*by*"* ( is case insensitive); 1-64 characters |
|   **thumb**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InputDocument](https://core.telegram.org/type/InputDocument) | Thumbnail                                                                                                                                  |
| **stickers**  | [Vector](https://core.telegram.org/type/Vector%20t)<[InputStickerSetItem](https://core.telegram.org/type/InputStickerSetItem)>               | Stickers                                                                                                                                   |

## Result

[messages.StickerSet](https://core.telegram.org/type/messages.StickerSet)

## Possible errors

| Code | Type                     | Description                                           |
| :--: | ------------------------ | ----------------------------------------------------- |
| 400  | BOT_MISSING              | This method can only be run by a bot                  |
| 400  | PACK_SHORT_NAME_INVALID  | Short pack name invalid                               |
| 400  | PACK_SHORT_NAME_OCCUPIED | A stickerpack with this name already exists           |
| 400  | PACK_TITLE_INVALID       | The stickerpack title is invalid                      |
| 400  | PEER_ID_INVALID          | The provided peer id is invalid                       |
| 400  | SHORTNAME_OCCUPY_FAILED  | An internal error occurred                            |
| 400  | STICKERS_EMPTY           | No sticker provided                                   |
| 400  | STICKER_EMOJI_INVALID    | Sticker emoji invalid                                 |
| 400  | STICKER_FILE_INVALID     | Sticker file invalid                                  |
| 400  | STICKER_PNG_DIMENSIONS   | Sticker png dimensions invalid                        |
| 400  | STICKER_PNG_NOPNG        | One of the specified stickers is not a valid PNG file |
| 400  | USER_ID_INVALID          | The provided user ID is invalid                       |

## Can bots use this method?

Yes

## Related pages
