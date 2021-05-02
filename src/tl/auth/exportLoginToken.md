# auth.exportLoginToken

Generate a login token, for [login via QR code](https://core.telegram.org/api/qr-login).

The generated login token should be encoded using base64url, then shown as a tg://login?token=base64encodedtoken URL in the QR code.

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
        new Api.auth.exportLoginToken({
            apiId: 2138058,
            apiHash: 'random string here',
            exceptIds: [9505834],
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
    const result: Api.auth.LoginToken = await client.invoke(
        new Api.auth.exportLoginToken({
            apiId: 2138058,
            apiHash: 'random string here',
            exceptIds: [9505834],
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
tg://login?token=base64encodedtoken
```

## Parameters

|      Name      | Type                                                                                              | Description                                                                             |
| :------------: | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
|   **api_id**   | [int](https://core.telegram.org/type/int)                                                         | Application identifier (see. [App configuration](https://core.telegram.org/myapp))      |
|  **api_hash**  | [string](https://core.telegram.org/type/string)                                                   | Application identifier hash (see. [App configuration](https://core.telegram.org/myapp)) |
| **except_ids** | [Vector](https://core.telegram.org/type/Vector%20t) < [int](https://core.telegram.org/type/int) > | List of already logged-in user IDs, to prevent logging in twice with the same user      |

## Result

[auth.LoginToken](https://core.telegram.org/type/auth.LoginToken)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [Login via QR code](https://core.telegram.org/api/qr-login)

QR code login flow
