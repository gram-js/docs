# account.getAutoDownloadSettings

Get media autodownload settings

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
        new Api.account.getAutoDownloadSettings({}),
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
    const result: Api.account.AutoDownloadSettings = await client.invoke(
        new Api.account.getAutoDownloadSettings({}),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
account.autoDownloadSettings#63cacf26 low:AutoDownloadSettings medium:AutoDownloadSettings high:AutoDownloadSettings = account.AutoDownloadSettings;
---functions---
account.getAutoDownloadSettings#56da0b3f = account.AutoDownloadSettings;
```

## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

## Result

[account.AutoDownloadSettings](https://core.telegram.org/type/account.AutoDownloadSettings)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
