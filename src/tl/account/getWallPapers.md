# account.getWallPapers

Returns a list of available wallpapers.

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
        new Api.account.getWallPapers({
            hash: 9629742,
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
    const result: Api.Vector<WallPaper> = await client.invoke(
        new Api.account.getWallPapers({
            hash: 9629742,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
account.wallPapersNotModified#1c199183 = account.WallPapers;
account.wallPapers#702b65a9 hash:int wallpapers:Vector<WallPaper> = account.WallPapers;
---functions---
account.getWallPapers#aabb1763 hash:int = account.WallPapers;
```

## Parameters

|   Name   | Type                                      | Description                                                                                            |
| :------: | ----------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **hash** | [int](https://core.telegram.org/type/int) | [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |

## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[WallPaper](https://core.telegram.org/type/WallPaper)>

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
