# account.getAccountTTL

Get days to live of account

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.getAccountTTL({}));
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
    const result: Api.AccountDaysTTL = await client.invoke(
        new Api.account.getAccountTTL({}),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
accountDaysTTL#b8d0afdf days:int = AccountDaysTTL;
---functions---
account.getAccountTTL#8fc711d = AccountDaysTTL;
```

## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

## Result

[AccountDaysTTL](https://core.telegram.org/type/AccountDaysTTL)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
