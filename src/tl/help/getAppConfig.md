# help.getAppConfig

Get app-specific configuration, see [client configuration](https://core.telegram.org/api/config#client-configuration) for more info on the result.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.help.getAppConfig({}));
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
    const result: Api.JSONValue, see client configuration for more info on the result = await client.invoke(new Api.help.getAppConfig({
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
jsonNull#3f6d7b68 = JSONValue;
jsonBool#c7345e6a value:Bool = JSONValue;
jsonNumber#2be0dfa4 value:double = JSONValue;
jsonString#b71e767a value:string = JSONValue;
jsonArray#f7444763 value:Vector<JSONValue> = JSONValue;
jsonObject#99c1d49d value:Vector<JSONObjectValue> = JSONValue;
---functions---
help.getAppConfig#98914110 = JSONValue;
```

## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

## Result

[JSONValue](https://core.telegram.org/type/JSONValue), see [client configuration](https://core.telegram.org/api/config#client-configuration) for more info on the result

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
