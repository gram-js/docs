# messages.setBotShippingResults

If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the bot will receive an [updateBotShippingQuery](https://core.telegram.org/constructor/updateBotShippingQuery) update. Use this method to reply to shipping queries.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.setBotShippingResults({
		queryId: 5777512,
		error: 'random string here',
		shippingOptions: [new Api.ShippingOption({...})],
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
    const result: Api.Bool = await client.invoke(new Api.messages.setBotShippingResults({
		queryId: 5777512,
		error: 'random string here',
		shippingOptions: [new Api.ShippingOption({...})],
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
messages.setBotShippingResults#e5f672fa flags:# query_id:long error:flags.0?string shipping_options:flags.1?Vector<ShippingOption> = Bool;
```

## Parameters

|         Name         | Type                                                                                                                                                                                                   | Description                                                                                                                                                                                                    |
| :------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      **flags**       | [#](https://core.telegram.org/type/%23)                                                                                                                                                                | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)                                                                                                        |
|     **query_id**     | [long](https://core.telegram.org/type/long)                                                                                                                                                            | Unique identifier for the query to be answered                                                                                                                                                                 |
|      **error**       | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](https://core.telegram.org/type/string)                                                                         | Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user. |
| **shipping_options** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t) < [ShippingOption](https://core.telegram.org/type/ShippingOption) > | A vector of available shipping options.                                                                                                                                                                        |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type             | Description             |
| :--: | ---------------- | ----------------------- |
| 400  | QUERY_ID_INVALID | The query ID is invalid |

## Can bots use this method?

Yes

## Related pages

#### [updateBotShippingQuery](https://core.telegram.org/constructor/updateBotShippingQuery)

This object contains information about an incoming shipping query.
