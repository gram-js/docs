# account.ConfirmPhone

Confirm a phone number to cancel account deletion, for more info [click here »](https://core.telegram.org/api/account-deletion)

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
    new Api.account.ConfirmPhone({
      phoneCodeHash: "some string here",
      phoneCode: "some string here",
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
    new Api.account.ConfirmPhone({
      phoneCodeHash: "some string here",
      phoneCode: "some string here",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|       Name        | Type                                            | Description                                                                                   |
| :---------------: | ----------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **phoneCodeHash** | [string](https://core.telegram.org/type/string) | Phone code hash, for more info [click here »](https://core.telegram.org/api/account-deletion) |
|   **phoneCode**   | [string](https://core.telegram.org/type/string) | SMS code, for more info [click here »](https://core.telegram.org/api/account-deletion)        |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type              | Description            |
| :--: | ----------------- | ---------------------- |
| 400  | CODE_HASH_INVALID | Code hash invalid.     |
| 400  | PHONE_CODE_EMPTY  | phone_code is missing. |

## Can bots use this method?

No

## Related pages

#### [Account deletion](https://core.telegram.org/api/account-deletion)

How to reset an account if the 2FA password was forgotten.
