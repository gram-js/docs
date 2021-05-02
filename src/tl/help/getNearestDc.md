# help.getNearestDc

Returns info on data centre nearest to the user.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.help.getNearestDc({}));
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
    const result: Api.NearestDc = await client.invoke(
        new Api.help.getNearestDc({}),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
nearestDc#8e1a1775 country:string this_dc:int nearest_dc:int = NearestDc;
---functions---
help.getNearestDc#1fb33026 = NearestDc;
```

## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

## Result

[NearestDc](https://core.telegram.org/type/NearestDc)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
