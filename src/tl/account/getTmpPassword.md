# account.getTmpPassword

Get temporary payment password

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.getTmpPassword({
		password: new Api.InputCheckPasswordSRP({...}),
		period: 1240138,
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
    const result: Api.account.TmpPassword = await client.invoke(new Api.account.getTmpPassword({
		password: new Api.InputCheckPasswordSRP({...}),
		period: 1240138,
		}));
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
account.tmpPassword#db64fd34 tmp_password:bytes valid_until:int = account.TmpPassword;
---functions---
account.getTmpPassword#449e0b51 password:InputCheckPasswordSRP period:int = account.TmpPassword;
```

## Parameters

|     Name     | Type                                                                          | Description                                                                                        |
| :----------: | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **password** | [InputCheckPasswordSRP](https://core.telegram.org/type/InputCheckPasswordSRP) | SRP password parameters                                                                            |
|  **period**  | [int](https://core.telegram.org/type/int)                                     | Time during which the temporary password will be valid, in seconds; should be between 60 and 86400 |

## Result

[account.TmpPassword](https://core.telegram.org/type/account.TmpPassword)

## Possible errors

| Code | Type                  | Description                           |
| :--: | --------------------- | ------------------------------------- |
| 400  | PASSWORD_HASH_INVALID | The provided password hash is invalid |
| 400  | TMP_PASSWORD_DISABLED | The temporary password is disabled    |

## Can bots use this method?

Yes

## Related pages
