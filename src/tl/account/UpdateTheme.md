# account.UpdateTheme

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
    new Api.account.UpdateTheme({
      format: "some string here",
      theme: new Api.InputTheme({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
      slug: "some string here",
      title: "My very normal title",
      document: new Api.InputDocument({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
        fileReference: Buffer.from("arbitrary data here"),
      }),
      settings: new Api.InputThemeSettings({
        baseTheme: new Api.BaseThemeClassic({}),
        accentColor: 43,
        messageTopColor: 43,
        messageBottomColor: 43,
        wallpaper: new Api.InputWallPaper({
          id: BigInt("-4156887774564"),
          accessHash: BigInt("-4156887774564"),
        }),
        wallpaperSettings: new Api.WallPaperSettings({
          blur: true,
          motion: true,
          backgroundColor: 43,
          secondBackgroundColor: 43,
          intensity: 43,
          rotation: 43,
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
  const result: Api.Theme = await client.invoke(
    new Api.account.UpdateTheme({
      format: "some string here",
      theme: new Api.InputTheme({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
      slug: "some string here",
      title: "My very normal title",
      document: new Api.InputDocument({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
        fileReference: Buffer.from("arbitrary data here"),
      }),
      settings: new Api.InputThemeSettings({
        baseTheme: new Api.BaseThemeClassic({}),
        accentColor: 43,
        messageTopColor: 43,
        messageBottomColor: 43,
        wallpaper: new Api.InputWallPaper({
          id: BigInt("-4156887774564"),
          accessHash: BigInt("-4156887774564"),
        }),
        wallpaperSettings: new Api.WallPaperSettings({
          blur: true,
          motion: true,
          backgroundColor: 43,
          secondBackgroundColor: 43,
          intensity: 43,
          rotation: 43,
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

|   Name   | Type               | Description          |
| :------: | ------------------ | -------------------- |
|  format  | string             | No description found |
|  theme   | InputTheme         | No description found |
|   slug   | string             | No description found |
|  title   | string             | No description found |
| document | InputDocument      | No description found |
| settings | InputThemeSettings | No description found |

### [](#result)Result

Theme

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
