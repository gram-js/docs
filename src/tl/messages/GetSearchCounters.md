# messages.GetSearchCounters

Get the number of results that would be found by a [messages.search](https://core.telegram.org/method/messages.search) call with the same parameters



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.GetSearchCounters({
    peer: 'username',
    filters: [new Api.InputMessagesFilterPhotos({})]
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
    const result: Api.Vector<messages.SearchCounter> = await client.invoke(new Api.messages.GetSearchCounters({
    peer: 'username',
    filters: [new Api.InputMessagesFilterPhotos({})]
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
| **filters** | [Vector](https://core.telegram.org/type/Vector%20t)<[MessagesFilter](https://core.telegram.org/type/MessagesFilter)> | Search filters 


## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[messages.SearchCounter](https://core.telegram.org/type/messages.SearchCounter)>



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |


## Can bots use this method?

Yes

## Related pages

#### [messages.search](https://core.telegram.org/method/messages.search)

Gets back found messages




