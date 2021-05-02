# messages.editChatTitle

Chanages chat name and sends a service message on it.

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
        new Api.messages.editChatTitle({
            chatId: 8881391,
            title: 'random string here',
        }),
    );
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
    const result: Api.Returns a messages.StatedMessage object containing a service message sent during an action. = await client.invoke(new Api.messages.editChatTitle({
		chatId: 8881391,
		title: 'random string here',
		}));
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
messages.editChatTitle#dc452855 chat_id:int title:string = Updates;
```

## Parameters

|    Name     | Type                                            | Description                               |
| :---------: | ----------------------------------------------- | ----------------------------------------- |
| **chat_id** | [int](https://core.telegram.org/type/int)       | Chat ID                                   |
|  **title**  | [string](https://core.telegram.org/type/string) | New chat name, different from the old one |

## Result

Returns a [messages.StatedMessage](https://core.telegram.org/type/messages.StatedMessage) object containing a service message sent during an action.

## Possible errors

| Code | Type              | Description                        |
| :--: | ----------------- | ---------------------------------- |
| 400  | CHAT_ID_INVALID   | The provided chat id is invalid    |
| 400  | CHAT_NOT_MODIFIED | The pinned message wasn't modified |
| 400  | CHAT_TITLE_EMPTY  | No chat title provided             |
| 400  | PEER_ID_INVALID   | The provided peer id is invalid    |

## Can bots use this method?

Yes

## Related pages
