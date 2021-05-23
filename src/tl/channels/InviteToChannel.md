# channels.InviteToChannel

Invite users to a channel/supergroup



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.channels.InviteToChannel({
    channel: 'username',
    users: ['username']
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
    const result: Api.Updates = await client.invoke(new Api.channels.InviteToChannel({
    channel: 'username',
    users: ['username']
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel) | Channel/supergroup 
| **users** | [Vector](https://core.telegram.org/type/Vector%20t)<[InputUser](https://core.telegram.org/type/InputUser)> | Users to invite 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | BOTS\_TOO\_MUCH | There are too many bots in this chat/channel 
| 400 | BOT\_GROUPS\_BLOCKED | This bot can't be added to groups 
| 400 | CHANNEL\_INVALID | The provided channel is invalid 
| 400 | CHANNEL\_PRIVATE | You haven't joined this channel/supergroup 
| 400 | CHAT\_ADMIN\_REQUIRED | You must be an admin in this chat to do this 
| 400 | CHAT\_INVALID | Invalid chat 
| 403 | CHAT\_WRITE\_FORBIDDEN | You can't write in this chat 
| 400 | INPUT\_USER\_DEACTIVATED | The specified user was deleted 
| 400 | MSG\_ID\_INVALID | Invalid message ID provided 
| 400 | USERS\_TOO\_MUCH | The maximum number of users has been exceeded (to create a chat, for example) 
| 400 | USER\_BANNED\_IN\_CHANNEL | You're banned from sending messages in supergroups/channels 
| 400 | USER\_BLOCKED | User blocked 
| 400 | USER\_BOT | Bots can only be admins in channels. 
| 403 | USER\_CHANNELS\_TOO\_MUCH | One of the users you tried to add is already in too many channels/supergroups 
| 400 | USER\_ID\_INVALID | The provided user ID is invalid 
| 400 | USER\_KICKED | This user was kicked from this supergroup/channel 
| 400 | USER\_NOT\_MUTUAL\_CONTACT | The provided user is not a mutual contact 
| 403 | USER\_PRIVACY\_RESTRICTED | The user's privacy settings do not allow you to do this 


## Can bots use this method?

Yes

## Related pages


