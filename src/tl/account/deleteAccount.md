# account.deleteAccount

Delete the user's account from the telegram servers. Can be used, for example, to delete the account of a user that provided the login code, but forgot the [2FA password and no recovery method is configured](https://core.telegram.org/api/srp).

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
        new Api.account.deleteAccount({
            reason: 'random string here',
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
        new Api.account.deleteAccount({
            reason: 'random string here',
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
account.deleteAccount#418d4e0b reason:string = Bool;
```

## Parameters

|    Name    | Type                                            | Description                                    |
| :--------: | ----------------------------------------------- | ---------------------------------------------- |
| **reason** | [string](https://core.telegram.org/type/string) | Why is the account being deleted, can be empty |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type               | Description                                                                                                                                                                                                  |
| :--: | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 420  | 2FA_CONFIRM_WAIT_X | Since this account is active and protected by a 2FA password, we will delete it in 1 week for security purposes. You can cancel this process at any time, you'll be able to reset your account in X seconds. |

## Can bots use this method?

Yes

## Related pages

#### [Two-factor authentication](https://core.telegram.org/api/srp)

How to login to a user's account if they have enabled 2FA, how to change password.
