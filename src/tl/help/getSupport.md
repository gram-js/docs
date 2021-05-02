# help.getSupport

Returns the support user for the 'ask a question' feature.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.help.getSupport({}));
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
    const result: Api.help.Support = await client.invoke(
        new Api.help.getSupport({}),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
help.support#17c6b5f6 phone_number:string user:User = help.Support;
---functions---
help.getSupport#9cdf08cd = help.Support;
```

## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

## Result

[help.Support](https://core.telegram.org/type/help.Support)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
