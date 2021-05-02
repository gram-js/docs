# messages.getArchivedStickers

Get all archived stickers

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(
        new Api.messages.getArchivedStickers({
            masks: true,
            offsetId: 4843149,
            limit: 9225670,
        }),
    );
    console.log(result); // prints the result
})();
```

:::

:::tab{title="TypeScript"}

```ts
import { Api, TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.messages.ArchivedStickers = await client.invoke(
        new Api.messages.getArchivedStickers({
            masks: true,
            offsetId: 4843149,
            limit: 9225670,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
messages.archivedStickers#4fcba9c8 count:int sets:Vector<StickerSetCovered> = messages.ArchivedStickers;
---functions---
messages.getArchivedStickers#57f17692 flags:# masks:flags.0?true offset_id:long limit:int = messages.ArchivedStickers;
```

## Parameters

|     Name      | Type                                                                                                                              | Description                                                                                             |
| :-----------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|   **flags**   | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|   **masks**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Get mask stickers                                                                                       |
| **offset_id** | [long](https://core.telegram.org/type/long)                                                                                       | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets)               |
|   **limit**   | [int](https://core.telegram.org/type/int)                                                                                         | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets)            |

## Result

[messages.ArchivedStickers](https://core.telegram.org/type/messages.ArchivedStickers)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.