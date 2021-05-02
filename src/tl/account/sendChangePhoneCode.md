# account.sendChangePhoneCode

Verify a new phone number to associate to the current account

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.sendChangePhoneCode({
		phoneNumber: 'random string here',
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
    const result: Api.auth.SentCode = await client.invoke(new Api.account.sendChangePhoneCode({
		phoneNumber: 'random string here',
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
account.sendChangePhoneCode#82574ae5 phone_number:string settings:CodeSettings = auth.SentCode;
```

## Parameters

|       Name       | Type                                                        | Description         |
| :--------------: | ----------------------------------------------------------- | ------------------- |
| **phone_number** | [string](https://core.telegram.org/type/string)             | New phone number    |
|   **settings**   | [CodeSettings](https://core.telegram.org/type/CodeSettings) | Phone code settings |

## Result

[auth.SentCode](https://core.telegram.org/type/auth.SentCode)

## Possible errors

| Code | Type                 | Description                 |
| :--: | -------------------- | --------------------------- |
| 400  | PHONE_NUMBER_INVALID | The phone number is invalid |

## Can bots use this method?

Yes

## Related pages
