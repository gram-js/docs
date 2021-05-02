# auth.importAuthorization

Logs in a user using a key transmitted from his native data-centre.

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
        new Api.auth.importAuthorization({
            id: 4965292,
            bytes: Buffer.from('some bytes here'),
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
    const result: Api.auth.Authorization = await client.invoke(
        new Api.auth.importAuthorization({
            id: 4965292,
            bytes: Buffer.from('some bytes here'),
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
auth.authorization#cd050916 flags:# tmp_sessions:flags.0?int user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;
---functions---
auth.importAuthorization#e3ef9613 id:int bytes:bytes = auth.Authorization;
```

## Parameters

|   Name    | Type                                          | Description       |
| :-------: | --------------------------------------------- | ----------------- |
|  **id**   | [int](https://core.telegram.org/type/int)     | User ID           |
| **bytes** | [bytes](https://core.telegram.org/type/bytes) | Authorization key |

## Result

[auth.Authorization](https://core.telegram.org/type/auth.Authorization)

## Possible errors

| Code | Type               | Description                           |
| :--: | ------------------ | ------------------------------------- |
| 400  | AUTH_BYTES_INVALID | The provided authorization is invalid |
| 400  | USER_ID_INVALID    | The provided user ID is invalid       |

## Can bots use this method?

Yes

## Related pages
