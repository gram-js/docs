# messages.ReadMentions

Get unread messages where we were mentioned



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.ReadMentions({
    peer: 'username'
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
    const result: Api.messages.AffectedHistory = await client.invoke(new Api.messages.ReadMentions({
    peer: 'username'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Peer where to look for mentions 
| **offsetId** | [int](https://core.telegram.org/type/int) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) 
| **addOffset** | [int](https://core.telegram.org/type/int) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) 
| **limit** | [int](https://core.telegram.org/type/int) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) 
| **maxId** | [int](https://core.telegram.org/type/int) | Maximum message ID to return, [see pagination](https://core.telegram.org/api/offsets) 
| **minId** | [int](https://core.telegram.org/type/int) | Minimum message ID to return, [see pagination](https://core.telegram.org/api/offsets) 


## Result

[messages.Messages](https://core.telegram.org/type/messages.Messages)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | CHANNEL\_INVALID | The provided channel is invalid 
| 400 | CHANNEL\_PRIVATE | You haven't joined this channel/supergroup 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid 


## Can bots use this method?

Yes

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.



