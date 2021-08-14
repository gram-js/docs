# account.GetPrivacy

Get privacy settings of current account

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
    new Api.account.GetPrivacy({
      key: new Api.InputPrivacyKeyStatusTimestamp({}),
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

  const result: Api.account.PrivacyRules = await client.invoke(
    new Api.account.GetPrivacy({
      key: new Api.InputPrivacyKeyStatusTimestamp({}),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|  Name   | Type                                                              | Description                                            |
| :-----: | ----------------------------------------------------------------- | ------------------------------------------------------ |
| **key** | [InputPrivacyKey](https://core.telegram.org/type/InputPrivacyKey) | Peer category whose privacy settings should be fetched |

## Result

[account.PrivacyRules](https://core.telegram.org/type/account.PrivacyRules)

## Possible errors

| Code | Type                | Description                |
| :--: | ------------------- | -------------------------- |
| 400  | PRIVACY_KEY_INVALID | The privacy key is invalid |

## Can bots use this method?

No

## Related pages
