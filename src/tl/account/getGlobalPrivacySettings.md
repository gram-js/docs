# account.getGlobalPrivacySettings

Get global privacy settings

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(
        new Api.account.getGlobalPrivacySettings({}),
    );
    console.log(result); // prints the result
})();
```

:::

:::tab{title="TypeScript"}

```ts
import { Api, TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.GlobalPrivacySettings = await client.invoke(
        new Api.account.getGlobalPrivacySettings({}),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
globalPrivacySettings#bea2f424 flags:# archive_and_mute_new_noncontact_peers:flags.0?Bool = GlobalPrivacySettings;
---functions---
account.getGlobalPrivacySettings#eb2b4cf6 = GlobalPrivacySettings;
```

## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

## Result

[GlobalPrivacySettings](https://core.telegram.org/type/GlobalPrivacySettings)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
