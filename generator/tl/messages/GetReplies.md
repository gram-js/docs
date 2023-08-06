# messages.GetReplies

Get messages in a reply thread



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

    const result = await client.invoke(new Api.messages.GetReplies({
    peer: 'username',
    msgId: 43,
    offsetId: 43,
    offsetDate: 43,
    addOffset: 0,
    limit: 100,
    maxId: 0,
    minId: 0,
    hash: BigInt('-4156887774564')
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

    const result: Api.messages.Messages = await client.invoke(new Api.messages.GetReplies({
    peer: 'username',
    msgId: 43,
    offsetId: 43,
    offsetDate: 43,
    addOffset: 0,
    limit: 100,
    maxId: 0,
    minId: 0,
    hash: BigInt('-4156887774564')
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Peer 
| **msgId** | [int](https://core.telegram.org/type/int) | Message ID 
| **offsetId** | [int](https://core.telegram.org/type/int) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) 
| **offsetDate** | [int](https://core.telegram.org/type/int) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) 
| **addOffset** | [int](https://core.telegram.org/type/int) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) 
| **limit** | [int](https://core.telegram.org/type/int) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) 
| **maxId** | [int](https://core.telegram.org/type/int) | If a positive value was transferred, the method will return only messages with ID smaller than max\_id 
| **minId** | [int](https://core.telegram.org/type/int) | If a positive value was transferred, the method will return only messages with ID bigger than min\_id 
| **hash** | [long](https://core.telegram.org/type/long) | [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) 


## Result

[messages.Messages](https://core.telegram.org/type/messages.Messages)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | MSG\_ID\_INVALID | Invalid message ID provided. 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid. 


## Can bots use this method?

No

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.




