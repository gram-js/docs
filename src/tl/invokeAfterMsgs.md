# invokeAfterMsgs

Invokes a query after a successfull completion of previous queries

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
        new Api.invokeAfterMsgs({
            msgIds: [2789471],
            query: new Api.AnyRequest({
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
    const result: Api.X = await client.invoke(
        new Api.invokeAfterMsgs({
            msgIds: [2789471],
            query: new Api.AnyRequest({
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
---functions---
invokeAfterMsgs#3dc4b4f0 {X:Type} msg_ids:Vector<long> query:!X = X;
```

## Parameters

|    Name     | Type                                                                                                | Description                                       |
| :---------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| **msg_ids** | [Vector](https://core.telegram.org/type/Vector%20t) < [long](https://core.telegram.org/type/long) > | List of messages on which a current query depends |
|  **query**  | !X                                                                                                  | The query itself                                  |

## Result

X

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
