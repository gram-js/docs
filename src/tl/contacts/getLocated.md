# contacts.getLocated

Get contacts near you

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.contacts.getLocated({
		background: true,
		geoPoint: new Api.InputGeoPoint({...}),
		selfExpires: 8608510,
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
    const result: Api.Updates = await client.invoke(new Api.contacts.getLocated({
		background: true,
		geoPoint: new Api.InputGeoPoint({...}),
		selfExpires: 8608510,
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
contacts.getLocated#d348bc44 flags:# background:flags.1?true geo_point:InputGeoPoint self_expires:flags.0?int = Updates;
```

## Parameters

|                                                          Name                                                          | Type                                                                                                                              | Description                                                                                                                                                                                                                      |
| :--------------------------------------------------------------------------------------------------------------------: | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                       **flags**                                                        | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)                                                                                                                          |
|                                                     **background**                                                     | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true) | While the geolocation of the current user is public, clients should update it in the background every half-an-hour or so, while setting this flag.                                                                               |
| Do this only if the new location is more than 1 KM away from the previous one, or if the previous location is unknown. |
|                                                     **geo_point**                                                      | [InputGeoPoint](https://core.telegram.org/type/InputGeoPoint)                                                                     | Geolocation                                                                                                                                                                                                                      |
|                                                    **self_expires**                                                    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](https://core.telegram.org/type/int)          | If set, the geolocation of the current user will be public for the specified number of seconds; pass 0x7fffffff to disable expiry, 0 to make the current geolocation private; if the flag isn't set, no changes will be applied. |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                    | Description                                                 |
| :--: | ----------------------- | ----------------------------------------------------------- |
| 400  | GEO_POINT_INVALID       | Invalid geoposition provided                                |
| 406  | USERPIC_UPLOAD_REQUIRED | You must have a profile picture to publish your geolocation |

## Can bots use this method?

Yes

## Related pages
