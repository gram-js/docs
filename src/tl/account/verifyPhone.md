# account.verifyPhone

Verify a phone number for telegram [passport](https://core.telegram.org/passport).

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
        new Api.account.verifyPhone({
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
import { Api, TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.Bool = await client.invoke(
        new Api.account.verifyPhone({
            phoneNumber: 'random string here',
            phoneCodeHash: 'random string here',
            phoneCode: 'random string here',
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
account.verifyPhone#4dd3a7f6 phone_number:string phone_code_hash:string phone_code:string = Bool;
```

## Parameters

|        Name         | Type                                            | Description                                                                                                                           |
| :-----------------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
|  **phone_number**   | [string](https://core.telegram.org/type/string) | Phone number                                                                                                                          |
| **phone_code_hash** | [string](https://core.telegram.org/type/string) | Phone code hash received from the call to [account.sendVerifyPhoneCode](https://core.telegram.org/method/account.sendVerifyPhoneCode) |
|   **phone_code**    | [string](https://core.telegram.org/type/string) | Code received after the call to [account.sendVerifyPhoneCode](https://core.telegram.org/method/account.sendVerifyPhoneCode)           |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type               | Description                                                                                                                                                                                                                   |
| :--: | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 400  | PHONE_CODE_EXPIRED | The phone code you provided has expired, this may happen if it was sent to any chat on telegram (if the code is sent through a telegram chat (not the official account) to avoid it append or prepend to the code some chars) |

## Can bots use this method?

Yes

## Related pages

### [account.sendVerifyPhoneCode](https://core.telegram.org/method/account.sendVerifyPhoneCode)

Send the verification phone code for telegram [passport](https://core.telegram.org/passport).

### [Telegram Passport Manual](https://core.telegram.org/passport)
