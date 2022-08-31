# account.DeclinePasswordReset

Abort a pending 2FA password reset, [see here for more info »](https://core.telegram.org/api/srp#password-reset)

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

  const result = await client.invoke(new Api.account.DeclinePasswordReset({}));
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
    new Api.account.DeclinePasswordReset({})
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

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type                  | Description                       |
| :--: | --------------------- | --------------------------------- |
| 400  | RESET_REQUEST_MISSING | No password reset is in progress. |

## Can bots use this method?

No

## Related pages

#### [Two-factor authentication](https://core.telegram.org/api/srp)

How to login to a user's account if they have enabled 2FA, how to change password.
