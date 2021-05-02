# messages.getFavedStickers

Get faved stickers

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
        new Api.messages.getFavedStickers({
            hash: 9781090,
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
    const result: Api.messages.FavedStickers = await client.invoke(
        new Api.messages.getFavedStickers({
            hash: 9781090,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
messages.favedStickersNotModified#9e8fa6d3 = messages.FavedStickers;
messages.favedStickers#f37f2f16 hash:int packs:Vector<StickerPack> stickers:Vector<Document> = messages.FavedStickers;
---functions---
messages.getFavedStickers#21ce0b0e hash:int = messages.FavedStickers;
```

## Parameters

|   Name   | Type                                      | Description                                                                                            |
| :------: | ----------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **hash** | [int](https://core.telegram.org/type/int) | [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |

## Result

[messages.FavedStickers](https://core.telegram.org/type/messages.FavedStickers)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
