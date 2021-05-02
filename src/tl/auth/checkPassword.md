# auth.checkPassword

Try logging to an account protected by a [2FA password](https://core.telegram.org/api/srp).

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.auth.checkPassword({
		password: new Api.InputCheckPasswordSRP({...}),
		}));
    console.log(result); // prints the result
})();
```

:::

:::tab{title="TypeScript"}

```ts
import {Api, TelegramClient} from 'telegram';
import {StringSession} from 'telegram/sessions';

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.auth.Authorization = await client.invoke(new Api.auth.checkPassword({
		password: new Api.InputCheckPasswordSRP({...}),
		}));
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
auth.authorization#cd050916 flags:# tmp_sessions:flags.0?int user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;
---functions---
auth.checkPassword#d18b4d16 password:InputCheckPasswordSRP = auth.Authorization;
```

## Parameters

|     Name     | Type                                                                          | Description                                                           |
| :----------: | ----------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| **password** | [InputCheckPasswordSRP](https://core.telegram.org/type/InputCheckPasswordSRP) | The account's password (see [SRP](https://core.telegram.org/api/srp)) |

## Result

[auth.Authorization](https://core.telegram.org/type/auth.Authorization)

## Possible errors

| Code | Type                  | Description                       |
| :--: | --------------------- | --------------------------------- |
| 400  | PASSWORD_HASH_INVALID | The provided password isn't valid |
| 400  | SRP_ID_INVALID        | Invalid SRP ID provided           |
| 400  | SRP_PASSWORD_CHANGED  | Password has changed              |

## Can bots use this method?

Yes

## Related pages

#### [Two-factor authentication](https://core.telegram.org/api/srp)

How to login to a user's account if they have enabled 2FA, how to change password.
