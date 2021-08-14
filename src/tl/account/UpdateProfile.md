# account.UpdateProfile

Updates user profile.

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
    new Api.account.UpdateProfile({
      firstName: "some string here",
      lastName: "some string here",
      about: "some string here",
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

  const result: Api.User = await client.invoke(
    new Api.account.UpdateProfile({
      firstName: "some string here",
      lastName: "some string here",
      about: "some string here",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name      | Type                                                                                                                           | Description                                                                                             |
| :-----------: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
|   **flags**   | [#](https://core.telegram.org/type/%23)                                                                                        | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| **firstName** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](https://core.telegram.org/type/string) | New user first name                                                                                     |
| **lastName**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](https://core.telegram.org/type/string) | New user last name                                                                                      |
|   **about**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](https://core.telegram.org/type/string) | New bio                                                                                                 |

## Result

Returns [User](https://core.telegram.org/type/User) object containing the updated current user profile.

## Possible errors

| Code | Type              | Description               |
| :--: | ----------------- | ------------------------- |
| 400  | ABOUT_TOO_LONG    | About string too long     |
| 400  | FIRSTNAME_INVALID | The first name is invalid |

## Can bots use this method?

No

## Related pages
