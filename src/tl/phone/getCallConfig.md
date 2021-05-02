# phone.getCallConfig

Get phone call configuration to be passed to libtgvoip's shared config

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.phone.getCallConfig({}));
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
    const result: Api.DataJSON = await client.invoke(
        new Api.phone.getCallConfig({}),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
dataJSON#7d748d04 data:string = DataJSON;
---functions---
phone.getCallConfig#55451fa9 = DataJSON;
```

## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

## Result

[DataJSON](https://core.telegram.org/type/DataJSON)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
