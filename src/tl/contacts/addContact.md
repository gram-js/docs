# contacts.addContact

Add an existing telegram user as contact.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.contacts.addContact({
		addPhonePrivacyException: true,
		id: new Api.InputUser({...}),
		firstName: 'random string here',
		lastName: 'random string here',
		phone: 'random string here',
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
    const result: Api.Updates = await client.invoke(new Api.contacts.addContact({
		addPhonePrivacyException: true,
		id: new Api.InputUser({...}),
		firstName: 'random string here',
		lastName: 'random string here',
		phone: 'random string here',
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
contacts.addContact#e8f463d0 flags:# add_phone_privacy_exception:flags.0?true id:InputUser first_name:string last_name:string phone:string = Updates;
```

## Parameters

|              Name               | Type                                                                                                                              | Description                                                                                             |
| :-----------------------------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|            **flags**            | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| **add_phone_privacy_exception** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Allow the other user to see our phone number?                                                           |
|             **id**              | [InputUser](https://core.telegram.org/type/InputUser)                                                                             | Telegram ID of the other user                                                                           |
|         **first_name**          | [string](https://core.telegram.org/type/string)                                                                                   | First name                                                                                              |
|          **last_name**          | [string](https://core.telegram.org/type/string)                                                                                   | Last name                                                                                               |
|            **phone**            | [string](https://core.telegram.org/type/string)                                                                                   | User's phone number                                                                                     |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type               | Description                        |
| :--: | ------------------ | ---------------------------------- |
| 400  | CONTACT_ID_INVALID | The provided contact ID is invalid |
| 400  | CONTACT_NAME_EMPTY | Contact name empty                 |
| 400  | MSG_ID_INVALID     | Invalid message ID provided        |

## Can bots use this method?

Yes

## Related pages

#### [contacts.importContacts](https://core.telegram.org/method/contacts.importContacts)

Imports contacts: saves a full list on the server, adds already registered contacts to the contact list, returns added contacts and their info.
