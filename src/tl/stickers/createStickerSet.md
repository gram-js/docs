# stickers.createStickerSet

Create a stickerset, bots only.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.stickers.createStickerSet({
		masks: true,
		animated: true,
		userId: new Api.InputUser({...}),
		title: 'random string here',
		shortName: 'random string here',
		thumb: new Api.InputDocument({...}),
		stickers: [new Api.InputStickerSetItem({...})],
		}));
    console.log(result); // prints the result
})();

```

:::

:::tab{title="TypeScript"}

```ts
import {Api, TelegramClient} from 'telegram';
import {StringSession} from 'telegram/sessions';

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.messages.StickerSet = await client.invoke(new Api.stickers.createStickerSet({
		masks: true,
		animated: true,
		userId: new Api.InputUser({...}),
		title: 'random string here',
		shortName: 'random string here',
		thumb: new Api.InputDocument({...}),
		stickers: [new Api.InputStickerSetItem({...})],
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
messages.stickerSet#b60a24a6 set:StickerSet packs:Vector<StickerPack> documents:Vector<Document> = messages.StickerSet;
---functions---
stickers.createStickerSet#f1036780 flags:# masks:flags.0?true animated:flags.1?true user_id:InputUser title:string short_name:string thumb:flags.2?InputDocument stickers:Vector<InputStickerSetItem> = messages.StickerSet;
```

## Parameters

|      Name      | Type                                                                                                                                         | Description                                                                                                                                |
| :------------: | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
|   **flags**    | [#](https://core.telegram.org/type/%23)                                                                                                      | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)                                    |
|   **masks**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true)            | Whether this is a mask stickerset                                                                                                          |
|  **animated**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true)            | Whether this is an animated stickerset                                                                                                     |
|  **user_id**   | [InputUser](https://core.telegram.org/type/InputUser)                                                                                        | Stickerset owner                                                                                                                           |
|   **title**    | [string](https://core.telegram.org/type/string)                                                                                              | Stickerset name, 1-64 chars                                                                                                                |
| **short_name** | [string](https://core.telegram.org/type/string)                                                                                              | Sticker set name. Can contain only English letters, digits and underscores. Must end with *"*by*"* ( is case insensitive); 1-64 characters |
|   **thumb**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InputDocument](https://core.telegram.org/type/InputDocument) | Thumbnail                                                                                                                                  |
|  **stickers**  | [Vector](https://core.telegram.org/type/Vector%20t) < [InputStickerSetItem](https://core.telegram.org/type/InputStickerSetItem) >            | Stickers                                                                                                                                   |

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
