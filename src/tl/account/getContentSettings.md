# account.getContentSettings

Get sensitive content settings

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.getContentSettings({}));
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
    const result: Api.account.ContentSettings = await client.invoke(
        new Api.account.getContentSettings({}),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
account.contentSettings#57e28221 flags:# sensitive_enabled:flags.0?true sensitive_can_change:flags.1?true = account.ContentSettings;
---functions---
account.getContentSettings#8b9b4dae = account.ContentSettings;
```

## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

## Result

[account.ContentSettings](https://core.telegram.org/type/account.ContentSettings)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
