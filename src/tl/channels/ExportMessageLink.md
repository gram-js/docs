# channels.ExportMessageLink

Get link and embed info of a message in a [channel/supergroup](https://core.telegram.org/api/channel)



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.channels.ExportMessageLink({
    channel: 'username',
    id: 43,
    thread: true
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
    const result: Api.ExportedMessageLink = await client.invoke(new Api.channels.ExportMessageLink({
    channel: 'username',
    id: 43,
    thread: true
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
| **grouped** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Whether to include other grouped media (for albums) 
| **thread** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true) | Whether to also include a thread ID, if available, inside of the link 
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel) | Channel 
| **id** | [int](https://core.telegram.org/type/int) | Message ID 


## Result

[ExportedMessageLink](https://core.telegram.org/type/ExportedMessageLink)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | CHANNEL\_INVALID | The provided channel is invalid 
| 400 | CHANNEL\_PRIVATE | You haven't joined this channel/supergroup 
| 400 | MESSAGE\_ID\_INVALID | The provided message id is invalid 
| 400 | MSG\_ID\_INVALID | Invalid message ID provided 


## Can bots use this method?

Yes

## Related pages

#### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.



