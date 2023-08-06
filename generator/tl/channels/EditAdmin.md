# channels.EditAdmin

Modify the admin rights of a user in a [supergroup/channel](https://core.telegram.org/api/channel).



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

    const result = await client.invoke(new Api.channels.EditAdmin({
    channel: 'username',
    userId: 'username',
    adminRights: new Api.ChatAdminRights({
        changeInfo: true,
        postMessages: true,
        editMessages: true,
        deleteMessages: true,
        banUsers: true,
        inviteUsers: true,
        pinMessages: true,
        addAdmins: true,
        anonymous: true,
        manageCall: true,
        other: true,
        manageTopics: true
    }),
    rank: 'some string here'
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

    const result: Api.Updates = await client.invoke(new Api.channels.EditAdmin({
    channel: 'username',
    userId: 'username',
    adminRights: new Api.ChatAdminRights({
        changeInfo: true,
        postMessages: true,
        editMessages: true,
        deleteMessages: true,
        banUsers: true,
        inviteUsers: true,
        pinMessages: true,
        addAdmins: true,
        anonymous: true,
        manageCall: true,
        other: true,
        manageTopics: true
    }),
    rank: 'some string here'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel) | The [supergroup/channel](https://core.telegram.org/api/channel). 
| **userId** | [InputUser](https://core.telegram.org/type/InputUser) | The ID of the user whose admin rights should be modified 
| **adminRights** | [ChatAdminRights](https://core.telegram.org/type/ChatAdminRights) | The admin rights 
| **rank** | [string](https://core.telegram.org/type/string) | Indicates the role (rank) of the admin in the group: just an arbitrary string 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | ADMINS\_TOO\_MUCH | There are too many admins. 
| 400 | ADMIN\_RANK\_EMOJI\_NOT\_ALLOWED | An admin rank cannot contain emojis. 
| 400 | ADMIN\_RANK\_INVALID | The specified admin rank is invalid. 
| 400 | BOTS\_TOO\_MUCH | There are too many bots in this chat/channel. 
| 400 | BOT\_CHANNELS\_NA | Bots can't edit admin privileges. 
| 400 | BOT\_GROUPS\_BLOCKED | This bot can't be added to groups. 
| 400 | CHANNEL\_INVALID | The provided channel is invalid. 
| 400 | CHANNEL\_PRIVATE | You haven't joined this channel/supergroup. 
| 403 | CHAT\_ADMIN\_INVITE\_REQUIRED | You do not have the rights to do this. 
| 400 | CHAT\_ADMIN\_REQUIRED | You must be an admin in this chat to do this. 
| 403 | CHAT\_WRITE\_FORBIDDEN | You can't write in this chat. 
| 406 | FRESH\_CHANGE\_ADMINS\_FORBIDDEN | You were just elected admin, you can't add or modify other admins yet. 
| 400 | INPUT\_USER\_DEACTIVATED | The specified user was deleted. 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid. 
| 403 | RIGHT\_FORBIDDEN | Your admin rights do not allow you to do this. 
| 400 | USERS\_TOO\_MUCH | The maximum number of users has been exceeded (to create a chat, for example). 
| 400 | USER\_BLOCKED | User blocked. 
| 403 | USER\_CHANNELS\_TOO\_MUCH | One of the users you tried to add is already in too many channels/supergroups. 
| 400 | USER\_CREATOR | You can't leave this channel, because you're its creator. 
| 400 | USER\_ID\_INVALID | The provided user ID is invalid. 
| 403 | USER\_NOT\_MUTUAL\_CONTACT | The provided user is not a mutual contact. 
| 403 | USER\_PRIVACY\_RESTRICTED | The user's privacy settings do not allow you to do this. 
| 403 | USER\_RESTRICTED | You're spamreported, you can't create channels or chats. 


## Can bots use this method?

Yes

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.




