# account.GetPasswordSettings

Get private info associated to the password info (recovery email, telegram [passport](https://core.telegram.org/passport) info & so on)

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
    new Api.account.GetPasswordSettings({
      password: new Api.InputCheckPasswordSRP({
        srpId: BigInt("-4156887774564"),
        a: Buffer.from("arbitrary data here"),
        m1: Buffer.from("arbitrary data here"),
      }),
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

  const result: Api.account.PasswordSettings = await client.invoke(
    new Api.account.GetPasswordSettings({
      password: new Api.InputCheckPasswordSRP({
        srpId: BigInt("-4156887774564"),
        a: Buffer.from("arbitrary data here"),
        m1: Buffer.from("arbitrary data here"),
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name     | Type                                                                          | Description                                                 |
| :----------: | ----------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **password** | [InputCheckPasswordSRP](https://core.telegram.org/type/InputCheckPasswordSRP) | The password (see [SRP](https://core.telegram.org/api/srp)) |

## Result

[account.PasswordSettings](https://core.telegram.org/type/account.PasswordSettings)

## Possible errors

| Code | Type                  | Description                            |
| :--: | --------------------- | -------------------------------------- |
| 400  | PASSWORD_HASH_INVALID | The provided password hash is invalid. |

## Can bots use this method?

No

## Related pages

#### [Two-factor authentication](https://core.telegram.org/api/srp)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [Telegram Passport Manual](https://core.telegram.org/passport)
