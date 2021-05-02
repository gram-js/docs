# channels.editBanned

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
    const result = await client.invoke(new Api.channels.editBanned({
		channel: new Api.InputChannel({...}),
		userId: new Api.InputUser({...}),
		bannedRights: new Api.ChatBannedRights({...}),
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
    const result: Api.Updates = await client.invoke(new Api.channels.editBanned({
		channel: new Api.InputChannel({...}),
		userId: new Api.InputUser({...}),
		bannedRights: new Api.ChatBannedRights({...}),
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#2296d2c8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:int message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?int reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> = Updates;
updateShortChatMessage#402d5dbb flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:int chat_id:int message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?int reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#11f1331c flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> = Updates;
---functions---
channels.editBanned#72796912 channel:InputChannel user_id:InputUser banned_rights:ChatBannedRights = Updates;
```

## Parameters

|       Name        | Type                                                                | Description                                                      |
| :---------------: | ------------------------------------------------------------------- | ---------------------------------------------------------------- |
|    **channel**    | [InputChannel](https://core.telegram.org/type/InputChannel)         | The [supergroup/channel](https://core.telegram.org/api/channel). |
|    **user_id**    | [InputUser](https://core.telegram.org/type/InputUser)               | The ID of the user whose banned rights should be modified        |
| **banned_rights** | [ChatBannedRights](https://core.telegram.org/type/ChatBannedRights) | The banned rights                                                |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                    | Description                                  |
| :--: | ----------------------- | -------------------------------------------- |
| 400  | CHANNEL_INVALID         | The provided channel is invalid              |
| 400  | CHANNEL_PRIVATE         | You haven't joined this channel/supergroup   |
| 400  | CHAT_ADMIN_REQUIRED     | You must be an admin in this chat to do this |
| 403  | CHAT_WRITE_FORBIDDEN    | You can't write in this chat                 |
| 400  | MSG_ID_INVALID          | Invalid message ID provided                  |
| 400  | PINNED_DIALOGS_TOO_MUCH | Too many pinned dialogs                      |
| 400  | USER_ADMIN_INVALID      | You're not an admin                          |
| 400  | USER_ID_INVALID         | The provided user ID is invalid              |

## Can bots use this method?

Yes

## Related pages

#### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.
