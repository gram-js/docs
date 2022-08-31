# messages.SaveGif

Add GIF to saved gifs list

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
    new Api.messages.SaveGif({
      id: new Api.InputDocument({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
        fileReference: Buffer.from("arbitrary data here"),
      }),
      unsave: false,
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

  const result: Api.Bool = await client.invoke(
    new Api.messages.SaveGif({
      id: new Api.InputDocument({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
        fileReference: Buffer.from("arbitrary data here"),
      }),
      unsave: false,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name    | Type                                                          | Description                                |
| :--------: | ------------------------------------------------------------- | ------------------------------------------ |
|   **id**   | [InputDocument](https://core.telegram.org/type/InputDocument) | GIF to save                                |
| **unsave** | [Bool](https://core.telegram.org/type/Bool)                   | Whether to remove GIF from saved gifs list |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type           | Description                     |
| :--: | -------------- | ------------------------------- |
| 400  | GIF_ID_INVALID | The provided GIF ID is invalid. |

## Can bots use this method?

No

## Related pages
