# auth.sendCode

Send the verification code for login

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.auth.sendCode({
		phoneNumber: 'random string here',
		apiId: 372518,
		apiHash: 'random string here',
		settings: new Api.CodeSettings({...}),
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
    const result: Api.The method returns an auth.SentCode object with information on the message sent. = await client.invoke(new Api.auth.sendCode({
		phoneNumber: 'random string here',
		apiId: 372518,
		apiHash: 'random string here',
		settings: new Api.CodeSettings({...}),
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```txt
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
---functions---
auth.sendCode#a677244f phone_number:string api_id:int api_hash:string settings:CodeSettings = auth.SentCode;
```

## Parameters

|       Name       | Type                                                        | Description                                                                        |
| :--------------: | ----------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **phone_number** | [string](https://core.telegram.org/type/string)             | Phone number in international format                                               |
|    **api_id**    | [int](https://core.telegram.org/type/int)                   | Application identifier (see [App configuration](https://core.telegram.org/myapp))  |
|   **api_hash**   | [string](https://core.telegram.org/type/string)             | Application secret hash (see [App configuration](https://core.telegram.org/myapp)) |
|   **settings**   | [CodeSettings](https://core.telegram.org/type/CodeSettings) | Settings for the code type to send                                                 |

## Result

The method returns an [auth.SentCode](https://core.telegram.org/type/auth.SentCode) object with information on the message sent.

## Possible errors

| Code | Type                              | Description                                                                           |
| :--: | --------------------------------- | ------------------------------------------------------------------------------------- |
| 400  | API_ID_INVALID                    | API ID invalid                                                                        |
| 400  | API_ID_PUBLISHED_FLOOD            | This API id was published somewhere, you can't use it now                             |
| 401  | AUTH_KEY_PERM_EMPTY               | The temporary auth key must be binded to the permanent auth key to use these methods. |
| 400  | INPUT_REQUEST_TOO_LONG            | The request is too big                                                                |
| 303  | NETWORK_MIGRATE_X                 | Repeat the query to data-center X                                                     |
| 303  | PHONE_MIGRATE_X                   | Repeat the query to data-center X                                                     |
| 400  | PHONE_NUMBER_APP_SIGNUP_FORBIDDEN | You can't sign up using this app                                                      |
| 400  | PHONE_NUMBER_BANNED               | The provided phone number is banned from telegram                                     |
| 400  | PHONE_NUMBER_FLOOD                | You asked for the code too many times.                                                |
| 400  | PHONE_NUMBER_INVALID              | Invalid phone number                                                                  |
| 406  | PHONE_PASSWORD_FLOOD              | You have tried logging in too many times                                              |
| 400  | PHONE_PASSWORD_PROTECTED          | This phone is password protected                                                      |
| 400  | SMS_CODE_CREATE_FAILED            | An error occurred while creating the SMS code                                         |

## Can bots use this method?

Yes

## Related pages
