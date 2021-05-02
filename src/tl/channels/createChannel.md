# channels.createChannel

Create a [supergroup/channel](https://core.telegram.org/api/channel).

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.channels.createChannel({
		broadcast: true,
		megagroup: true,
		title: 'random string here',
		about: 'random string here',
		geoPoint: new Api.InputGeoPoint({...}),
		address: 'random string here',
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
    const result: Api.Updates = await client.invoke(new Api.channels.createChannel({
		broadcast: true,
		megagroup: true,
		title: 'random string here',
		about: 'random string here',
		geoPoint: new Api.InputGeoPoint({...}),
		address: 'random string here',
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
channels.createChannel#3d5fb10f flags:# broadcast:flags.0?true megagroup:flags.1?true for_import:flags.3?true title:string about:string geo_point:flags.2?InputGeoPoint address:flags.2?string = Updates;
```

## Parameters

|     Name      | Type                                                                                                                                         | Description                                                                                             |
| :-----------: | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|   **flags**   | [#](https://core.telegram.org/type/%23)                                                                                                      | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| **broadcast** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true)            | Whether to create a [channel](https://core.telegram.org/api/channel)                                    |
| **megagroup** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true)            | Whether to create a [supergroup](https://core.telegram.org/api/channel)                                 |
|   **title**   | [string](https://core.telegram.org/type/string)                                                                                              | Channel title                                                                                           |
|   **about**   | [string](https://core.telegram.org/type/string)                                                                                              | Channel description                                                                                     |
| **geo_point** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InputGeoPoint](https://core.telegram.org/type/InputGeoPoint) | Geogroup location                                                                                       |
|  **address**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](https://core.telegram.org/type/string)               | Geogroup address                                                                                        |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                | Description                                              |
| :--: | ------------------- | -------------------------------------------------------- |
| 400  | CHANNELS_TOO_MUCH   | You have joined too many channels/supergroups            |
| 400  | CHAT_ABOUT_TOO_LONG | Chat about too long                                      |
| 400  | CHAT_TITLE_EMPTY    | No chat title provided                                   |
| 403  | USER_RESTRICTED     | You're spamreported, you can't create channels or chats. |

## Can bots use this method?

Yes

## Related pages

#### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.
