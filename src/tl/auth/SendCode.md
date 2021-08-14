# auth.SendCode

Resend the login code via another medium, the phone code type is determined by the return value of the previous auth.sendCode/auth.resendCode: see [login](https://core.telegram.org/api/auth) for more info.

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
    new Api.auth.SendCode({
      phoneNumber: "some string here",
      apiId: 43,
      apiHash: "some string here",
      settings: new Api.CodeSettings({
        allowFlashcall: true,
        currentNumber: true,
        allowAppHash: true,
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

  const result: Api.auth.SentCode = await client.invoke(
    new Api.auth.SendCode({
      phoneNumber: "some string here",
      apiId: 43,
      apiHash: "some string here",
      settings: new Api.CodeSettings({
        allowFlashcall: true,
        currentNumber: true,
        allowAppHash: true,
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|       Name        | Type                                            | Description                                                                                       |
| :---------------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  **phoneNumber**  | [string](https://core.telegram.org/type/string) | The phone number                                                                                  |
| **phoneCodeHash** | [string](https://core.telegram.org/type/string) | The phone code hash obtained from [auth.sendCode](https://core.telegram.org/method/auth.sendCode) |

## Result

[auth.SentCode](https://core.telegram.org/type/auth.SentCode)

## Possible errors

| Code | Type                  | Description                                                                                                                                                                                                                   |
| :--: | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 400  | PHONE_CODE_EXPIRED    | The phone code you provided has expired, this may happen if it was sent to any chat on telegram (if the code is sent through a telegram chat (not the official account) to avoid it append or prepend to the code some chars) |
| 400  | PHONE_CODE_HASH_EMPTY | phone_code_hash is missing                                                                                                                                                                                                    |
| 400  | PHONE_NUMBER_INVALID  | The phone number is invalid                                                                                                                                                                                                   |

## Can bots use this method?

No

## Related pages

#### [auth.sendCode](https://core.telegram.org/method/auth.sendCode)

Send the verification code for login

#### [User Authorization](https://core.telegram.org/api/auth)

How to register a user's phone to start using the API.
