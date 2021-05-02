# account.acceptAuthorization

Sends a Telegram Passport authorization form, effectively sharing data with the service

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.acceptAuthorization({
		botId: 2982749,
		scope: 'random string here',
		publicKey: 'random string here',
		valueHashes: [new Api.SecureValueHash({...})],
		credentials: new Api.SecureCredentialsEncrypted({...}),
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
    const result: Api.Bool = await client.invoke(new Api.account.acceptAuthorization({
		botId: 2982749,
		scope: 'random string here',
		publicKey: 'random string here',
		valueHashes: [new Api.SecureValueHash({...})],
		credentials: new Api.SecureCredentialsEncrypted({...}),
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
account.acceptAuthorization#e7027c94 bot_id:int scope:string public_key:string value_hashes:Vector<SecureValueHash> credentials:SecureCredentialsEncrypted = Bool;
```

## Parameters

|       Name       | Type                                                                                                                      | Description                                              |
| :--------------: | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
|    **bot_id**    | [int](https://core.telegram.org/type/int)                                                                                 | Bot ID                                                   |
|    **scope**     | [string](https://core.telegram.org/type/string)                                                                           | Telegram Passport element types requested by the service |
|  **public_key**  | [string](https://core.telegram.org/type/string)                                                                           | Service's public key                                     |
| **value_hashes** | [Vector](https://core.telegram.org/type/Vector%20t) < [SecureValueHash](https://core.telegram.org/type/SecureValueHash) > | Types of values sent and their hashes                    |
| **credentials**  | [SecureCredentialsEncrypted](https://core.telegram.org/type/SecureCredentialsEncrypted)                                   | Encrypted values                                         |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
