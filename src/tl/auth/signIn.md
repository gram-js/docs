# auth.signIn

Signs in a user with a validated phone number.

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
        new Api.auth.signIn({
            phoneNumber: 'random string here',
            phoneCodeHash: 'random string here',
            phoneCode: 'random string here',
        }),
    );
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
    const result: Api.Returns an auth.Authorization object with information on the new authorization. = await client.invoke(new Api.auth.signIn({
		phoneNumber: 'random string here',
		phoneCodeHash: 'random string here',
		phoneCode: 'random string here',
		}));
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
auth.signIn#bcd51581 phone_number:string phone_code_hash:string phone_code:string = auth.Authorization;
```

## Parameters

|        Name         | Type                                            | Description                                                                                   |
| :-----------------: | ----------------------------------------------- | --------------------------------------------------------------------------------------------- |
|  **phone_number**   | [string](https://core.telegram.org/type/string) | Phone number in the international format                                                      |
| **phone_code_hash** | [string](https://core.telegram.org/type/string) | SMS-message ID, obtained from [auth.sendCode](https://core.telegram.org/method/auth.sendCode) |
|   **phone_code**    | [string](https://core.telegram.org/type/string) | Valid numerical code from the SMS-message                                                     |

## Result

Returns an [auth.Authorization](https://core.telegram.org/type/auth.Authorization) object with information on the new authorization.

## Possible errors

| Code | Type                    | Description                                                       |
| :--: | ----------------------- | ----------------------------------------------------------------- |
| 400  | PHONE_CODE_EMPTY        | **phone_code** from the SMS is empty                              |
| 400  | PHONE_CODE_EXPIRED      | SMS expired                                                       |
| 400  | PHONE_CODE_INVALID      | Invalid SMS code was sent                                         |
| 400  | PHONE_NUMBER_INVALID    | Invalid phone number                                              |
| 400  | PHONE_NUMBER_UNOCCUPIED | The code is valid but no user with the given number is registered |

## Can bots use this method?

Yes

## Related pages

#### [auth.sendCode](https://core.telegram.org/method/auth.sendCode)

Send the verification code for login
