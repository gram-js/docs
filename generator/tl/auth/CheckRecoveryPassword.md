# auth.CheckRecoveryPassword

Check if the [2FA recovery code](https://core.telegram.org/api/srp) sent using [auth.requestPasswordRecovery](https://core.telegram.org/method/auth.requestPasswordRecovery) is valid, before passing it to [auth.recoverPassword](https://core.telegram.org/method/auth.recoverPassword).

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
    new Api.auth.CheckRecoveryPassword({
      code: "some string here",
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
    new Api.auth.CheckRecoveryPassword({
      code: "some string here",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|   Name   | Type                                            | Description             |
| :------: | ----------------------------------------------- | ----------------------- |
| **code** | [string](https://core.telegram.org/type/string) | Code received via email |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type                      | Description                    |
| :--: | ------------------------- | ------------------------------ |
| 400  | PASSWORD_RECOVERY_EXPIRED | The recovery code has expired. |

## Can bots use this method?

No

## Related pages

#### [Two-factor authentication](https://core.telegram.org/api/srp)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [auth.requestPasswordRecovery](https://core.telegram.org/method/auth.requestPasswordRecovery)

Request recovery code of a [2FA password](https://core.telegram.org/api/srp), only for accounts with a [recovery email configured](https://core.telegram.org/api/srp#email-verification).

#### [auth.recoverPassword](https://core.telegram.org/method/auth.recoverPassword)

Reset the [2FA password](https://core.telegram.org/api/srp) using the recovery code sent using [auth.requestPasswordRecovery](https://core.telegram.org/method/auth.requestPasswordRecovery).
