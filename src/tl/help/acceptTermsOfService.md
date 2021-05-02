# help.acceptTermsOfService

Accept the new terms of service

## Example

::::tabs

:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.help.acceptTermsOfService({
		id: new Api.DataJSON({...}),
		}));
    console.log(result); // prints the result
})();
```

:::

:::tab{title="TypeScript"}

```ts
import {Api, TelegramClient} from 'telegram';
import {StringSession} from 'telegram/sessions';

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.Bool = await client.invoke(new Api.help.acceptTermsOfService({
		id: new Api.DataJSON({...}),
		}));
    console.log(result); // prints the result
})();
```

:::

::::

## TL schema

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
help.acceptTermsOfService#ee72f79a id:DataJSON = Bool;
```

## Parameters

|  Name  | Type                                                | Description            |
| :----: | --------------------------------------------------- | ---------------------- |
| **id** | [DataJSON](https://core.telegram.org/type/DataJSON) | ID of terms of service |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code  | Type | Description |
| :---: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
