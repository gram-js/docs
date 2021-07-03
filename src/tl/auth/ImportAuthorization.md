# auth.ImportAuthorization

Logs in a user using a key transmitted from his native data-centre.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const session = new StringSession("");
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  const result = await client.invoke(
    new Api.auth.ImportAuthorization({
      id: 43,
      bytes: Buffer.from("arbitrary data here"),
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

const session = new StringSession("");
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  const result: Api.auth.Authorization = await client.invoke(
    new Api.auth.ImportAuthorization({
      id: 43,
      bytes: Buffer.from("arbitrary data here"),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|   Name    | Type                                          | Description       |
| :-------: | --------------------------------------------- | ----------------- |
|  **id**   | [int](https://core.telegram.org/type/int)     | User ID           |
| **bytes** | [bytes](https://core.telegram.org/type/bytes) | Authorization key |

## Result

[auth.Authorization](https://core.telegram.org/type/auth.Authorization)

## Possible errors

| Code | Type               | Description                           |
| :--: | ------------------ | ------------------------------------- |
| 400  | AUTH_BYTES_INVALID | The provided authorization is invalid |
| 400  | USER_ID_INVALID    | The provided user ID is invalid       |

## Can bots use this method?

Yes

## Related pages
