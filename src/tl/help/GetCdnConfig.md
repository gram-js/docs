# help.GetCdnConfig

Get configuration for [CDN](https://core.telegram.org/cdn) file downloads.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const session = new StringSession("");
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  const result = await client.invoke(new Api.help.GetCdnConfig({}));
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
  const result: Api.CdnConfig = await client.invoke(
    new Api.help.GetCdnConfig({})
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

[CdnConfig](https://core.telegram.org/type/CdnConfig)

## Possible errors

| Code | Type                | Description                                                                           |
| :--: | ------------------- | ------------------------------------------------------------------------------------- |
| 401  | AUTH_KEY_PERM_EMPTY | The temporary auth key must be binded to the permanent auth key to use these methods. |

## Can bots use this method?

Yes

## Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)
