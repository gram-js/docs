# account.saveSecureValue

Securely save [Telegram Passport](https://core.telegram.org/passport) document, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption)

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
        new Api.account.saveSecureValue({
            value: new Api.InputSecureValue({
                /* ... */
            }),
            secureSecretId: 6809972,
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
    const result: Api.SecureValue = await client.invoke(
        new Api.account.saveSecureValue({
            value: new Api.InputSecureValue({
                /* ... */
            }),
            secureSecretId: 6809972,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
secureValue#187fa0ca flags:# type:SecureValueType data:flags.0?SecureData front_side:flags.1?SecureFile reverse_side:flags.2?SecureFile selfie:flags.3?SecureFile translation:flags.6?Vector<SecureFile> files:flags.4?Vector<SecureFile> plain_data:flags.5?SecurePlainData hash:bytes = SecureValue;
---functions---
account.saveSecureValue#899fe31d value:InputSecureValue secure_secret_id:long = SecureValue;
```

## Parameters

|         Name         | Type                                                                | Description                                                                                                             |
| :------------------: | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
|      **value**       | [InputSecureValue](https://core.telegram.org/type/InputSecureValue) | Secure value, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption)         |
| **secure_secret_id** | [long](https://core.telegram.org/type/long)                         | Passport secret hash, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) |

## Result

[SecureValue](https://core.telegram.org/type/SecureValue)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

### [Telegram Passport Manual](https://core.telegram.org/passport)
