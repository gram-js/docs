# phone.saveCallDebug

Send phone call debug data to server

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.phone.saveCallDebug({
		peer: new Api.InputPhoneCall({...}),
		debug: new Api.DataJSON({...}),
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
    const result: Api.Bool = await client.invoke(new Api.phone.saveCallDebug({
		peer: new Api.InputPhoneCall({...}),
		debug: new Api.DataJSON({...}),
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
phone.saveCallDebug#277add7e peer:InputPhoneCall debug:DataJSON = Bool;
```

## Parameters

|   Name    | Type                                                            | Description                              |
| :-------: | --------------------------------------------------------------- | ---------------------------------------- |
| **peer**  | [InputPhoneCall](https://core.telegram.org/type/InputPhoneCall) | Phone call                               |
| **debug** | [DataJSON](https://core.telegram.org/type/DataJSON)             | Debug statistics obtained from libtgvoip |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type              | Description                              |
| :--: | ----------------- | ---------------------------------------- |
| 400  | CALL_PEER_INVALID | The provided call peer object is invalid |
| 400  | DATA_JSON_INVALID | The provided JSON data is invalid        |

## Can bots use this method?

Yes

## Related pages
