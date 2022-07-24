# messages.SetBotShippingResults

If you sent an invoice requesting a shipping address and the parameter is\_flexible was specified, the bot will receive an [updateBotShippingQuery](https://core.telegram.org/constructor/updateBotShippingQuery) update. Use this method to reply to shipping queries.



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession(''); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    await client.connect() // This assumes you have already authenticated with .start()

    const result = await client.invoke(new Api.messages.SetBotShippingResults({
    queryId: BigInt('-4156887774564'),
    error: 'some string here',
    shippingOptions: [new Api.ShippingOption({
        id: 'some string here',
        title: 'My very normal title',
        prices: [new Api.LabeledPrice({
            label: 'some string here',
            amount: BigInt('-4156887774564')
        })]
    })]
}));
    console.log(result); // prints the result
})();
```
:::

:::tab{title="TypeScript"}
```ts
import {Api, TelegramClient} from 'telegram';
import {StringSession} from 'telegram/sessions';

const session = new StringSession(''); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    await client.connect() // This assumes you have already authenticated with .start()

    const result: Api.Bool = await client.invoke(new Api.messages.SetBotShippingResults({
    queryId: BigInt('-4156887774564'),
    error: 'some string here',
    shippingOptions: [new Api.ShippingOption({
        id: 'some string here',
        title: 'My very normal title',
        prices: [new Api.LabeledPrice({
            label: 'some string here',
            amount: BigInt('-4156887774564')
        })]
    })]
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **flags** | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) 
| **queryId** | [long](https://core.telegram.org/type/long) | Unique identifier for the query to be answered 
| **error** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](https://core.telegram.org/type/string) | Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable"). Telegram will display this message to the user. 
| **shippingOptions** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[ShippingOption](https://core.telegram.org/type/ShippingOption)> | A vector of available shipping options. 


## Result

[Bool](https://core.telegram.org/type/Bool)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | QUERY\_ID\_INVALID | The query ID is invalid. 


## Can bots use this method?

Yes

## Related pages

#### [updateBotShippingQuery](https://core.telegram.org/constructor/updateBotShippingQuery)

This object contains information about an incoming shipping query.




