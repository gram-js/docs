# account.unregisterDevice

Deletes a device by its token, stops sending PUSH-notifications to it.

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
        new Api.account.unregisterDevice({
            tokenType: 3891789,
            token: 'random string here',
            otherUids: [7507341],
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
        new Api.account.unregisterDevice({
            tokenType: 3891789,
            token: 'random string here',
            otherUids: [7507341],
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
account.unregisterDevice#3076c4bf token_type:int token:string other_uids:Vector<int> = Bool;
```

## Parameters

|      Name      | Type                                      | Description        |
| :------------: | ----------------------------------------- | ------------------ |
| **token_type** | [int](https://core.telegram.org/type/int) | Device token type. |

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

### [Handling PUSH-notifications](https://core.telegram.org/api/push-updates)

How to subscribe to and handle PUSH notifications
