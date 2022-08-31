# auth.ImportLoginToken

Login using a redirected login token, generated in case of DC mismatch during [QR code login](https://core.telegram.org/api/qr-login).

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
    new Api.auth.ImportLoginToken({
      token: Buffer.from("arbitrary data here"),
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
    new Api.auth.ImportLoginToken({
      token: Buffer.from("arbitrary data here"),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|   Name    | Type                                          | Description |
| :-------: | --------------------------------------------- | ----------- |
| **token** | [bytes](https://core.telegram.org/type/bytes) | Login token |

## Result

[auth.LoginToken](https://core.telegram.org/type/auth.LoginToken)

## Possible errors

| Code | Type                        | Description                                    |
| :--: | --------------------------- | ---------------------------------------------- |
| 400  | AUTH_TOKEN_ALREADY_ACCEPTED | The specified auth token was already accepted. |
| 400  | AUTH_TOKEN_EXPIRED          | The authorization token has expired.           |
| 400  | AUTH_TOKEN_INVALID          | The specified auth token is invalid.           |
| 400  | AUTH_TOKEN_INVALIDX         | The specified auth token is invalid.           |

## Can bots use this method?

No

## Related pages

#### [Login via QR code](https://core.telegram.org/api/qr-login)

QR code login flow
