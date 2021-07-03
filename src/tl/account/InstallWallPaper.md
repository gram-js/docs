# account.InstallWallPaper

Install wallpaper

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
    new Api.account.InstallWallPaper({
      wallpaper: new Api.InputWallPaper({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
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
    new Api.account.InstallWallPaper({
      wallpaper: new Api.InputWallPaper({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
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

## Parameters

|     Name      | Type                                                                  | Description          |
| :-----------: | --------------------------------------------------------------------- | -------------------- |
| **wallpaper** | [InputWallPaper](https://core.telegram.org/type/InputWallPaper)       | Wallpaper to install |
| **settings**  | [WallPaperSettings](https://core.telegram.org/type/WallPaperSettings) | Wallpaper settings   |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages
