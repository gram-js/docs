# account.resetAuthorization

Log out an active [authorized session](https://core.telegram.org/api/auth) by its hash

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
        new Api.account.resetAuthorization({
            hash: 5596079,
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
        new Api.account.resetAuthorization({
            hash: 5596079,
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
account.resetAuthorization#df77f3bc hash:long = Bool;
```

## Parameters

|   Name   | Type                                        | Description  |
| :------: | ------------------------------------------- | ------------ |
| **hash** | [long](https://core.telegram.org/type/long) | Session hash |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type                                | Description                                                                                               |
| :--: | ----------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 406  | FRESH_RESET_AUTHORISATION_FORBIDDEN | You can't logout other sessions if less than 24 hours have passed since you logged on the current session |
| 400  | HASH_INVALID                        | The provided hash is invalid                                                                              |

## Can bots use this method?

Yes

## Related pages

#### [User Authorization](https://core.telegram.org/api/auth)

How to register a user's phone to start using the API.
