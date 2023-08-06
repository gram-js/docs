# messages.SetBotPrecheckoutResults

Once the user has confirmed their payment and shipping details, the bot receives an [updateBotPrecheckoutQuery](https://core.telegram.org/constructor/updateBotPrecheckoutQuery) update.  

Use this method to respond to such pre-checkout queries.  

**Note**: Telegram must receive an answer within 10 seconds after the pre-checkout query was sent.



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

    const result = await client.invoke(new Api.messages.SetBotPrecheckoutResults({
    queryId: BigInt('-4156887774564'),
    success: true,
    error: 'some string here'
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

    const result: Api.Bool = await client.invoke(new Api.messages.SetBotPrecheckoutResults({
    queryId: BigInt('-4156887774564'),
    success: true,
    error: 'some string here'
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
| **success** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true) | Set this flag if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order, otherwise do not set it, and set the `error` field, instead 
| **queryId** | [long](https://core.telegram.org/type/long) | Unique identifier for the query to be answered 
| **error** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](https://core.telegram.org/type/string) | Required if the `success` isn't set. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user. 


## Result

[Bool](https://core.telegram.org/type/Bool)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | ERROR\_TEXT\_EMPTY | The provided error message is empty. 


## Can bots use this method?

Yes

## Related pages

#### [updateBotPrecheckoutQuery](https://core.telegram.org/constructor/updateBotPrecheckoutQuery)

This object contains information about an incoming pre-checkout query.




