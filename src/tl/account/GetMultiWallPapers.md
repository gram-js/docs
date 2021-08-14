# account.GetMultiWallPapers

Get info about multiple wallpapers

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

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

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

## Parameters

|      Name      | Type                                                                                                                 | Description                    |
| :------------: | -------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| **wallpapers** | [Vector](https://core.telegram.org/type/Vector%20t)<[InputWallPaper](https://core.telegram.org/type/InputWallPaper)> | Wallpapers to fetch info about |

## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[WallPaper](https://core.telegram.org/type/WallPaper)>

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages
