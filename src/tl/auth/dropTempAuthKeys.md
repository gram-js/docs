# auth.dropTempAuthKeys

Delete all temporary authorization keys **except for** the ones specified

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
        new Api.auth.dropTempAuthKeys({
            exceptAuthKeys: [2420944],
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
        new Api.auth.dropTempAuthKeys({
            exceptAuthKeys: [2420944],
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
auth.dropTempAuthKeys#8e48a188 except_auth_keys:Vector<long> = Bool;
```

## Parameters

|         Name         | Type                                                                                                | Description                                  |
| :------------------: | --------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| **except_auth_keys** | [Vector](https://core.telegram.org/type/Vector%20t) < [long](https://core.telegram.org/type/long) > | The auth keys that **shouldn't** be dropped. |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
