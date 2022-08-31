# bots.AnswerWebhookJSONQuery

Answers a custom query; for bots only

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
    new Api.bots.AnswerWebhookJSONQuery({
      queryId: BigInt("-4156887774564"),
      data: new Api.DataJSON({
        data: "some string here",
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
    new Api.bots.AnswerWebhookJSONQuery({
      queryId: BigInt("-4156887774564"),
      data: new Api.DataJSON({
        data: "some string here",
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name     | Type                                                | Description                         |
| :---------: | --------------------------------------------------- | ----------------------------------- |
| **queryId** | [long](https://core.telegram.org/type/long)         | Identifier of a custom query        |
|  **data**   | [DataJSON](https://core.telegram.org/type/DataJSON) | JSON-serialized answer to the query |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type             | Description                              |
| :--: | ---------------- | ---------------------------------------- |
| 400  | QUERY_ID_INVALID | The query ID is invalid.                 |
| 403  | USER_BOT_INVALID | This method can only be called by a bot. |

## Can bots use this method?

Yes

## Related pages
