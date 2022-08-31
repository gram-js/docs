# messages.EditInlineBotMessage

Edit an inline bot message

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
    new Api.messages.EditInlineBotMessage({
      id: new Api.InputBotInlineMessageID({
        dcId: 43,
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
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

  const result: Api.Bool = await client.invoke(
    new Api.messages.EditInlineBotMessage({
      id: new Api.InputBotInlineMessageID({
        dcId: 43,
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
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
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|      Name       | Type                                                                                                                                                                                              | Description                                                                                             |
| :-------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|    **flags**    | [#](https://core.telegram.org/type/%23)                                                                                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|  **noWebpage**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true)                                                                 | Disable webpage preview                                                                                 |
|     **id**      | [InputBotInlineMessageID](https://core.telegram.org/type/InputBotInlineMessageID)                                                                                                                 | Sent inline message ID                                                                                  |
|   **message**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[string](https://core.telegram.org/type/string)                                                                   | Message                                                                                                 |
|    **media**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[InputMedia](https://core.telegram.org/type/InputMedia)                                                           | Media                                                                                                   |
| **replyMarkup** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[ReplyMarkup](https://core.telegram.org/type/ReplyMarkup)                                                          | Reply markup for inline keyboards                                                                       |
|  **entities**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](https://core.telegram.org/type/MessageEntity)> | [Message entities for styled text](https://core.telegram.org/api/entities)                              |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type                 | Description                                                                                       |
| :--: | -------------------- | ------------------------------------------------------------------------------------------------- |
| 400  | MESSAGE_ID_INVALID   | The provided message id is invalid.                                                               |
| 400  | MESSAGE_NOT_MODIFIED | The provided message data is identical to the previous message data, the message wasn't modified. |

## Can bots use this method?

Yes

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities
