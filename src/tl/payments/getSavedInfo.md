# payments.getSavedInfo

Get saved payment information

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.payments.getSavedInfo({}));
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
    const result: Api.payments.SavedInfo = await client.invoke(
        new Api.payments.getSavedInfo({}),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
payments.savedInfo#fb8fe43c flags:# has_saved_credentials:flags.1?true saved_info:flags.0?PaymentRequestedInfo = payments.SavedInfo;
---functions---
payments.getSavedInfo#227d824b = payments.SavedInfo;
```

## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

## Result

[payments.SavedInfo](https://core.telegram.org/type/payments.SavedInfo)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
