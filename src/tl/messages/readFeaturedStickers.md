# messages.readFeaturedStickers

Mark new featured stickers as read

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
        new Api.messages.readFeaturedStickers({
            id: [2301700],
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
    const result: Api.Bool = await client.invoke(
        new Api.messages.readFeaturedStickers({
            id: [2301700],
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.readFeaturedStickers#5b118126 id:Vector<long> = Bool;
```

## Parameters

|  Name  | Type                                                                                                | Description                        |
| :----: | --------------------------------------------------------------------------------------------------- | ---------------------------------- |
| **id** | [Vector](https://core.telegram.org/type/Vector%20t) < [long](https://core.telegram.org/type/long) > | IDs of stickersets to mark as read |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
