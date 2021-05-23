# account.SaveWallPaper

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
    new Api.account.SaveWallPaper({
      wallpaper: new Api.InputWallPaper({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
      unsave: false,
      settings: new Api.WallPaperSettings({
        blur: true,
        motion: true,
        backgroundColor: 43,
        secondBackgroundColor: 43,
        intensity: 43,
        rotation: 43,
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
  const result: Api.Bool = await client.invoke(
    new Api.account.SaveWallPaper({
      wallpaper: new Api.InputWallPaper({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
      unsave: false,
      settings: new Api.WallPaperSettings({
        blur: true,
        motion: true,
        backgroundColor: 43,
        secondBackgroundColor: 43,
        intensity: 43,
        rotation: 43,
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|   Name    | Type              | Description          |
| :-------: | ----------------- | -------------------- |
| wallpaper | InputWallPaper    | No description found |
|  unsave   | Bool              | No description found |
| settings  | WallPaperSettings | No description found |

### [](#result)Result

Bool

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
