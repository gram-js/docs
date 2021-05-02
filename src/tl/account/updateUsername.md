# account.updateUsername

Changes username for the current user.

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
        new Api.account.updateUsername({
            username: 'random string here',
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
    const result: Api.Returns updated information on the user in a User type object. = await client.invoke(new Api.account.updateUsername({
		username: 'random string here',
		}));
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
userEmpty#200250ba id:int = User;
user#938458c1 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true id:int access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string = User;
---functions---
account.updateUsername#3e0bdd7c username:string = User;
```

## Parameters

|     Name     | Type                                            | Description                                           |
| :----------: | ----------------------------------------------- | ----------------------------------------------------- |
| **username** | [string](https://core.telegram.org/type/string) | username or empty string if username is to be removed |

Accepted characters: a-z (case-insensitive), 0-9 and underscores.  
Length: 5-32 characters.|

## Result

Returns updated information on the user in a [User](https://core.telegram.org/type/User) type object.

## Possible errors

| Code | Type                  | Description                                                                           |
| :--: | --------------------- | ------------------------------------------------------------------------------------- |
| 401  | AUTH_KEY_PERM_EMPTY   | The temporary auth key must be binded to the permanent auth key to use these methods. |
| 400  | USERNAME_INVALID      | Unacceptable username                                                                 |
| 400  | USERNAME_NOT_MODIFIED | Username is not different from the current username                                   |
| 400  | USERNAME_OCCUPIED     | Username is taken                                                                     |

## Can bots use this method?

Yes

## Related pages
