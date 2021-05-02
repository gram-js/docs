# channels.getAdminLog

Get the admin log of a [channel/supergroup](https://core.telegram.org/api/channel)

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.channels.getAdminLog({
		channel: new Api.InputChannel({...}),
		q: 'random string here',
		eventsFilter: new Api.ChannelAdminLogEventsFilter({...}),
		admins: [new Api.InputUser({...})],
		maxId: 9964589,
		minId: 9259142,
		limit: 2782051,
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
    const result: Api.channels.AdminLogResults = await client.invoke(new Api.channels.getAdminLog({
		channel: new Api.InputChannel({...}),
		q: 'random string here',
		eventsFilter: new Api.ChannelAdminLogEventsFilter({...}),
		admins: [new Api.InputUser({...})],
		maxId: 9964589,
		minId: 9259142,
		limit: 2782051,
		}));
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
channels.adminLogResults#ed8af74d events:Vector<ChannelAdminLogEvent> chats:Vector<Chat> users:Vector<User> = channels.AdminLogResults;
---functions---
channels.getAdminLog#33ddf480 flags:# channel:InputChannel q:string events_filter:flags.0?ChannelAdminLogEventsFilter admins:flags.1?Vector<InputUser> max_id:long min_id:long limit:int = channels.AdminLogResults;
```

## Parameters

|       Name        | Type                                                                                                                                                                                         | Description                                                                                             |
| :---------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|     **flags**     | [#](https://core.telegram.org/type/%23)                                                                                                                                                      | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|    **channel**    | [InputChannel](https://core.telegram.org/type/InputChannel)                                                                                                                                  | Channel                                                                                                 |
|       **q**       | [string](https://core.telegram.org/type/string)                                                                                                                                              | Search query, can be empty                                                                              |
| **events_filter** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[ChannelAdminLogEventsFilter](https://core.telegram.org/type/ChannelAdminLogEventsFilter)                     | Event filter                                                                                            |
|    **admins**     | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t) < [InputUser](https://core.telegram.org/type/InputUser) > | Only show events from these admins                                                                      |
|    **max_id**     | [long](https://core.telegram.org/type/long)                                                                                                                                                  | Maximum ID of message to return (see [pagination](https://core.telegram.org/api/offsets))               |
|    **min_id**     | [long](https://core.telegram.org/type/long)                                                                                                                                                  | Minimum ID of message to return (see [pagination](https://core.telegram.org/api/offsets))               |
|     **limit**     | [int](https://core.telegram.org/type/int)                                                                                                                                                    | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets)            |

## Result

[channels.AdminLogResults](https://core.telegram.org/type/channels.AdminLogResults)

## Possible errors

| Code | Type                 | Description                                  |
| :--: | -------------------- | -------------------------------------------- |
| 400  | CHANNEL_INVALID      | The provided channel is invalid              |
| 400  | CHANNEL_PRIVATE      | You haven't joined this channel/supergroup   |
| 400  | CHAT_ADMIN_REQUIRED  | You must be an admin in this chat to do this |
| 403  | CHAT_WRITE_FORBIDDEN | You can't write in this chat                 |
| 400  | MSG_ID_INVALID       | Invalid message ID provided                  |

## Can bots use this method?

Yes

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.
