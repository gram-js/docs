# account.getSecureValue

Get saved [Telegram Passport](https://core.telegram.org/passport) document, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption)

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.getSecureValue({
		types: [new Api.SecureValueType({...})],
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
    const result: Api.Vector<SecureValue> = await client.invoke(new Api.account.getSecureValue({
		types: [new Api.SecureValueType({...})],
		}));
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
---functions---
account.getSecureValue#73665bc2 types:Vector<SecureValueType> = Vector<SecureValue>;
```

## Parameters

|   Name    | Type                                                                                                                      | Description           |
| :-------: | ------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| **types** | [Vector](https://core.telegram.org/type/Vector%20t) < [SecureValueType](https://core.telegram.org/type/SecureValueType) > | Requested value types |

## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[SecureValue](https://core.telegram.org/type/SecureValue)>

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)
