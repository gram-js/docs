# bots.answerWebhookJSONQuery

Answers a custom query; for bots only

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(
        new Api.bots.answerWebhookJSONQuery({
            queryId: 1466102,
            data: new Api.DataJSON({
                /* ... */
            }),
        }),
    );
    console.log(result); // prints the result
})();
```

:::

:::tab{title="TypeScript"}

```ts
import { Api, TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.Bool = await client.invoke(
        new Api.bots.answerWebhookJSONQuery({
            queryId: 1466102,
            data: new Api.DataJSON({
                /* ... */
            }),
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.answerWebhookJSONQuery#e6213f4d query_id:long data:DataJSON = Bool;
```

## Parameters

|     Name     | Type                                                | Description                         |
| :----------: | --------------------------------------------------- | ----------------------------------- |
| **query_id** | [long](https://core.telegram.org/type/long)         | Identifier of a custom query        |
|   **data**   | [DataJSON](https://core.telegram.org/type/DataJSON) | JSON-serialized answer to the query |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type             | Description                             |
| :--: | ---------------- | --------------------------------------- |
| 400  | QUERY_ID_INVALID | The query ID is invalid                 |
| 400  | USER_BOT_INVALID | This method can only be called by a bot |

## Can bots use this method?

Yes

## Related pages
