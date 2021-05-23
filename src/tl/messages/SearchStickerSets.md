# messages.SearchStickerSets

No description found

### [](#example)Example

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

### [](#parameters)Parameters

|      Name       | Type   | Description          |
| :-------------: | ------ | -------------------- |
| excludeFeatured | true   | No description found |
|        q        | string | No description found |
|      hash       | int    | No description found |

### [](#result)Result

messages.FoundStickerSets

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
