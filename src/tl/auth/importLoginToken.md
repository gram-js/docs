# auth.importLoginToken

Login using a redirected login token, generated in case of DC mismatch during [QR code login](https://core.telegram.org/api/qr-login).

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
        new Api.auth.importLoginToken({
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
    const result: Api.auth.LoginToken = await client.invoke(
        new Api.auth.importLoginToken({
            token: Buffer.from('some bytes here'),
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
auth.loginToken#629f1980 expires:int token:bytes = auth.LoginToken;
auth.loginTokenMigrateTo#68e9916 dc_id:int token:bytes = auth.LoginToken;
auth.loginTokenSuccess#390d5c5e authorization:auth.Authorization = auth.LoginToken;
---functions---
auth.importLoginToken#95ac5ce4 token:bytes = auth.LoginToken;
```

## Parameters

|   Name    | Type                                          | Description |
| :-------: | --------------------------------------------- | ----------- |
| **token** | [bytes](https://core.telegram.org/type/bytes) | Login token |

## Result

[auth.LoginToken](https://core.telegram.org/type/auth.LoginToken)

## Possible errors

| Code | Type               | Description                         |
| :--: | ------------------ | ----------------------------------- |
| 400  | AUTH_TOKEN_EXPIRED | The authorization token has expired |

## Can bots use this method?

Yes

## Related pages

### [Login via QR code](https://core.telegram.org/api/qr-login)

QR code login flow
