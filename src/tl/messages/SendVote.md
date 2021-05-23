# messages.SendVote

Vote in a [poll](https://core.telegram.org/constructor/poll)



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.SendVote({
    peer: 'username',
    msgId: 43,
    options: [Buffer.from('arbitrary data here')]
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
    const result: Api.Updates = await client.invoke(new Api.messages.SendVote({
    peer: 'username',
    msgId: 43,
    options: [Buffer.from('arbitrary data here')]
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | The chat where the poll was sent 
| **msgId** | [int](https://core.telegram.org/type/int) | The message ID of the poll 
| **options** | [Vector](https://core.telegram.org/type/Vector%20t)<[bytes](https://core.telegram.org/type/bytes)> | The options that were chosen 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | MESSAGE\_ID\_INVALID | The provided message id is invalid 
| 400 | MESSAGE\_POLL\_CLOSED | Poll closed 
| 400 | OPTIONS\_TOO\_MUCH | Too many options provided 
| 400 | OPTION\_INVALID | Invalid option selected 
| 400 | REVOTE\_NOT\_ALLOWED | You cannot change your vote 


## Can bots use this method?

Yes

## Related pages

#### [poll](https://core.telegram.org/constructor/poll)

Poll




