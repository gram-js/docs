# account.getAuthorizations

Get logged-in sessions

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.getAuthorizations({}));
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
    const result: Api.account.Authorizations = await client.invoke(
        new Api.account.getAuthorizations({}),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
account.authorizations#1250abde authorizations:Vector<Authorization> = account.Authorizations;
---functions---
account.getAuthorizations#e320c158 = account.Authorizations;
```

## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

## Result

[account.Authorizations](https://core.telegram.org/type/account.Authorizations)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
