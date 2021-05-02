# bots.sendCustomRequest

Sends a custom request; for bots only

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
        new Api.bots.sendCustomRequest({
            customMethod: 'random string here',
            params: new Api.DataJSON({
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
    const result: Api.DataJSON = await client.invoke(
        new Api.bots.sendCustomRequest({
            customMethod: 'random string here',
            params: new Api.DataJSON({
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
dataJSON#7d748d04 data:string = DataJSON;
---functions---
bots.sendCustomRequest#aa2769ed custom_method:string params:DataJSON = DataJSON;
```

## Parameters

|       Name        | Type                                                | Description                       |
| :---------------: | --------------------------------------------------- | --------------------------------- |
| **custom_method** | [string](https://core.telegram.org/type/string)     | The method name                   |
|    **params**     | [DataJSON](https://core.telegram.org/type/DataJSON) | JSON-serialized method parameters |

## Result

[DataJSON](https://core.telegram.org/type/DataJSON)

## Possible errors

| Code | Type             | Description                             |
| :--: | ---------------- | --------------------------------------- |
| 400  | METHOD_INVALID   | The specified method is invalid         |
| 400  | USER_BOT_INVALID | This method can only be called by a bot |

## Can bots use this method?

Yes

## Related pages
