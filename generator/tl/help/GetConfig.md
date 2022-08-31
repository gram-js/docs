# help.GetConfig

Returns current configuration, including data center configuration.

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

  const result = await client.invoke(new Api.help.GetConfig({}));
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

  const result: Api.Config = await client.invoke(new Api.help.GetConfig({}));
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

## Result

[Config](https://core.telegram.org/type/Config)

## Possible errors

| Code | Type                         | Description                                              |
| :--: | ---------------------------- | -------------------------------------------------------- |
| 400  | CONNECTION_API_ID_INVALID    | The provided API id is invalid.                          |
| 400  | CONNECTION_APP_VERSION_EMPTY | App version is empty.                                    |
| 400  | CONNECTION_LAYER_INVALID     | Layer invalid.                                           |
| 400  | DATA_INVALID                 | Encrypted data invalid.                                  |
| 400  | MSG_ID_INVALID               | Invalid message ID provided.                             |
| 400  | USERNAME_INVALID             | The provided username is not valid.                      |
| 403  | USER_PRIVACY_RESTRICTED      | The user's privacy settings do not allow you to do this. |

## Can bots use this method?

Yes

## Related pages
