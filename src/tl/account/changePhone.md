# account.changePhone

Change the phone number of the current account

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
        new Api.account.changePhone({
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
    const result: Api.User = await client.invoke(
        new Api.account.changePhone({
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

```
userEmpty#200250ba id:int = User;
user#938458c1 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true id:int access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string = User;
---functions---
account.changePhone#70c32edb phone_number:string phone_code_hash:string phone_code:string = User;
```

## Parameters

|        Name         | Type                                            | Description                                                                                                                       |
| :-----------------: | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
|  **phone_number**   | [string](https://core.telegram.org/type/string) | New phone number                                                                                                                  |
| **phone_code_hash** | [string](https://core.telegram.org/type/string) | Phone code hash received when calling [account.sendChangePhoneCode](https://core.telegram.org/method/account.sendChangePhoneCode) |
|   **phone_code**    | [string](https://core.telegram.org/type/string) | Phone code received when calling [account.sendChangePhoneCode](https://core.telegram.org/method/account.sendChangePhoneCode)      |

## Result

[User](https://core.telegram.org/type/User)

## Possible errors

| Code | Type                 | Description                 |
| :--: | -------------------- | --------------------------- |
| 400  | PHONE_CODE_EMPTY     | phone_code is missing       |
| 400  | PHONE_NUMBER_INVALID | The phone number is invalid |

## Can bots use this method?

Yes

## Related pages

#### [account.sendChangePhoneCode](https://core.telegram.org/method/account.sendChangePhoneCode)

Verify a new phone number to associate to the current account
