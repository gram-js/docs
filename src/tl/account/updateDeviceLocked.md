# account.updateDeviceLocked

When client-side passcode lock feature is enabled, will not show message texts in incoming [PUSH notifications](https://core.telegram.org/api/push-updates).

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
        new Api.account.updateDeviceLocked({
            period: 5878955,
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
        new Api.account.updateDeviceLocked({
            period: 5878955,
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
account.updateDeviceLocked#38df3532 period:int = Bool;
```

## Parameters

|    Name    | Type                                      | Description                                                                                                                      |
| :--------: | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **period** | [int](https://core.telegram.org/type/int) | Inactivity period after which to start hiding message texts in [PUSH notifications](https://core.telegram.org/api/push-updates). |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [Handling PUSH-notifications](https://core.telegram.org/api/push-updates)

How to subscribe to and handle PUSH notifications
