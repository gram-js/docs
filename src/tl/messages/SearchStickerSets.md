# messages.SearchStickerSets

Search for stickersets

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
    new Api.messages.SearchStickerSets({
      q: "some string here",
      hash: 0,
      excludeFeatured: true,
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
  const result: Api.messages.FoundStickerSets = await client.invoke(
    new Api.messages.SearchStickerSets({
      q: "some string here",
      hash: 0,
      excludeFeatured: true,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|        Name         | Type                                                                                                                              | Description                                                                                             |
| :-----------------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|      **flags**      | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| **excludeFeatured** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Exclude featured stickersets from results                                                               |
|        **q**        | [string](https://core.telegram.org/type/string)                                                                                   | Query string                                                                                            |
|      **hash**       | [int](https://core.telegram.org/type/int)                                                                                         | [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation)  |

## Result

[messages.FoundStickerSets](https://core.telegram.org/type/messages.FoundStickerSets)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
