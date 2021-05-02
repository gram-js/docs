# account.deleteSecureValue

Delete stored [Telegram Passport](https://core.telegram.org/passport) documents, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption)

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.deleteSecureValue({
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
    const result: Api.Bool = await client.invoke(new Api.account.deleteSecureValue({
		types: [new Api.SecureValueType({...})],
		}));
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
account.deleteSecureValue#b880bc4b types:Vector<SecureValueType> = Bool;
```

## Parameters

|   Name    | Type                                                                                                                      | Description              |
| :-------: | ------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| **types** | [Vector](https://core.telegram.org/type/Vector%20t) < [SecureValueType](https://core.telegram.org/type/SecureValueType) > | Document types to delete |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)
