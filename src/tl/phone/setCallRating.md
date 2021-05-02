# phone.setCallRating

Rate a call

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.phone.setCallRating({
		userInitiative: true,
		peer: new Api.InputPhoneCall({...}),
		rating: 4475374,
		comment: 'random string here',
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
    const result: Api.Updates with info about the rating message sent to the official VoIP bot = await client.invoke(new Api.phone.setCallRating({
		userInitiative: true,
		peer: new Api.InputPhoneCall({...}),
		rating: 4475374,
		comment: 'random string here',
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
phone.setCallRating#59ead627 flags:# user_initiative:flags.0?true peer:InputPhoneCall rating:int comment:string = Updates;
```

## Parameters

|        Name         | Type                                                                                                                              | Description                                                                                             |
| :-----------------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|      **flags**      | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| **user_initiative** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Whether the user decided on their own initiative to rate the call                                       |
|      **peer**       | [InputPhoneCall](https://core.telegram.org/type/InputPhoneCall)                                                                   | The call to rate                                                                                        |
|     **rating**      | [int](https://core.telegram.org/type/int)                                                                                         | Rating in 1-5 stars                                                                                     |
|     **comment**     | [string](https://core.telegram.org/type/string)                                                                                   | An additional comment                                                                                   |

## Result

[Updates](https://core.telegram.org/type/Updates) with info about the rating message sent to the official VoIP bot

## Possible errors

| Code | Type              | Description                              |
| :--: | ----------------- | ---------------------------------------- |
| 400  | CALL_PEER_INVALID | The provided call peer object is invalid |

## Can bots use this method?

Yes

## Related pages
