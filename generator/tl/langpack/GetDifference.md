# langpack.GetDifference

Get new [updates](https://core.telegram.org/api/updates).



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

    const result = await client.invoke(new Api.langpack.GetDifference({
    langPack: 'some string here',
    langCode: 'some string here',
    fromVersion: 43
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

    const result: Api.LangPackDifference = await client.invoke(new Api.langpack.GetDifference({
    langPack: 'some string here',
    langCode: 'some string here',
    fromVersion: 43
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
| **pts** | [int](https://core.telegram.org/type/int) | PTS, see [updates](https://core.telegram.org/api/updates). 
| **ptsTotalLimit** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](https://core.telegram.org/type/int) | For fast updating: if provided and `pts + pts_total_limit < remote pts`, [updates.differenceTooLong](https://core.telegram.org/constructor/updates.differenceTooLong) will be returned.Simply tells the server to not return the difference if it is bigger than `pts_total_limit`If the remote pts is too big (> ~4000000), this field will default to 1000000 
| **date** | [int](https://core.telegram.org/type/int) | date, see [updates](https://core.telegram.org/api/updates). 
| **qts** | [int](https://core.telegram.org/type/int) | QTS, see [updates](https://core.telegram.org/api/updates). 


## Result

[updates.Difference](https://core.telegram.org/type/updates.Difference)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | CDN\_METHOD\_INVALID | You can't call this method in a CDN DC. 
| 400 | CHANNEL\_INVALID | The provided channel is invalid. 
| 403 | CHAT\_WRITE\_FORBIDDEN | You can't write in this chat. 
| 400 | DATE\_EMPTY | Date empty. 
| 400 | MSG\_ID\_INVALID | Invalid message ID provided. 
| 400 | PERSISTENT\_TIMESTAMP\_EMPTY | Persistent timestamp empty. 
| 400 | PERSISTENT\_TIMESTAMP\_INVALID | Persistent timestamp invalid. 


## Can bots use this method?

Yes

## Related pages

#### [Working with Updates](https://core.telegram.org/api/updates)

How to subscribe to updates and handle them properly.



#### [updates.differenceTooLong](https://core.telegram.org/constructor/updates.differenceTooLong)

The difference is [too long](https://core.telegram.org/api/updates#recovering-gaps), and the specified state must be used to refetch updates.




