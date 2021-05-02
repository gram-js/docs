# messages.getFeaturedStickers

Get featured stickers

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
        new Api.messages.getFeaturedStickers({
            hash: 5896214,
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
    const result: Api.messages.FeaturedStickers = await client.invoke(
        new Api.messages.getFeaturedStickers({
            hash: 5896214,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
messages.featuredStickersNotModified#c6dc0c66 count:int = messages.FeaturedStickers;
messages.featuredStickers#b6abc341 hash:int count:int sets:Vector<StickerSetCovered> unread:Vector<long> = messages.FeaturedStickers;
---functions---
messages.getFeaturedStickers#2dacca4f hash:int = messages.FeaturedStickers;
```

## Parameters

|   Name   | Type                                      | Description                                                                                            |
| :------: | ----------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **hash** | [int](https://core.telegram.org/type/int) | [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |

## Result

[messages.FeaturedStickers](https://core.telegram.org/type/messages.FeaturedStickers)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
