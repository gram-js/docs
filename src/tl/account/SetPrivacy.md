# account.SetPrivacy

Change privacy settings of current account

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
    new Api.account.SetPrivacy({
      key: new Api.InputPrivacyKeyStatusTimestamp({}),
      rules: [new Api.InputPrivacyValueAllowContacts({})],
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
  const result: Api.account.PrivacyRules = await client.invoke(
    new Api.account.SetPrivacy({
      key: new Api.InputPrivacyKeyStatusTimestamp({}),
      rules: [new Api.InputPrivacyValueAllowContacts({})],
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|   Name    | Type                                                                                                                     | Description                            |
| :-------: | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- |
|  **key**  | [InputPrivacyKey](https://core.telegram.org/type/InputPrivacyKey)                                                        | Peers to which the privacy rules apply |
| **rules** | [Vector](https://core.telegram.org/type/Vector%20t)<[InputPrivacyRule](https://core.telegram.org/type/InputPrivacyRule)> | New privacy rules                      |

## Result

[account.PrivacyRules](https://core.telegram.org/type/account.PrivacyRules)

## Possible errors

| Code | Type                  | Description                                       |
| :--: | --------------------- | ------------------------------------------------- |
| 400  | PRIVACY_KEY_INVALID   | The privacy key is invalid                        |
| 400  | PRIVACY_VALUE_INVALID | The specified privacy rule combination is invalid |

## Can bots use this method?

No

## Related pages
