# account.setPrivacy

Change privacy settings of current account

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.setPrivacy({
		key: new Api.InputPrivacyKey({...}),
		rules: [new Api.InputPrivacyRule({...})],
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
    const result: Api.account.PrivacyRules = await client.invoke(new Api.account.setPrivacy({
		key: new Api.InputPrivacyKey({...}),
		rules: [new Api.InputPrivacyRule({...})],
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```txt
account.privacyRules#50a04e45 rules:Vector<PrivacyRule> chats:Vector<Chat> users:Vector<User> = account.PrivacyRules;
---functions---
account.setPrivacy#c9f81ce8 key:InputPrivacyKey rules:Vector<InputPrivacyRule> = account.PrivacyRules;
```

## Parameters

|   Name    | Type                                                                                                                        | Description                            |
| :-------: | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
|  **key**  | [InputPrivacyKey](https://core.telegram.org/type/InputPrivacyKey)                                                           | Peers to which the privacy rules apply |
| **rules** | [Vector](https://core.telegram.org/type/Vector%20t) < [InputPrivacyRule](https://core.telegram.org/type/InputPrivacyRule) > | New privacy rules                      |

## Result

[account.PrivacyRules](https://core.telegram.org/type/account.PrivacyRules)

## Possible errors

| Code | Type                  | Description                                       |
| :--: | --------------------- | ------------------------------------------------- |
| 400  | PRIVACY_KEY_INVALID   | The privacy key is invalid                        |
| 400  | PRIVACY_VALUE_INVALID | The specified privacy rule combination is invalid |

## Can bots use this method?

Yes

## Related pages
