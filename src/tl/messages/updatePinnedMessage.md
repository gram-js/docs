# messages.updatePinnedMessage

Pin a message

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
        new Api.messages.updatePinnedMessage({
            silent: true,
            unpin: true,
            pmOneside: true,
            peer: new Api.InputPeer({
                /* ... */
            }),
            id: 272398,
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
        new Api.messages.updatePinnedMessage({
            silent: true,
            unpin: true,
            pmOneside: true,
            peer: new Api.InputPeer({
                /* ... */
            }),
            id: 272398,
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
messages.updatePinnedMessage#d2aaf7ec flags:# silent:flags.0?true unpin:flags.1?true pm_oneside:flags.2?true peer:InputPeer id:int = Updates;
```

## Parameters

|      Name      | Type                                                                                                                              | Description                                                                                             |
| :------------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|   **flags**    | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|   **silent**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Pin the message silently, without triggering a notification                                             |
|   **unpin**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true) | Whether the message should unpinned or pinned                                                           |
| **pm_oneside** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](https://core.telegram.org/constructor/true) | Whether the message should only be pinned on the local side of a one-to-one chat                        |
|    **peer**    | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                             | The peer where to pin the message                                                                       |
|     **id**     | [int](https://core.telegram.org/type/int)                                                                                         | The message to pin or unpin                                                                             |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                 | Description                                  |
| :--: | -------------------- | -------------------------------------------- |
| 400  | CHANNEL_PRIVATE      | You haven't joined this channel/supergroup   |
| 400  | CHAT_ADMIN_REQUIRED  | You must be an admin in this chat to do this |
| 400  | CHAT_NOT_MODIFIED    | The pinned message wasn't modified           |
| 403  | CHAT_WRITE_FORBIDDEN | You can't write in this chat                 |
| 400  | MESSAGE_ID_INVALID   | The provided message id is invalid           |
| 400  | PIN_RESTRICTED       | You can't pin messages                       |

## Can bots use this method?

Yes

## Related pages
