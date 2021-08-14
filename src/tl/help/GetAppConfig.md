# help.GetAppConfig

Get app-specific configuration, see [client configuration](https://core.telegram.org/api/config#client-configuration) for more info on the result.

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

  const result = await client.invoke(new Api.help.GetAppConfig({}));
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

  const result: Api.JSONValue = await client.invoke(
    new Api.help.GetAppConfig({})
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

## Result

[JSONValue](https://core.telegram.org/type/JSONValue), see [client configuration](https://core.telegram.org/api/config#client-configuration) for more info on the result

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
