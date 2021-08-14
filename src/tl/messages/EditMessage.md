# messages.EditMessage

Edit message

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
    new Api.messages.EditMessage({
      peer: "username",
      id: 43,
      noWebpage: true,
      message: "Hello there!",
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
      scheduleDate: 43,
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
    new Api.messages.EditMessage({
      peer: "username",
      id: 43,
      noWebpage: true,
      message: "Hello there!",
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
      scheduleDate: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|       Name       | Type                                                                                                                                                                                              | Description                                                                                             |
| :--------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|    **flags**     | [#](https://core.telegram.org/type/%23)                                                                                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|  **noWebpage**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true)                                                                 | Disable webpage preview                                                                                 |
|     **peer**     | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                                                                                             | Where was the message sent                                                                              |
|      **id**      | [int](https://core.telegram.org/type/int)                                                                                                                                                         | ID of the message to edit                                                                               |
|   **message**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[string](https://core.telegram.org/type/string)                                                                   | New message                                                                                             |
|    **media**     | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[InputMedia](https://core.telegram.org/type/InputMedia)                                                           | New attached media                                                                                      |
| **replyMarkup**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[ReplyMarkup](https://core.telegram.org/type/ReplyMarkup)                                                          | Reply markup for inline keyboards                                                                       |
|   **entities**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](https://core.telegram.org/type/MessageEntity)> | [Message entities for styled text](https://core.telegram.org/api/entities)                              |
| **scheduleDate** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[int](https://core.telegram.org/type/int)                                                                         | Scheduled message date for [scheduled messages](https://core.telegram.org/api/scheduled-messages)       |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                      | Description                                                                       |
| :--: | ------------------------- | --------------------------------------------------------------------------------- |
| 400  | BUTTON_DATA_INVALID       | The data of one or more of the buttons you provided is invalid                    |
| 400  | BUTTON_TYPE_INVALID       | The type of one or more of the buttons you provided is invalid                    |
| 400  | BUTTON_URL_INVALID        | Button URL invalid                                                                |
| 400  | CHANNEL_INVALID           | The provided channel is invalid                                                   |
| 400  | CHANNEL_PRIVATE           | You haven't joined this channel/supergroup                                        |
| 400  | CHAT_ADMIN_REQUIRED       | You must be an admin in this chat to do this                                      |
| 403  | CHAT_WRITE_FORBIDDEN      | You can't write in this chat                                                      |
| 403  | INLINE_BOT_REQUIRED       | Only the inline bot can edit message                                              |
| 400  | INPUT_USER_DEACTIVATED    | The specified user was deleted                                                    |
| 400  | MEDIA_CAPTION_TOO_LONG    | The caption is too long                                                           |
| 400  | MEDIA_PREV_INVALID        | Previous media invalid                                                            |
| 403  | MESSAGE_AUTHOR_REQUIRED   | Message author required                                                           |
| 400  | MESSAGE_EDIT_TIME_EXPIRED | You can't edit this message anymore, too much time has passed since its creation. |
| 400  | MESSAGE_EMPTY             | The provided message is empty                                                     |
| 400  | MESSAGE_ID_INVALID        | The provided message id is invalid                                                |
| 400  | MESSAGE_NOT_MODIFIED      | The message text has not changed                                                  |
| 400  | MESSAGE_TOO_LONG          | The provided message is too long                                                  |
| 400  | MSG_ID_INVALID            | Invalid message ID provided                                                       |
| 400  | PEER_ID_INVALID           | The provided peer id is invalid                                                   |
| 400  | REPLY_MARKUP_INVALID      | The provided reply markup is invalid                                              |
| 400  | SCHEDULE_DATE_INVALID     | Invalid schedule date provided                                                    |
| 400  | USER_BANNED_IN_CHANNEL    | You're banned from sending messages in supergroups/channels                       |

## Can bots use this method?

Yes

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Scheduled messages](https://core.telegram.org/api/scheduled-messages)

Telegram allows scheduling messages
