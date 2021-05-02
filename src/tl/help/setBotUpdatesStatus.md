# help.setBotUpdatesStatus

Informs the server about the number of pending bot updates if they haven't been processed for a long time; for bots only

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
        new Api.help.setBotUpdatesStatus({
            pendingUpdatesCount: 2762199,
            message: 'random string here',
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
        new Api.help.setBotUpdatesStatus({
            pendingUpdatesCount: 2762199,
            message: 'random string here',
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
help.setBotUpdatesStatus#ec22cfcd pending_updates_count:int message:string = Bool;
```

## Parameters

|           Name            | Type                                            | Description               |
| :-----------------------: | ----------------------------------------------- | ------------------------- |
| **pending_updates_count** | [int](https://core.telegram.org/type/int)       | Number of pending updates |
|        **message**        | [string](https://core.telegram.org/type/string) | Error message, if present |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
