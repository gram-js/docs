# channels.GetAdminLog

Get the admin log of a [channel/supergroup](https://core.telegram.org/api/channel)



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

    const result = await client.invoke(new Api.channels.GetAdminLog({
    channel: 'username',
    q: 'some string here',
    maxId: 0,
    minId: 0,
    limit: 100,
    eventsFilter: new Api.ChannelAdminLogEventsFilter({
        join: true,
        leave: true,
        invite: true,
        ban: true,
        unban: true,
        kick: true,
        unkick: true,
        promote: true,
        demote: true,
        info: true,
        settings: true,
        pinned: true,
        groupCall: true,
        invites: true,
        send: true
    })
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

    const result: Api.channels.AdminLogResults = await client.invoke(new Api.channels.GetAdminLog({
    channel: 'username',
    q: 'some string here',
    maxId: 0,
    minId: 0,
    limit: 100,
    eventsFilter: new Api.ChannelAdminLogEventsFilter({
        join: true,
        leave: true,
        invite: true,
        ban: true,
        unban: true,
        kick: true,
        unkick: true,
        promote: true,
        demote: true,
        info: true,
        settings: true,
        pinned: true,
        groupCall: true,
        invites: true,
        send: true
    })
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
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel) | Channel 
| **q** | [string](https://core.telegram.org/type/string) | Search query, can be empty 
| **eventsFilter** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[ChannelAdminLogEventsFilter](https://core.telegram.org/type/ChannelAdminLogEventsFilter) | Event filter 
| **admins** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[InputUser](https://core.telegram.org/type/InputUser)> | Only show events from these admins 
| **maxId** | [long](https://core.telegram.org/type/long) | Maximum ID of message to return (see [pagination](https://core.telegram.org/api/offsets)) 
| **minId** | [long](https://core.telegram.org/type/long) | Minimum ID of message to return (see [pagination](https://core.telegram.org/api/offsets)) 
| **limit** | [int](https://core.telegram.org/type/int) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) 


## Result

[channels.AdminLogResults](https://core.telegram.org/type/channels.AdminLogResults)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | CHANNEL\_INVALID | The provided channel is invalid. 
| 400 | CHANNEL\_PRIVATE | You haven't joined this channel/supergroup. 
| 400 | CHAT\_ADMIN\_REQUIRED | You must be an admin in this chat to do this. 
| 403 | CHAT\_WRITE\_FORBIDDEN | You can't write in this chat. 
| 400 | MSG\_ID\_INVALID | Invalid message ID provided. 


## Can bots use this method?

No

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.



#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.




