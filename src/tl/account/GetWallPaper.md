# account.GetWallPaper

Get info about a certain wallpaper

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result = await client.invoke(
    new Api.account.GetWallPaper({
      wallpaper: new Api.InputWallPaper({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
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

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result: Api.WallPaper = await client.invoke(
    new Api.account.GetWallPaper({
      wallpaper: new Api.InputWallPaper({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name      | Type                                                            | Description                     |
| :-----------: | --------------------------------------------------------------- | ------------------------------- |
| **wallpaper** | [InputWallPaper](https://core.telegram.org/type/InputWallPaper) | The wallpaper to get info about |

## Result

[WallPaper](https://core.telegram.org/type/WallPaper)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages
