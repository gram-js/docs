# account.ResetPassword

Initiate a 2FA password reset: can only be used if the user is already logged-in, [see here for more info »](https://core.telegram.org/api/srp#password-reset)

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

  const result = await client.invoke(new Api.account.ResetPassword({}));
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

  const result: Api.account.ResetPasswordResult = await client.invoke(
    new Api.account.ResetPassword({})
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

## Result

[account.ResetPasswordResult](https://core.telegram.org/type/account.ResetPasswordResult)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages

#### [Two-factor authentication](https://core.telegram.org/api/srp)

How to login to a user's account if they have enabled 2FA, how to change password.
