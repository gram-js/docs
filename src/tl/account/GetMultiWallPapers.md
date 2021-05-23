# account.GetMultiWallPapers

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
    new Api.account.GetMultiWallPapers({
      wallpapers: [
        new Api.InputWallPaper({
          id: BigInt("-4156887774564"),
          accessHash: BigInt("-4156887774564"),
        }),
      ],
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
  const result: Api.Vector<WallPaper> = await client.invoke(
    new Api.account.GetMultiWallPapers({
      wallpapers: [
        new Api.InputWallPaper({
          id: BigInt("-4156887774564"),
          accessHash: BigInt("-4156887774564"),
        }),
      ],
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|    Name    | Type           | Description          |
| :--------: | -------------- | -------------------- |
| wallpapers | InputWallPaper | No description found |

### [](#result)Result

Vector

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
