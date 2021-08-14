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

| Code | Type                              | Description                         |
| :--: | --------------------------------- | ----------------------------------- |
| 400  | CONNECTION_API_ID_INVALID         | The provided API id is invalid      |
| 400  | CONNECTION_APP_VERSION_EMPTY      | App version is empty                |
| 400  | CONNECTION_DEVICE_MODEL_EMPTY     | Device model empty                  |
| 400  | CONNECTION_LANG_PACK_INVALID      | Language pack invalid               |
| 400  | CONNECTION_LAYER_INVALID          | Layer invalid                       |
| 400  | CONNECTION_NOT_INITED             | Connection not initialized          |
| 400  | CONNECTION_SYSTEM_EMPTY           | Connection system empty             |
| 400  | CONNECTION_SYSTEM_LANG_CODE_EMPTY | The system_lang_code field is empty |
| 400  | DATA_INVALID                      | Encrypted data invalid              |
| 400  | INPUT_LAYER_INVALID               | The provided layer is invalid       |
| 400  | MSG_ID_INVALID                    | Invalid message ID provided         |

## Can bots use this method?

Yes

## Related pages
