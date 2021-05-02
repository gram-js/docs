# updates.getState

Returns a current state of updates.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.updates.getState({}));
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
    const result: Api.updates.State = await client.invoke(
        new Api.updates.getState({}),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
updates.state#a56c2a3e pts:int qts:int date:int seq:int unread_count:int = updates.State;
---functions---
updates.getState#edd4882a = updates.State;
```

## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

## Result

[updates.State](https://core.telegram.org/type/updates.State)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
