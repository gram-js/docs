# messages.GetSearchResultsCalendar

Returns information about the next messages of the specified type in the chat split by days.



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

    const result = await client.invoke(new Api.messages.GetSearchResultsCalendar({
    peer: 'username',
    filter: new Api.InputMessagesFilterPhotos({}),
    offsetId: 43,
    offsetDate: 43,
    savedPeerId: 'username'
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

    const result: Api.messages.SearchResultsCalendar = await client.invoke(new Api.messages.GetSearchResultsCalendar({
    peer: 'username',
    filter: new Api.InputMessagesFilterPhotos({}),
    offsetId: 43,
    offsetDate: 43,
    savedPeerId: 'username'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Peer where to search 
| **filter** | [MessagesFilter](https://core.telegram.org/type/MessagesFilter) | Message filter, [inputMessagesFilterEmpty](https://core.telegram.org/constructor/inputMessagesFilterEmpty), [inputMessagesFilterMyMentions](https://core.telegram.org/constructor/inputMessagesFilterMyMentions) filters are not supported by this method. 
| **offsetId** | [int](https://core.telegram.org/type/int) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) 
| **offsetDate** | [int](https://core.telegram.org/type/int) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) 


## Result

[messages.SearchResultsCalendar](https://core.telegram.org/type/messages.SearchResultsCalendar)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | FILTER\_NOT\_SUPPORTED | The specified filter cannot be used in this context. 


## Can bots use this method?

No

## Related pages

#### [inputMessagesFilterEmpty](https://core.telegram.org/constructor/inputMessagesFilterEmpty)

Filter is absent.



#### [inputMessagesFilterMyMentions](https://core.telegram.org/constructor/inputMessagesFilterMyMentions)

Return only messages where the current user was [mentioned](https://core.telegram.org/api/mentions).



#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.




