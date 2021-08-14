# stats.LoadAsyncGraph

Load [channel statistics graph](https://core.telegram.org/api/stats) asynchronously

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
    new Api.stats.LoadAsyncGraph({
      token: "some string here",
      x: BigInt("-4156887774564"),
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

  const result: Api.StatsGraph = await client.invoke(
    new Api.stats.LoadAsyncGraph({
      token: "some string here",
      x: BigInt("-4156887774564"),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|   Name    | Type                                                                                                                       | Description                                                                                             |
| :-------: | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **flags** | [#](https://core.telegram.org/type/%23)                                                                                    | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| **token** | [string](https://core.telegram.org/type/string)                                                                            | Graph token from [statsGraphAsync](https://core.telegram.org/constructor/statsGraphAsync) constructor   |
|   **x**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](https://core.telegram.org/type/long) | Zoom value, if required                                                                                 |

## Result

[StatsGraph](https://core.telegram.org/type/StatsGraph)

## Possible errors

| Code | Type                  | Description                                                                         |
| :--: | --------------------- | ----------------------------------------------------------------------------------- |
| 400  | GRAPH_INVALID_RELOAD  | Invalid graph token provided, please reload the stats and provide the updated token |
| 400  | GRAPH_OUTDATED_RELOAD | The graph is outdated, please get a new async token using stats.getBroadcastStats   |

## Can bots use this method?

No

## Related pages

#### [statsGraphAsync](https://core.telegram.org/constructor/statsGraphAsync)

This [channel statistics graph](https://core.telegram.org/api/stats) must be generated asynchronously using [stats.loadAsyncGraph](https://core.telegram.org/method/stats.loadAsyncGraph) to reduce server load

#### [Channel statistics](https://core.telegram.org/api/stats)

Telegram offers detailed channel statistics for channels and supergroups.
