# auth.ImportBotAuthorization

Login as a bot

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
    new Api.auth.ImportBotAuthorization({
      flags: 43,
      apiId: 43,
      apiHash: "some string here",
      botAuthToken: "some string here",
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

  const result: Api.auth.Authorization = await client.invoke(
    new Api.auth.ImportBotAuthorization({
      flags: 43,
      apiId: 43,
      apiHash: "some string here",
      botAuthToken: "some string here",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|       Name       | Type                                            | Description                                                                             |
| :--------------: | ----------------------------------------------- | --------------------------------------------------------------------------------------- |
|    **flags**     | [int](https://core.telegram.org/type/int)       | Reserved for future use                                                                 |
|    **apiId**     | [int](https://core.telegram.org/type/int)       | Application identifier (see. [App configuration](https://core.telegram.org/myapp))      |
|   **apiHash**    | [string](https://core.telegram.org/type/string) | Application identifier hash (see. [App configuration](https://core.telegram.org/myapp)) |
| **botAuthToken** | [string](https://core.telegram.org/type/string) | Bot token (see [bots](https://core.telegram.org/bots))                                  |

## Result

Returns an [auth.Authorization](https://core.telegram.org/type/auth.Authorization) object with information on the new authorization.

## Possible errors

| Code | Type                 | Description                                |
| :--: | -------------------- | ------------------------------------------ |
| 400  | ACCESS_TOKEN_EXPIRED | Bot token expired                          |
| 400  | ACCESS_TOKEN_INVALID | The provided token is not valid            |
| 400  | API_ID_INVALID       | The api_id/api_hash combination is invalid |
| 401  | AUTH_KEY_INVALID     | Auth key invalid                           |

## Can bots use this method?

Yes

## Related pages

#### [Bots: An introduction for developers](https://core.telegram.org/bots)
