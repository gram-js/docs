# phone.discardCall

Refuse or end running call

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.phone.discardCall({
		video: true,
		peer: new Api.InputPhoneCall({...}),
		duration: 789254,
		reason: new Api.PhoneCallDiscardReason({...}),
		connectionId: 2038378,
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
    const result: Api.Updates = await client.invoke(new Api.phone.discardCall({
		video: true,
		peer: new Api.InputPhoneCall({...}),
		duration: 789254,
		reason: new Api.PhoneCallDiscardReason({...}),
		connectionId: 2038378,
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
phone.discardCall#b2cbc1c0 flags:# video:flags.0?true peer:InputPhoneCall duration:int reason:PhoneCallDiscardReason connection_id:long = Updates;
```

## Parameters

|       Name        | Type                                                                                                                              | Description                                                                                             |
| :---------------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|     **flags**     | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|     **video**     | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Whether this is a video call                                                                            |
|     **peer**      | [InputPhoneCall](https://core.telegram.org/type/InputPhoneCall)                                                                   | The phone call                                                                                          |
|   **duration**    | [int](https://core.telegram.org/type/int)                                                                                         | Call duration                                                                                           |
|    **reason**     | [PhoneCallDiscardReason](https://core.telegram.org/type/PhoneCallDiscardReason)                                                   | Why was the call discarded                                                                              |
| **connection_id** | [long](https://core.telegram.org/type/long)                                                                                       | Preferred libtgvoip relay ID                                                                            |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                  | Description                              |
| :--: | --------------------- | ---------------------------------------- |
| 400  | CALL_ALREADY_ACCEPTED | The call was already accepted            |
| 400  | CALL_PEER_INVALID     | The provided call peer object is invalid |

## Can bots use this method?

Yes

## Related pages
