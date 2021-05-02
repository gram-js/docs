# messages.importChatInvite

Import a chat invite and join a private chat/supergroup/channel

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
        new Api.messages.importChatInvite({
            hash: 'random string here',
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
        new Api.messages.importChatInvite({
            hash: 'random string here',
        }),
    );
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
messages.importChatInvite#6c50051c hash:string = Updates;
```

## Parameters

|   Name   | Type                                            | Description                  |
| :------: | ----------------------------------------------- | ---------------------------- |
| **hash** | [string](https://core.telegram.org/type/string) | hash from t.me/joinchat/hash |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                     | Description                                                                   |
| :--: | ------------------------ | ----------------------------------------------------------------------------- |
| 400  | CHANNELS_TOO_MUCH        | You have joined too many channels/supergroups                                 |
| 400  | CHANNEL_INVALID          | The provided channel is invalid                                               |
| 400  | CHANNEL_PRIVATE          | You haven't joined this channel/supergroup                                    |
| 400  | INVITE_HASH_EMPTY        | The invite hash is empty                                                      |
| 400  | INVITE_HASH_EXPIRED      | The invite link has expired                                                   |
| 400  | INVITE_HASH_INVALID      | The invite hash is invalid                                                    |
| 400  | MSG_ID_INVALID           | Invalid message ID provided                                                   |
| 400  | PEER_ID_INVALID          | The provided peer id is invalid                                               |
| 400  | USERS_TOO_MUCH           | The maximum number of users has been exceeded (to create a chat, for example) |
| 400  | USER_ALREADY_PARTICIPANT | The user is already in the group                                              |
| 400  | USER_CHANNELS_TOO_MUCH   | One of the users you tried to add is already in too many channels/supergroups |

## Can bots use this method?

Yes

## Related pages
