# messages.setGameScore

Use this method to set the score of the specified user in a game sent as a normal message (bots only).

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.setGameScore({
		editMessage: true,
		force: true,
		peer: new Api.InputPeer({...}),
		id: 2819388,
		userId: new Api.InputUser({...}),
		score: 4871636,
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
    const result: Api.Updates = await client.invoke(new Api.messages.setGameScore({
		editMessage: true,
		force: true,
		peer: new Api.InputPeer({...}),
		id: 2819388,
		userId: new Api.InputUser({...}),
		score: 4871636,
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
messages.setGameScore#8ef8ecc0 flags:# edit_message:flags.0?true force:flags.1?true peer:InputPeer id:int user_id:InputUser score:int = Updates;
```

## Parameters

|       Name       | Type                                                                                                                              | Description                                                                                                         |
| :--------------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
|    **flags**     | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)             |
| **edit_message** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Set this flag if the game message should be automatically edited to include the current scoreboard                  |
|    **force**     | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true) | Set this flag if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters |
|     **peer**     | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                             | Unique identifier of target chat                                                                                    |
|      **id**      | [int](https://core.telegram.org/type/int)                                                                                         | Identifier of the sent message                                                                                      |
|   **user_id**    | [InputUser](https://core.telegram.org/type/InputUser)                                                                             | User identifier                                                                                                     |
|    **score**     | [int](https://core.telegram.org/type/int)                                                                                         | New score                                                                                                           |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type               | Description                             |
| :--: | ------------------ | --------------------------------------- |
| 400  | MESSAGE_ID_INVALID | The provided message id is invalid      |
| 400  | PEER_ID_INVALID    | The provided peer id is invalid         |
| 400  | USER_BOT_REQUIRED  | This method can only be called by a bot |

## Can bots use this method?

Yes

## Related pages
