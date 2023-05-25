# messages.SendMultiMedia

Send an [album or grouped media](https://core.telegram.org/api/files#albums-grouped-media)

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result = await client.invoke(
    new Api.messages.SendMultiMedia({
      peer: "username",
      multiMedia: [
        new Api.InputSingleMedia({
          media: new Api.InputMediaUploadedPhoto({
            file: await client.uploadFile({
              file: new CustomFile(
                "file.bin",
                fs.statSync("../file.bin").size,
                "../file.bin"
              ),
              workers: 1,
            }),
            stickers: [
              new Api.InputDocument({
                id: BigInt("-4156887774564"),
                accessHash: BigInt("-4156887774564"),
                fileReference: Buffer.from("arbitrary data here"),
              }),
            ],
            ttlSeconds: 43,
          }),
          randomId: BigInt("-4156887774564"),
          message: "Hello there!",
        }),
      ],
      noforwards: true,
      scheduleDate: 43,
      sendAs: "username",
    })
  );
  console.log(result); // prints the result
})();
```

:::

:::tab{title="TypeScript"}

```ts
import { Api, TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result: Api.Updates = await client.invoke(
    new Api.messages.SendMultiMedia({
      peer: "username",
      multiMedia: [
        new Api.InputSingleMedia({
          media: new Api.InputMediaUploadedPhoto({
            file: await client.uploadFile({
              file: new CustomFile(
                "file.bin",
                fs.statSync("../file.bin").size,
                "../file.bin"
              ),
              workers: 1,
            }),
            stickers: [
              new Api.InputDocument({
                id: BigInt("-4156887774564"),
                accessHash: BigInt("-4156887774564"),
                fileReference: Buffer.from("arbitrary data here"),
              }),
            ],
            ttlSeconds: 43,
          }),
          randomId: BigInt("-4156887774564"),
          message: "Hello there!",
        }),
      ],
      noforwards: true,
      scheduleDate: 43,
      sendAs: "username",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|       Name       | Type                                                                                                                                  | Description                                                                                                                                                                                                 |
| :--------------: | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    **flags**     | [#](https://core.telegram.org/type/%23)                                                                                               | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)                                                                                                     |
|    **silent**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](https://core.telegram.org/constructor/true)     | Whether to send the album silently (no notification triggered)                                                                                                                                              |
|  **background**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](https://core.telegram.org/constructor/true)     | Send in background?                                                                                                                                                                                         |
|  **clearDraft**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](https://core.telegram.org/constructor/true)     | Whether to clear [drafts](https://core.telegram.org/api/drafts)                                                                                                                                             |
|  **noforwards**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[true](https://core.telegram.org/constructor/true)    | Only for bots, disallows forwarding and saving of the messages, even if the destination chat doesn't have [content protection](https://telegram.org/blog/protected-content-delete-by-date-and-more) enabled |
|     **peer**     | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                                 | The destination chat                                                                                                                                                                                        |
| **replyToMsgId** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](https://core.telegram.org/type/int)              | The message to reply to                                                                                                                                                                                     |
|  **multiMedia**  | [Vector](https://core.telegram.org/type/Vector%20t)<[InputSingleMedia](https://core.telegram.org/type/InputSingleMedia)>              | The medias to send                                                                                                                                                                                          |
| **scheduleDate** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[int](https://core.telegram.org/type/int)             | Scheduled message date for scheduled messages                                                                                                                                                               |
|    **sendAs**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[InputPeer](https://core.telegram.org/type/InputPeer) | Send this message as the specified peer                                                                                                                                                                     |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                     | Description                                                                                    |
| :--: | ------------------------ | ---------------------------------------------------------------------------------------------- |
| 400  | CHANNEL_PRIVATE          | You haven't joined this channel/supergroup.                                                    |
| 400  | CHAT_ADMIN_REQUIRED      | You must be an admin in this chat to do this.                                                  |
| 400  | CHAT_FORWARDS_RESTRICTED | You can't forward messages from a protected chat.                                              |
| 403  | CHAT_WRITE_FORBIDDEN     | You can't write in this chat.                                                                  |
| 400  | MEDIA_CAPTION_TOO_LONG   | The caption is too long.                                                                       |
| 400  | MEDIA_EMPTY              | The provided media object is invalid.                                                          |
| 400  | MEDIA_INVALID            | Media invalid.                                                                                 |
| 400  | MULTI_MEDIA_TOO_LONG     | Too many media files for album.                                                                |
| 400  | PEER_ID_INVALID          | The provided peer id is invalid.                                                               |
| 500  | RANDOM_ID_DUPLICATE      | You provided a random ID that was already used.                                                |
| 400  | RANDOM_ID_EMPTY          | Random ID empty.                                                                               |
| 400  | SCHEDULE_DATE_TOO_LATE   | You can't schedule a message this far in the future.                                           |
| 400  | SCHEDULE_TOO_MUCH        | There are too many scheduled messages.                                                         |
| 420  | SLOWMODE_WAIT\_%d        | Slowmode is enabled in this chat: wait %d seconds before sending another message to this chat. |

## Can bots use this method?

Yes

## Related pages

#### [Message drafts](https://core.telegram.org/api/drafts)

How to handle message drafts

#### [Uploading and Downloading Files](https://core.telegram.org/api/files)

How to transfer large data batches correctly.