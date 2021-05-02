# invokeWithTakeout

Invoke a method within a takeout session

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
        new Api.invokeWithTakeout({
            takeoutId: 3431562,
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
        new Api.invokeWithTakeout({
            takeoutId: 3431562,
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
invokeWithTakeout#aca9fd2e {X:Type} takeout_id:long query:!X = X;
```

## Parameters

|      Name      | Type                                        | Description        |
| :------------: | ------------------------------------------- | ------------------ |
| **takeout_id** | [long](https://core.telegram.org/type/long) | Takeout session ID |
|   **query**    | !X                                          | Query              |

## Result

X

## Possible errors

| Code | Type                              | Description    |
| :--: | --------------------------------- | -------------- |
| 400  | INPUT_METHOD_INVALID_1400137063_X | Invalid method |

## Can bots use this method?

Yes

## Related pages
