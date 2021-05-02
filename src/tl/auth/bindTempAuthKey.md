# auth.bindTempAuthKey

Binds a temporary authorization key temp_auth_key_id to the permanent authorization key perm_auth_key_id. Each permanent key may only be bound to one temporary key at a time, binding a new temporary key overwrites the previous one.

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
        new Api.auth.bindTempAuthKey({
            permAuthKeyId: 4315316,
            nonce: 281486,
            expiresAt: 5653333,
            encryptedMessage: Buffer.from('some bytes here'),
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
        new Api.auth.bindTempAuthKey({
            permAuthKeyId: 4315316,
            nonce: 281486,
            expiresAt: 5653333,
            encryptedMessage: Buffer.from('some bytes here'),
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
temp_auth_key_id
```

## Parameters

|         Name          | Type                                          | Description                                                                                                                    |
| :-------------------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **perm_auth_key_id**  | [long](https://core.telegram.org/type/long)   | Permanent auth_key_id to bind to                                                                                               |
|       **nonce**       | [long](https://core.telegram.org/type/long)   | Random long from [Binding message contents](https://core.telegram.org#binding-message-contents)                                |
|    **expires_at**     | [int](https://core.telegram.org/type/int)     | Unix timestamp to invalidate temporary key, see [Binding message contents](https://core.telegram.org#binding-message-contents) |
| **encrypted_message** | [bytes](https://core.telegram.org/type/bytes) | See [Generating encrypted_message](https://core.telegram.org#generating-encrypted-message)                                     |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

### [Perfect Forward Secrecy](https://core.telegram.org/api/pfs)

Binding temporary authorization key to permanent ones.

### [long](https://core.telegram.org/type/long)

A basic bare type, elements of which correspond to two-element sequences, representing 64-bit signed numbers (little-endian).

### [int](https://core.telegram.org/type/int)

A basic bare type, the values of which correspond to single-element sequences, i.e. numbers from -2^31 to 2^31-1 which in this case represent themselves.

### [﻿Mobile Protocol: Detailed Description](https://core.telegram.org/mtproto/description)

Additional options for calling methods.

### [Calling API Methods](https://core.telegram.org/api/invoking)

Additional options for calling methods.

### [initConnection](https://core.telegram.org/method/initConnection)

Initialize connection
