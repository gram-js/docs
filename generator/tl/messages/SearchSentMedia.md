# messages.SearchSentMedia

View and search recently sent media.  

This method does not support pagination.



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

    const result = await client.invoke(new Api.messages.SearchSentMedia({
    q: 'some string here',
    filter: new Api.InputMessagesFilterPhotos({}),
    limit: 100
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

    const result: Api.messages.Messages = await client.invoke(new Api.messages.SearchSentMedia({
    q: 'some string here',
    filter: new Api.InputMessagesFilterPhotos({}),
    limit: 100
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **q** | [string](https://core.telegram.org/type/string) | Optional search query 
| **filter** | [MessagesFilter](https://core.telegram.org/type/MessagesFilter) | Message filter 
| **limit** | [int](https://core.telegram.org/type/int) | Maximum number of results to return (max 100). 


## Result

[messages.Messages](https://core.telegram.org/type/messages.Messages)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages


