# updates.GetChannelDifference

Returns the difference between the current state of updates of a certain channel and transmitted.



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.updates.GetChannelDifference({
    channel: 'username',
    filter: new Api.ChannelMessagesFilter({
        ranges: [new Api.MessageRange({
            minId: 0,
            maxId: 0
        })],
        excludeNewMessages: true
    }),
    pts: 43,
    limit: 100,
    force: true
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
    const result: Api.updates.ChannelDifference = await client.invoke(new Api.updates.GetChannelDifference({
    channel: 'username',
    filter: new Api.ChannelMessagesFilter({
        ranges: [new Api.MessageRange({
            minId: 0,
            maxId: 0
        })],
        excludeNewMessages: true
    }),
    pts: 43,
    limit: 100,
    force: true
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
| **force** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Set to true to skip some possibly unneeded updates and reduce server-side load 
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel) | The channel 
| **filter** | [ChannelMessagesFilter](https://core.telegram.org/type/ChannelMessagesFilter) | Messsage filter 
| **pts** | [int](https://core.telegram.org/type/int) | Persistent timestamp (see [updates](https://core.telegram.org/api/updates)) 
| **limit** | [int](https://core.telegram.org/type/int) | How many updates to fetch, max `100000`  <br>Ordinary (non-bot) users are supposed to pass `10-100` 


## Result

[updates.ChannelDifference](https://core.telegram.org/type/updates.ChannelDifference)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | CHANNEL\_INVALID | The provided channel is invalid 
| 400 | CHANNEL\_PRIVATE | You haven't joined this channel/supergroup 
| 403 | CHANNEL\_PUBLIC\_GROUP\_NA | channel/supergroup not available 
| 400 | FROM\_MESSAGE\_BOT\_DISABLED | Bots can't use fromMessage min constructors 
| 400 | MSG\_ID\_INVALID | Invalid message ID provided 
| 400 | PERSISTENT\_TIMESTAMP\_EMPTY | Persistent timestamp empty 
| 400 | PERSISTENT\_TIMESTAMP\_INVALID | Persistent timestamp invalid 
| 400 | PINNED\_DIALOGS\_TOO\_MUCH | Too many pinned dialogs 
| 400 | RANGES\_INVALID | Invalid range provided 


## Can bots use this method?

Yes

## Related pages

#### [Working with Updates](https://core.telegram.org/api/updates)

How to subscribe to updates and handle them properly.




