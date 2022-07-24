# messages.GetMessageReactionsList

Get [message reaction](https://core.telegram.org/api/reactions) list, along with the sender of each reaction.



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

    const result = await client.invoke(new Api.messages.GetMessageReactionsList({
    peer: 'username',
    id: 43,
    limit: 100,
    reaction: 'some string here',
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

const session = new StringSession(''); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    await client.connect() // This assumes you have already authenticated with .start()

    const result: Api.messages.MessageReactionsList = await client.invoke(new Api.messages.GetMessageReactionsList({
    peer: 'username',
    id: 43,
    limit: 100,
    reaction: 'some string here',
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
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Peer 
| **id** | [int](https://core.telegram.org/type/int) | Message ID 
| **reaction** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](https://core.telegram.org/type/string) | Get only reactions of this type (UTF8 emoji) 
| **offset** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](https://core.telegram.org/type/string) | Offset (typically taken from the `next_offset` field of the returned [messages.MessageReactionsList](https://core.telegram.org/type/messages.MessageReactionsList)) 
| **limit** | [int](https://core.telegram.org/type/int) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) 


## Result

[messages.MessageReactionsList](https://core.telegram.org/type/messages.MessageReactionsList)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages

#### [messages.MessageReactionsList](https://core.telegram.org/type/messages.MessageReactionsList)

List of peers that reacted to a specific message



#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.



#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.




