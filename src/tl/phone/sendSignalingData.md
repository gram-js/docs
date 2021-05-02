# phone.sendSignalingData

Send VoIP signaling data

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
        new Api.phone.sendSignalingData({
            peer: new Api.InputPhoneCall({
                /* ... */
            }),
            data: Buffer.from('some bytes here'),
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
        new Api.phone.sendSignalingData({
            peer: new Api.InputPhoneCall({
                /* ... */
            }),
            data: Buffer.from('some bytes here'),
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
phone.sendSignalingData#ff7a9383 peer:InputPhoneCall data:bytes = Bool;
```

## Parameters

|   Name   | Type                                                            | Description       |
| :------: | --------------------------------------------------------------- | ----------------- |
| **peer** | [InputPhoneCall](https://core.telegram.org/type/InputPhoneCall) | Phone call        |
| **data** | [bytes](https://core.telegram.org/type/bytes)                   | Signaling payload |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
