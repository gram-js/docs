# users.SetSecureValueErrors

Notify the user that the sent [passport](https://core.telegram.org/passport) data contains some errors The user will not be able to re-submit their Passport data to you until the errors are fixed (the contents of the field for which you returned the error must change).

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
    new Api.users.SetSecureValueErrors({
      id: "username",
      errors: [
        new Api.SecureValueErrorData({
          type: new Api.SecureValueTypePersonalDetails({}),
          dataHash: Buffer.from("arbitrary data here"),
          field: "some string here",
          text: "some string here",
        }),
      ],
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
    new Api.users.SetSecureValueErrors({
      id: "username",
      errors: [
        new Api.SecureValueErrorData({
          type: new Api.SecureValueTypePersonalDetails({}),
          dataHash: Buffer.from("arbitrary data here"),
          field: "some string here",
          text: "some string here",
        }),
      ],
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name    | Type                                                                                                                     | Description |
| :--------: | ------------------------------------------------------------------------------------------------------------------------ | ----------- |
|   **id**   | [InputUser](https://core.telegram.org/type/InputUser)                                                                    | The user    |
| **errors** | [Vector](https://core.telegram.org/type/Vector%20t)<[SecureValueError](https://core.telegram.org/type/SecureValueError)> | Errors      |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type            | Description                      |
| :--: | --------------- | -------------------------------- |
| 400  | USER_ID_INVALID | The provided user ID is invalid. |

## Can bots use this method?

Yes

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)
