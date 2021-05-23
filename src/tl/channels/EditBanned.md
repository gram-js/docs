# channels.EditBanned

Ban/unban/kick a user in a [supergroup/channel](https://core.telegram.org/api/channel).



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.channels.EditBanned({
    channel: 'username',
    userId: 'username',
    bannedRights: new Api.ChatBannedRights({
        untilDate: 43,
        viewMessages: None,
        sendMessages: None,
        sendMedia: true,
        sendStickers: true,
        sendGifs: true,
        sendGames: true,
        sendInline: true,
        sendPolls: true,
        changeInfo: true,
        inviteUsers: true,
        pinMessages: true
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

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.Updates = await client.invoke(new Api.channels.EditBanned({
    channel: 'username',
    userId: 'username',
    bannedRights: new Api.ChatBannedRights({
        untilDate: 43,
        viewMessages: None,
        sendMessages: None,
        sendMedia: true,
        sendStickers: true,
        sendGifs: true,
        sendGames: true,
        sendInline: true,
        sendPolls: true,
        changeInfo: true,
        inviteUsers: true,
        pinMessages: true
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
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel) | The [supergroup/channel](https://core.telegram.org/api/channel). 
| **userId** | [InputUser](https://core.telegram.org/type/InputUser) | The ID of the user whose banned rights should be modified 
| **bannedRights** | [ChatBannedRights](https://core.telegram.org/type/ChatBannedRights) | The banned rights 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | CHANNEL\_INVALID | The provided channel is invalid 
| 400 | CHANNEL\_PRIVATE | You haven't joined this channel/supergroup 
| 400 | CHAT\_ADMIN\_REQUIRED | You must be an admin in this chat to do this 
| 403 | CHAT\_WRITE\_FORBIDDEN | You can't write in this chat 
| 400 | MSG\_ID\_INVALID | Invalid message ID provided 
| 400 | PINNED\_DIALOGS\_TOO\_MUCH | Too many pinned dialogs 
| 400 | USER\_ADMIN\_INVALID | You're not an admin 
| 400 | USER\_ID\_INVALID | The provided user ID is invalid 


## Can bots use this method?

Yes

## Related pages

#### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.



