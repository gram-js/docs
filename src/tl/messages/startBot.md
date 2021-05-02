# messages.startBot

Start a conversation with a bot using a [deep linking parameter](https://core.telegram.org/bots#deep-linking)

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
        new Api.messages.startBot({
            bot: new Api.InputUser({
                /* ... */
            }),
            peer: new Api.InputPeer({
                /* ... */
            }),
            randomId: 6414074,
            startParam: 'random string here',
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
        new Api.messages.startBot({
            bot: new Api.InputUser({
                /* ... */
            }),
            peer: new Api.InputPeer({
                /* ... */
            }),
            randomId: 6414074,
            startParam: 'random string here',
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
messages.startBot#e6df7378 bot:InputUser peer:InputPeer random_id:long start_param:string = Updates;
```

## Parameters

|      Name       | Type                                                  | Description                                                               |
| :-------------: | ----------------------------------------------------- | ------------------------------------------------------------------------- |
|     **bot**     | [InputUser](https://core.telegram.org/type/InputUser) | The bot                                                                   |
|    **peer**     | [InputPeer](https://core.telegram.org/type/InputPeer) | The chat where to start the bot, can be the bot's private chat or a group |
|  **random_id**  | [long](https://core.telegram.org/type/long)           | Random ID to avoid resending the same message                             |
| **start_param** | [string](https://core.telegram.org/type/string)       | [Deep linking parameter](https://core.telegram.org/bots#deep-linking)     |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                   | Description                     |
| :--: | ---------------------- | ------------------------------- |
| 400  | BOT_INVALID            | This is not a valid bot         |
| 400  | INPUT_USER_DEACTIVATED | The specified user was deleted  |
| 400  | MSG_ID_INVALID         | Invalid message ID provided     |
| 400  | PEER_ID_INVALID        | The provided peer id is invalid |
| 400  | START_PARAM_EMPTY      | The start parameter is empty    |
| 400  | START_PARAM_INVALID    | Start parameter invalid         |
| 400  | START_PARAM_TOO_LONG   | Start parameter is too long     |

## Can bots use this method?

Yes

## Related pages

### [Bots: An introduction for developers](https://core.telegram.org/bots)
