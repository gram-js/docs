# channels.SetStickers

Associate a stickerset to the supergroup

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
    new Api.channels.SetStickers({
      channel: "username",
      stickerset: new Api.InputStickerSetID({
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

  const result: Api.Bool = await client.invoke(
    new Api.channels.SetStickers({
      channel: "username",
      stickerset: new Api.InputStickerSetID({
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

|      Name      | Type                                                              | Description                 |
| :------------: | ----------------------------------------------------------------- | --------------------------- |
|  **channel**   | [InputChannel](https://core.telegram.org/type/InputChannel)       | Supergroup                  |
| **stickerset** | [InputStickerSet](https://core.telegram.org/type/InputStickerSet) | The stickerset to associate |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type                       | Description                                                                                  |
| :--: | -------------------------- | -------------------------------------------------------------------------------------------- |
| 400  | CHANNEL_INVALID            | The provided channel is invalid.                                                             |
| 400  | PARTICIPANTS_TOO_FEW       | Not enough participants.                                                                     |
| 406  | STICKERSET_OWNER_ANONYMOUS | Provided stickerset can't be installed as group stickerset to prevent admin deanonymization. |

## Can bots use this method?

Yes

## Related pages
