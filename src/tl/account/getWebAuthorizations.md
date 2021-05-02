# account.getWebAuthorizations

Get web [login widget](https://core.telegram.org/widgets/login) authorizations

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
        new Api.account.getWebAuthorizations({}),
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
    const result: Api.account.WebAuthorizations = await client.invoke(
        new Api.account.getWebAuthorizations({}),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
account.webAuthorizations#ed56c9fc authorizations:Vector<WebAuthorization> users:Vector<User> = account.WebAuthorizations;
---functions---
account.getWebAuthorizations#182e6d6f = account.WebAuthorizations;
```

## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

## Result

[account.WebAuthorizations](https://core.telegram.org/type/account.WebAuthorizations)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

### [Telegram Login Widget](https://core.telegram.org/widgets/login)
