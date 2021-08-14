# auth.ExportLoginToken

Generate a login token, for [login via QR code](https://core.telegram.org/api/qr-login).

The generated login token should be encoded using base64url, then shown as a `tg://login?token=base64encodedtoken` URL in the QR code.

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
    new Api.auth.ExportLoginToken({
      apiId: 43,
      apiHash: "some string here",
      exceptIds: [43],
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

  const result: Api.auth.LoginToken = await client.invoke(
    new Api.auth.ExportLoginToken({
      apiId: 43,
      apiHash: "some string here",
      exceptIds: [43],
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name      | Type                                                                                           | Description                                                                             |
| :-----------: | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
|   **apiId**   | [int](https://core.telegram.org/type/int)                                                      | Application identifier (see. [App configuration](https://core.telegram.org/myapp))      |
|  **apiHash**  | [string](https://core.telegram.org/type/string)                                                | Application identifier hash (see. [App configuration](https://core.telegram.org/myapp)) |
| **exceptIds** | [Vector](https://core.telegram.org/type/Vector%20t)<[int](https://core.telegram.org/type/int)> | List of already logged-in user IDs, to prevent logging in twice with the same user      |

## Result

[auth.LoginToken](https://core.telegram.org/type/auth.LoginToken)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages

#### [Login via QR code](https://core.telegram.org/api/qr-login)

QR code login flow
