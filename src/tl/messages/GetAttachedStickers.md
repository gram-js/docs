# messages.GetAttachedStickers

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
    new Api.messages.GetAttachedStickers({
      media: new Api.InputStickeredMediaPhoto({
        id: new Api.InputPhoto({
          id: BigInt("-4156887774564"),
          accessHash: BigInt("-4156887774564"),
          fileReference: Buffer.from("arbitrary data here"),
        }),
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
  const result: Api.Vector<StickerSetCovered> = await client.invoke(
    new Api.messages.GetAttachedStickers({
      media: new Api.InputStickeredMediaPhoto({
        id: new Api.InputPhoto({
          id: BigInt("-4156887774564"),
          accessHash: BigInt("-4156887774564"),
          fileReference: Buffer.from("arbitrary data here"),
        }),
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

| Name  | Type                | Description          |
| :---: | ------------------- | -------------------- |
| media | InputStickeredMedia | No description found |

### [](#result)Result

Vector

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
