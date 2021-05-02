# auth.signUp

Registers a validated phone number in the system.

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
        new Api.auth.signUp({
            phoneNumber: 'random string here',
            phoneCodeHash: 'random string here',
            firstName: 'random string here',
            lastName: 'random string here',
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
    const result: Api.Returns an auth.Authorization object with information about the new authorization. = await client.invoke(new Api.auth.signUp({
		phoneNumber: 'random string here',
		phoneCodeHash: 'random string here',
		firstName: 'random string here',
		lastName: 'random string here',
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
auth.signUp#80eee427 phone_number:string phone_code_hash:string first_name:string last_name:string = auth.Authorization;
```

## Parameters

|        Name         | Type                                            | Description                              |
| :-----------------: | ----------------------------------------------- | ---------------------------------------- |
|  **phone_number**   | [string](https://core.telegram.org/type/string) | Phone number in the international format |
| **phone_code_hash** | [string](https://core.telegram.org/type/string) | SMS-message ID                           |
|   **first_name**    | [string](https://core.telegram.org/type/string) | New user first name                      |
|    **last_name**    | [string](https://core.telegram.org/type/string) | New user last name                       |

## Result

Returns an [auth.Authorization](https://core.telegram.org/type/auth.Authorization) object with information about the new authorization.

## Possible errors

| Code | Type                   | Description                            |
| :--: | ---------------------- | -------------------------------------- |
| 400  | FIRSTNAME_INVALID      | Invalid first name                     |
| 400  | INPUT_REQUEST_TOO_LONG | The request is too big                 |
| 400  | LASTNAME_INVALID       | Invalid last name                      |
| 400  | PHONE_CODE_EMPTY       | **phone_code** from a SMS is empty     |
| 400  | PHONE_CODE_EXPIRED     | SMS expired                            |
| 400  | PHONE_CODE_INVALID     | Invalid SMS code was sent              |
| 400  | PHONE_NUMBER_FLOOD     | You asked for the code too many times. |
| 400  | PHONE_NUMBER_INVALID   | Invalid phone number                   |
| 400  | PHONE_NUMBER_OCCUPIED  | The phone number is already in use     |

## Can bots use this method?

Yes

## Related pages
