# auth.resendCode

Resend the login code via another medium, the phone code type is determined by the return value of the previous auth.sendCode/auth.resendCode: see [login](https://core.telegram.org/api/auth) for more info.

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
        new Api.auth.resendCode({
            phoneNumber: 'random string here',
            phoneCodeHash: 'random string here',
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
    const result: Api.auth.SentCode = await client.invoke(
        new Api.auth.resendCode({
            phoneNumber: 'random string here',
            phoneCodeHash: 'random string here',
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
---functions---
auth.resendCode#3ef1a9bf phone_number:string phone_code_hash:string = auth.SentCode;
```

## Parameters

|        Name         | Type                                            | Description                                                                                       |
| :-----------------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  **phone_number**   | [string](https://core.telegram.org/type/string) | The phone number                                                                                  |
| **phone_code_hash** | [string](https://core.telegram.org/type/string) | The phone code hash obtained from [auth.sendCode](https://core.telegram.org/method/auth.sendCode) |

## Result

[auth.SentCode](https://core.telegram.org/type/auth.SentCode)

## Possible errors

| Code | Type                  | Description                                                                                                                                                                                                                   |
| :--: | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 400  | PHONE_CODE_EXPIRED    | The phone code you provided has expired, this may happen if it was sent to any chat on telegram (if the code is sent through a telegram chat (not the official account) to avoid it append or prepend to the code some chars) |
| 400  | PHONE_CODE_HASH_EMPTY | phone_code_hash is missing                                                                                                                                                                                                    |
| 400  | PHONE_NUMBER_INVALID  | The phone number is invalid                                                                                                                                                                                                   |

## Can bots use this method?

Yes

## Related pages

#### [auth.sendCode](https://core.telegram.org/method/auth.sendCode)

Send the verification code for login

#### [User Authorization](https://core.telegram.org/api/auth)

How to register a user's phone to start using the API.
