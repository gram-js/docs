# messages.getStickers

Get stickers by emoji

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
        new Api.messages.getStickers({
            emoticon: 'random string here',
            hash: 6740859,
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
    const result: Api.messages.Stickers = await client.invoke(
        new Api.messages.getStickers({
            emoticon: 'random string here',
            hash: 6740859,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
messages.stickersNotModified#f1749a22 = messages.Stickers;
messages.stickers#e4599bbd hash:int stickers:Vector<Document> = messages.Stickers;
---functions---
messages.getStickers#43d4f2c emoticon:string hash:int = messages.Stickers;
```

## Parameters

|     Name     | Type                                            | Description                                                                                            |
| :----------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **emoticon** | [string](https://core.telegram.org/type/string) | The emoji                                                                                              |
|   **hash**   | [int](https://core.telegram.org/type/int)       | [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |

## Result

[messages.Stickers](https://core.telegram.org/type/messages.Stickers)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
