# messages.GetRecentLocations

Get live location history of a certain user



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.GetRecentLocations({
    peer: 'username',
    limit: 100,
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
    const result: Api.messages.Messages = await client.invoke(new Api.messages.GetRecentLocations({
    peer: 'username',
    limit: 100,
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
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | User 
| **limit** | [int](https://core.telegram.org/type/int) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) 
| **hash** | [int](https://core.telegram.org/type/int) | [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) 


## Result

[messages.Messages](https://core.telegram.org/type/messages.Messages)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |


## Can bots use this method?

Yes

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.



