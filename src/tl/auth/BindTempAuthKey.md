# auth.BindTempAuthKey

Binds a temporary authorization key `temp\_auth\_key\_id` to the permanent authorization key `perm\_auth\_key\_id`. Each permanent key may only be bound to one temporary key at a time, binding a new temporary key overwrites the previous one.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result = await client.invoke(
    new Api.auth.BindTempAuthKey({
      permAuthKeyId: BigInt("-4156887774564"),
      nonce: BigInt("-4156887774564"),
      expiresAt: 43,
      encryptedMessage: Buffer.from("arbitrary data here"),
    })
  );
  console.log(result); // prints the result
})();
```

:::

:::tab{title="TypeScript"}

```ts
import { Api, TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result: Api.Bool = await client.invoke(
    new Api.auth.BindTempAuthKey({
      permAuthKeyId: BigInt("-4156887774564"),
      nonce: BigInt("-4156887774564"),
      expiresAt: 43,
      encryptedMessage: Buffer.from("arbitrary data here"),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|       Name       | Type  | Description          |
| :--------------: | ----- | -------------------- |
|  permAuthKeyId   | long  | No description found |
|      nonce       | long  | No description found |
|    expiresAt     | int   | No description found |
| encryptedMessage | bytes | No description found |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [Perfect Forward Secrecy](https://core.telegram.org/api/pfs)

Binding temporary authorization key to permanent ones.

#### [long](https://core.telegram.org/type/long)

A basic bare type, elements of which correspond to two-element sequences, representing 64-bit signed numbers (little-endian).

#### [int](https://core.telegram.org/type/int)

A basic bare type, the values of which correspond to single-element sequences, i.e. numbers from -2^31 to 2^31-1 which in this case represent themselves.

#### [﻿Mobile Protocol: Detailed Description](https://core.telegram.org/mtproto/description)

Additional options for calling methods.

#### [Calling API Methods](https://core.telegram.org/api/invoking)

Additional options for calling methods.

#### [initConnection](https://core.telegram.org/method/initConnection)

Initialize connection
