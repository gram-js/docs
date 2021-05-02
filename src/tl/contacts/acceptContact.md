# contacts.acceptContact

If the [peer settings](https://core.telegram.org/constructor/peerSettings) of a new user allow us to add him as contact, add that user as contact

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.contacts.acceptContact({
		id: new Api.InputUser({...}),
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
    const result: Api.Updates = await client.invoke(new Api.contacts.acceptContact({
		id: new Api.InputUser({...}),
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
contacts.acceptContact#f831a20f id:InputUser = Updates;
```

## Parameters

|  Name  | Type                                                  | Description                |
| :----: | ----------------------------------------------------- | -------------------------- |
| **id** | [InputUser](https://core.telegram.org/type/InputUser) | The user to add as contact |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                | Description                        |
| :--: | ------------------- | ---------------------------------- |
| 400  | CONTACT_ADD_MISSING | Contact to add is missing          |
| 400  | CONTACT_ID_INVALID  | The provided contact ID is invalid |
| 400  | CONTACT_REQ_MISSING | Missing contact request            |

## Can bots use this method?

Yes

## Related pages

#### [peerSettings](https://core.telegram.org/constructor/peerSettings)

Peer settings
