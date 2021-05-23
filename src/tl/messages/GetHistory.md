# messages.GetHistory

Gets back the conversation history with one interlocutor / within a chat



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.GetHistory({
    peer: 'username',
    offsetId: 43,
    offsetDate: 43,
    addOffset: 0,
    limit: 100,
    maxId: 0,
    minId: 0,
    hash: 0
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
    const result: Api.messages.Messages = await client.invoke(new Api.messages.GetHistory({
    peer: 'username',
    offsetId: 43,
    offsetDate: 43,
    addOffset: 0,
    limit: 100,
    maxId: 0,
    minId: 0,
    hash: 0
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Target peer 
| **offsetId** | [int](https://core.telegram.org/type/int) | Only return messages starting from the specified message ID 
| **offsetDate** | [int](https://core.telegram.org/type/int) | Only return messages sent before the specified date 
| **addOffset** | [int](https://core.telegram.org/type/int) | Number of list elements to be skipped, negative values are also accepted. 
| **limit** | [int](https://core.telegram.org/type/int) | Number of results to return 
| **maxId** | [int](https://core.telegram.org/type/int) | If a positive value was transferred, the method will return only messages with IDs less than **max\_id** 
| **minId** | [int](https://core.telegram.org/type/int) | If a positive value was transferred, the method will return only messages with IDs more than **min\_id** 
| **hash** | [int](https://core.telegram.org/type/int) | [Result hash](https://core.telegram.org/api/offsets) 


## Result

[messages.Messages](https://core.telegram.org/type/messages.Messages)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 401 | AUTH\_KEY\_PERM\_EMPTY | The temporary auth key must be binded to the permanent auth key to use these methods. 
| 400 | CHANNEL\_INVALID | The provided channel is invalid 
| 400 | CHANNEL\_PRIVATE | You haven't joined this channel/supergroup 
| 400 | CHAT\_ID\_INVALID | The provided chat id is invalid 
| 400 | CONNECTION\_DEVICE\_MODEL\_EMPTY | Device model empty 
| 400 | MSG\_ID\_INVALID | Invalid message ID provided 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid 


## Can bots use this method?

Yes

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.




