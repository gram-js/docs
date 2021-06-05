# messages.GetScheduledHistory

Get scheduled messages



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.GetScheduledHistory({
    peer: 'username',
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
    const result: Api.messages.Messages = await client.invoke(new Api.messages.GetScheduledHistory({
    peer: 'username',
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
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Peer 
| **hash** | [int](https://core.telegram.org/type/int) | [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) 


## Result

[messages.Messages](https://core.telegram.org/type/messages.Messages)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | CHAT\_ADMIN\_REQUIRED | You must be an admin in this chat to do this 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid 


## Can bots use this method?

No

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.




