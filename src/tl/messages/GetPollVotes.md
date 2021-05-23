# messages.GetPollVotes

Get poll results for non-anonymous polls



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.GetPollVotes({
    peer: 'username',
    id: 43,
    limit: 100,
    option: Buffer.from('arbitrary data here'),
    offset: 'some string here'
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
    const result: Api.messages.VotesList = await client.invoke(new Api.messages.GetPollVotes({
    peer: 'username',
    id: 43,
    limit: 100,
    option: Buffer.from('arbitrary data here'),
    offset: 'some string here'
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
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Chat where the poll was sent 
| **id** | [int](https://core.telegram.org/type/int) | Message ID 
| **option** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[bytes](https://core.telegram.org/type/bytes) | Get only results for the specified poll option 
| **offset** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](https://core.telegram.org/type/string) | Offset for results, taken from the next\_offset field of [messages.votesList](https://core.telegram.org/constructor/messages.votesList), initially an empty string.   <br>Note: if no more results are available, the method call will return an empty next\_offset; thus, avoid providing the next\_offset returned in [messages.votesList](https://core.telegram.org/constructor/messages.votesList) if it is empty, to avoid an infinite loop. 
| **limit** | [int](https://core.telegram.org/type/int) | Number of results to return 


## Result

[messages.VotesList](https://core.telegram.org/type/messages.VotesList)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 403 | BROADCAST\_FORBIDDEN |  
| 400 | MSG\_ID\_INVALID | Invalid message ID provided 
| 403 | POLL\_VOTE\_REQUIRED | Cast a vote in the poll before calling this method 


## Can bots use this method?

Yes

## Related pages

#### [messages.votesList](https://core.telegram.org/constructor/messages.votesList)

How users voted in a poll




