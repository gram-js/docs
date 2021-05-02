# updates.getChannelDifference

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
    const result = await client.invoke(new Api.updates.getChannelDifference({
		force: true,
		channel: new Api.InputChannel({...}),
		filter: new Api.ChannelMessagesFilter({...}),
		pts: 9497495,
		limit: 7516490,
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
    const result: Api.updates.ChannelDifference = await client.invoke(new Api.updates.getChannelDifference({
		force: true,
		channel: new Api.InputChannel({...}),
		filter: new Api.ChannelMessagesFilter({...}),
		pts: 9497495,
		limit: 7516490,
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
updates.channelDifferenceEmpty#3e11affb flags:# final:flags.0?true pts:int timeout:flags.1?int = updates.ChannelDifference;
updates.channelDifferenceTooLong#a4bcc6fe flags:# final:flags.0?true timeout:flags.1?int dialog:Dialog messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = updates.ChannelDifference;
updates.channelDifference#2064674e flags:# final:flags.0?true pts:int timeout:flags.1?int new_messages:Vector<Message> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> = updates.ChannelDifference;
---functions---
updates.getChannelDifference#3173d78 flags:# force:flags.0?true channel:InputChannel filter:ChannelMessagesFilter pts:int limit:int = updates.ChannelDifference;
```

## Parameters

|                         Name                         | Type                                                                                                                              | Description                                                                                             |
| :--------------------------------------------------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|                      **flags**                       | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|                      **force**                       | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Set to true to skip some possibly unneeded updates and reduce server-side load                          |
|                     **channel**                      | [InputChannel](https://core.telegram.org/type/InputChannel)                                                                       | The channel                                                                                             |
|                      **filter**                      | [ChannelMessagesFilter](https://core.telegram.org/type/ChannelMessagesFilter)                                                     | Messsage filter                                                                                         |
|                       **pts**                        | [int](https://core.telegram.org/type/int)                                                                                         | Persistent timestamp (see [updates](https://core.telegram.org/api/updates))                             |
|                      **limit**                       | [int](https://core.telegram.org/type/int)                                                                                         | How many updates to fetch, max 100000                                                                   |
| Ordinary (non-bot) users are supposed to pass 10-100 |

## Result

[updates.ChannelDifference](https://core.telegram.org/type/updates.ChannelDifference)

## Possible errors

| Code | Type                         | Description                                 |
| :--: | ---------------------------- | ------------------------------------------- |
| 400  | CHANNEL_INVALID              | The provided channel is invalid             |
| 400  | CHANNEL_PRIVATE              | You haven't joined this channel/supergroup  |
| 403  | CHANNEL_PUBLIC_GROUP_NA      | channel/supergroup not available            |
| 400  | FROM_MESSAGE_BOT_DISABLED    | Bots can't use fromMessage min constructors |
| 400  | MSG_ID_INVALID               | Invalid message ID provided                 |
| 400  | PERSISTENT_TIMESTAMP_EMPTY   | Persistent timestamp empty                  |
| 400  | PERSISTENT_TIMESTAMP_INVALID | Persistent timestamp invalid                |
| 400  | PINNED_DIALOGS_TOO_MUCH      | Too many pinned dialogs                     |
| 400  | RANGES_INVALID               | Invalid range provided                      |

## Can bots use this method?

Yes

## Related pages

#### [Working with Updates](https://core.telegram.org/api/updates)

How to subscribe to updates and handle them properly.
