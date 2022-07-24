# messages.GetInlineBotResults

Query an inline bot



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

    const result = await client.invoke(new Api.messages.GetInlineBotResults({
    bot: 'username',
    peer: 'username',
    query: 'some string here',
    offset: 'some string here',
    geoPoint: new Api.InputGeoPoint({
        lat: 8.24,
        long: 8.24,
        accuracyRadius: 43
    })
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

    const result: Api.messages.BotResults = await client.invoke(new Api.messages.GetInlineBotResults({
    bot: 'username',
    peer: 'username',
    query: 'some string here',
    offset: 'some string here',
    geoPoint: new Api.InputGeoPoint({
        lat: 8.24,
        long: 8.24,
        accuracyRadius: 43
    })
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
| **bot** | [InputUser](https://core.telegram.org/type/InputUser) | The bot to query 
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | The currently opened chat 
| **geoPoint** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputGeoPoint](https://core.telegram.org/type/InputGeoPoint) | The geolocation, if requested 
| **query** | [string](https://core.telegram.org/type/string) | The query 
| **offset** | [string](https://core.telegram.org/type/string) | The offset within the results, will be passed directly as-is to the bot. 


## Result

[messages.BotResults](https://core.telegram.org/type/messages.BotResults)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | BOT\_INLINE\_DISABLED | This bot can't be used in inline mode. 
| 400 | BOT\_INVALID | This is not a valid bot. 
| 400 | BOT\_RESPONSE\_TIMEOUT | A timeout occurred while fetching data from the bot. 
| 400 | CHANNEL\_INVALID | The provided channel is invalid. 
| 400 | CHANNEL\_PRIVATE | You haven't joined this channel/supergroup. 
| 400 | INPUT\_USER\_DEACTIVATED | The specified user was deleted. 
| 400 | MSG\_ID\_INVALID | Invalid message ID provided. 
| -503 | Timeout | Timeout while fetching data. 


## Can bots use this method?

No

## Related pages


