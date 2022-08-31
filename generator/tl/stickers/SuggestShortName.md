# stickers.SuggestShortName

Suggests a short name for a given stickerpack name

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
    new Api.stickers.SuggestShortName({
      title: "My very normal title",
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

  const result: Api.stickers.SuggestedShortName = await client.invoke(
    new Api.stickers.SuggestShortName({
      title: "My very normal title",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|   Name    | Type                                            | Description       |
| :-------: | ----------------------------------------------- | ----------------- |
| **title** | [string](https://core.telegram.org/type/string) | Sticker pack name |

## Result

[stickers.SuggestedShortName](https://core.telegram.org/type/stickers.SuggestedShortName)

## Possible errors

| Code | Type          | Description                                 |
| :--: | ------------- | ------------------------------------------- |
| 400  | TITLE_INVALID | The specified stickerpack title is invalid. |

## Can bots use this method?

No

## Related pages
