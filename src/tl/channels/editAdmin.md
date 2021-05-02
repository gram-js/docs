# channels.editAdmin

Modify the admin rights of a user in a [supergroup/channel](https://core.telegram.org/api/channel).

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(
        new Api.channels.editAdmin({
            channel: new Api.InputChannel({
                /* ... */
            }),
            userId: new Api.InputUser({
                /* ... */
            }),
            adminRights: new Api.ChatAdminRights({
                /* ... */
            }),
            rank: 'random string here',
        }),
    );
    console.log(result); // prints the result
})();
```

:::

:::tab{title="TypeScript"}

```ts
import { Api, TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.Updates = await client.invoke(
        new Api.channels.editAdmin({
            channel: new Api.InputChannel({
                /* ... */
            }),
            userId: new Api.InputUser({
                /* ... */
            }),
            adminRights: new Api.ChatAdminRights({
                /* ... */
            }),
            rank: 'random string here',
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
updatesTooLong#e317af7e = Updates;
updateShortMessage#2296d2c8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:int message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?int reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> = Updates;
updateShortChatMessage#402d5dbb flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:int chat_id:int message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?int reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#11f1331c flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> = Updates;
---functions---
channels.editAdmin#d33c8902 channel:InputChannel user_id:InputUser admin_rights:ChatAdminRights rank:string = Updates;
```

## Parameters

|       Name       | Type                                                              | Description                                                                   |
| :--------------: | ----------------------------------------------------------------- | ----------------------------------------------------------------------------- |
|   **channel**    | [InputChannel](https://core.telegram.org/type/InputChannel)       | The [supergroup/channel](https://core.telegram.org/api/channel).              |
|   **user_id**    | [InputUser](https://core.telegram.org/type/InputUser)             | The ID of the user whose admin rights should be modified                      |
| **admin_rights** | [ChatAdminRights](https://core.telegram.org/type/ChatAdminRights) | The admin rights                                                              |
|     **rank**     | [string](https://core.telegram.org/type/string)                   | Indicates the role (rank) of the admin in the group: just an arbitrary string |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                          | Description                                                                   |
| :--: | ----------------------------- | ----------------------------------------------------------------------------- |
| 400  | ADMINS_TOO_MUCH               | There are too many admins                                                     |
| 400  | BOTS_TOO_MUCH                 | There are too many bots in this chat/channel                                  |
| 400  | BOT_CHANNELS_NA               | Bots can't edit admin privileges                                              |
| 400  | BOT_GROUPS_BLOCKED            | This bot can't be added to groups                                             |
| 400  | CHANNEL_INVALID               | The provided channel is invalid                                               |
| 400  | CHANNEL_PRIVATE               | You haven't joined this channel/supergroup                                    |
| 403  | CHAT_ADMIN_INVITE_REQUIRED    | You do not have the rights to do this                                         |
| 400  | CHAT_ADMIN_REQUIRED           | You must be an admin in this chat to do this                                  |
| 403  | CHAT_WRITE_FORBIDDEN          | You can't write in this chat                                                  |
| 406  | FRESH_CHANGE_ADMINS_FORBIDDEN | You were just elected admin, you can't add or modify other admins yet         |
| 400  | INPUT_USER_DEACTIVATED        | The specified user was deleted                                                |
| 400  | PEER_ID_INVALID               | The provided peer id is invalid                                               |
| 403  | RIGHT_FORBIDDEN               | Your admin rights do not allow you to do this                                 |
| 400  | USERS_TOO_MUCH                | The maximum number of users has been exceeded (to create a chat, for example) |
| 400  | USER_BLOCKED                  | User blocked                                                                  |
| 403  | USER_CHANNELS_TOO_MUCH        | One of the users you tried to add is already in too many channels/supergroups |
| 400  | USER_CREATOR                  | You can't leave this channel, because you're its creator                      |
| 400  | USER_ID_INVALID               | The provided user ID is invalid                                               |
| 400  | USER_NOT_MUTUAL_CONTACT       | The provided user is not a mutual contact                                     |
| 403  | USER_PRIVACY_RESTRICTED       | The user's privacy settings do not allow you to do this                       |
| 403  | USER_RESTRICTED               | You're spamreported, you can't create channels or chats.                      |

## Can bots use this method?

Yes

## Related pages

### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.
