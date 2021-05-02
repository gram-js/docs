# messages.uploadMedia

Upload a file and associate it to a chat (without actually sending it to the chat)

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.uploadMedia({
		peer: new Api.InputPeer({...}),
		media: new Api.InputMedia({...}),
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
    const result: Api.MessageMedia = await client.invoke(new Api.messages.uploadMedia({
		peer: new Api.InputPeer({...}),
		media: new Api.InputMedia({...}),
		}));
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
messageMediaEmpty#3ded6320 = MessageMedia;
messageMediaPhoto#695150d7 flags:# photo:flags.0?Photo ttl_seconds:flags.2?int = MessageMedia;
messageMediaGeo#56e0d474 geo:GeoPoint = MessageMedia;
messageMediaContact#cbf24940 phone_number:string first_name:string last_name:string vcard:string user_id:int = MessageMedia;
messageMediaUnsupported#9f84f49e = MessageMedia;
messageMediaDocument#9cb070d7 flags:# document:flags.0?Document ttl_seconds:flags.2?int = MessageMedia;
messageMediaWebPage#a32dd600 webpage:WebPage = MessageMedia;
messageMediaVenue#2ec0533f geo:GeoPoint title:string address:string provider:string venue_id:string venue_type:string = MessageMedia;
messageMediaGame#fdb19008 game:Game = MessageMedia;
messageMediaInvoice#84551347 flags:# shipping_address_requested:flags.1?true test:flags.3?true title:string description:string photo:flags.0?WebDocument receipt_msg_id:flags.2?int currency:string total_amount:long start_param:string = MessageMedia;
messageMediaGeoLive#b940c666 flags:# geo:GeoPoint heading:flags.0?int period:int proximity_notification_radius:flags.1?int = MessageMedia;
messageMediaPoll#4bd6e798 poll:Poll results:PollResults = MessageMedia;
messageMediaDice#3f7ee58b value:int emoticon:string = MessageMedia;
---functions---
messages.uploadMedia#519bc2b1 peer:InputPeer media:InputMedia = MessageMedia;
```

## Parameters

|   Name    | Type                                                    | Description                                                                                         |
| :-------: | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **peer**  | [InputPeer](https://core.telegram.org/type/InputPeer)   | The chat, can be an [inputPeerEmpty](https://core.telegram.org/constructor/inputPeerEmpty) for bots |
| **media** | [InputMedia](https://core.telegram.org/type/InputMedia) | File uploaded in chunks as described in [files »](https://core.telegram.org/api/files)              |

## Result

[MessageMedia](https://core.telegram.org/type/MessageMedia)

## Possible errors

| Code | Type                    | Description                                                 |
| :--: | ----------------------- | ----------------------------------------------------------- |
| 400  | BOT_MISSING             | This method can only be run by a bot                        |
| 400  | CHANNEL_PRIVATE         | You haven't joined this channel/supergroup                  |
| 400  | CHAT_ADMIN_REQUIRED     | You must be an admin in this chat to do this                |
| 403  | CHAT_WRITE_FORBIDDEN    | You can't write in this chat                                |
| 400  | FILE_PARTS_INVALID      | The number of file parts is invalid                         |
| 400  | IMAGE_PROCESS_FAILED    | Failure while processing image                              |
| 400  | INPUT_USER_DEACTIVATED  | The specified user was deleted                              |
| 400  | MEDIA_INVALID           | Media invalid                                               |
| 400  | MSG_ID_INVALID          | Invalid message ID provided                                 |
| 400  | PEER_ID_INVALID         | The provided peer id is invalid                             |
| 400  | PHOTO_EXT_INVALID       | The extension of the photo is invalid                       |
| 400  | PHOTO_SAVE_FILE_INVALID | Internal issues, try again later                            |
| 400  | USER_BANNED_IN_CHANNEL  | You're banned from sending messages in supergroups/channels |
| 400  | WEBPAGE_CURL_FAILED     | Failure while fetching the webpage with cURL                |

## Can bots use this method?

Yes

## Related pages

#### [inputPeerEmpty](https://core.telegram.org/constructor/inputPeerEmpty)

An empty constructor, no user or chat is defined.

#### [Uploading and Downloading Files](https://core.telegram.org/api/files)

How to transfer large data batches correctly.
