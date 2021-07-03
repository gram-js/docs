# account.SetGlobalPrivacySettings

Set global privacy settings

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
    new Api.account.SetGlobalPrivacySettings({
      settings: new Api.GlobalPrivacySettings({
        archiveAndMuteNewNoncontactPeers: false,
      }),
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
  const result: Api.GlobalPrivacySettings = await client.invoke(
    new Api.account.SetGlobalPrivacySettings({
      settings: new Api.GlobalPrivacySettings({
        archiveAndMuteNewNoncontactPeers: false,
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name     | Type                                                                          | Description             |
| :----------: | ----------------------------------------------------------------------------- | ----------------------- |
| **settings** | [GlobalPrivacySettings](https://core.telegram.org/type/GlobalPrivacySettings) | Global privacy settings |

## Result

[GlobalPrivacySettings](https://core.telegram.org/type/GlobalPrivacySettings)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
