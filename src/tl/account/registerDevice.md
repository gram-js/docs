# account.registerDevice

Register device to receive [PUSH notifications](https://core.telegram.org/api/push-updates)

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
        new Api.account.registerDevice({
            noMuted: true,
            tokenType: 941000,
            token: 'random string here',
            appSandbox: new Api.Bool({
                /* ... */
            }),
            secret: Buffer.from('some bytes here'),
            otherUids: [418212],
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
        new Api.account.registerDevice({
            noMuted: true,
            tokenType: 941000,
            token: 'random string here',
            appSandbox: new Api.Bool({
                /* ... */
            }),
            secret: Buffer.from('some bytes here'),
            otherUids: [418212],
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
account.registerDevice#68976c6f flags:# no_muted:flags.0?true token_type:int token:string app_sandbox:Bool secret:bytes other_uids:Vector<int> = Bool;
```

## Parameters

|      Name      | Type                                                                                                                              | Description                                                                                             |
| :------------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|   **flags**    | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|  **no_muted**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Avoid receiving (silent and invisible background) notifications. Useful to save battery.                |
| **token_type** | [int](https://core.telegram.org/type/int)                                                                                         | Device token type.                                                                                      |

**Possible values**:  
1 - APNS (device token for apple push)  
2 - FCM (firebase token for google firebase)  
3 - MPNS (channel URI for microsoft push)  
4 - Simple push (endpoint for firefox's simple push API)  
5 - Ubuntu phone (token for ubuntu push)  
6 - Blackberry (token for blackberry push)  
7 - Unused  
8 - WNS (windows push)  
9 - APNS VoIP (token for apple push VoIP)  
10 - Web push (web push, see below)  
11 - MPNS VoIP (token for microsoft push VoIP)  
12 - Tizen (token for tizen push)

For 10 web push, the token must be a JSON-encoded object containing the keys described in [PUSH updates](https://core.telegram.org/api/push-updates)|
|**token**|[string](https://core.telegram.org/type/string)|Device token|
|**app_sandbox**|[Bool](https://core.telegram.org/type/Bool)|If [(boolTrue)](https://core.telegram.org/constructor/boolTrue) is transmitted, a sandbox-certificate will be used during transmission.|
|**secret**|[bytes](https://core.telegram.org/type/bytes)|For FCM and APNS VoIP, optional encryption key used to encrypt push notifications|
|**other_uids**|[Vector](https://core.telegram.org/type/Vector%20t) < [int](https://core.telegram.org/type/int) > |List of user identifiers of other users currently using the client|

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type          | Description                   |
| :--: | ------------- | ----------------------------- |
| 400  | TOKEN_INVALID | The provided token is invalid |

## Can bots use this method?

Yes

## Related pages

#### [Handling PUSH-notifications](https://core.telegram.org/api/push-updates)

How to subscribe to and handle PUSH notifications

#### [boolTrue](https://core.telegram.org/constructor/boolTrue)

The constructor can be interpreted as a **boolean**true value.
