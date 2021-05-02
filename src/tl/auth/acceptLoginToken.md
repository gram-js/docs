# auth.acceptLoginToken

Accept QR code login token, logging in the app that generated it.

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
        new Api.auth.acceptLoginToken({
            token: Buffer.from('some bytes here'),
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
    const result: Api.Authorization = await client.invoke(
        new Api.auth.acceptLoginToken({
            token: Buffer.from('some bytes here'),
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
authorization#ad01d61d flags:# current:flags.0?true official_app:flags.1?true password_pending:flags.2?true hash:long device_model:string platform:string system_version:string api_id:int app_name:string app_version:string date_created:int date_active:int ip:string country:string region:string = Authorization;
---functions---
auth.acceptLoginToken#e894ad4d token:bytes = Authorization;
```

## Parameters

|   Name    | Type                                          | Description                                                                                                      |
| :-------: | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **token** | [bytes](https://core.telegram.org/type/bytes) | Login token embedded in QR code, for more info, see [login via QR code](https://core.telegram.org/api/qr-login). |

## Result

[Authorization](https://core.telegram.org/type/Authorization)

## Possible errors

| Code | Type                | Description                         |
| :--: | ------------------- | ----------------------------------- |
| 400  | AUTH_TOKEN_INVALIDX | The specified auth token is invalid |

## Can bots use this method?

Yes

## Related pages

#### [Login via QR code](https://core.telegram.org/api/qr-login)

QR code login flow
