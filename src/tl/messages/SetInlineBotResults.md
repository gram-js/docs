# messages.SetInlineBotResults

Answer an inline query, for bots only

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
    new Api.messages.SetInlineBotResults({
      queryId: BigInt("-4156887774564"),
      results: [
        new Api.InputBotInlineResult({
          id: "some string here",
          type: "some string here",
          sendMessage: new Api.InputBotInlineMessageMediaAuto({
            message: "Hello there!",
          }),
          title: "My very normal title",
          description: "some string here",
          url: "some string here",
          thumb: new Api.InputWebDocument({
            url: "some string here",
            size: 43,
            mimeType: "some string here",
            attributes: [
              new Api.DocumentAttributeImageSize({
                w: 43,
                h: 43,
              }),
            ],
          }),
          content: new Api.InputWebDocument({
            url: "some string here",
            size: 43,
            mimeType: "some string here",
            attributes: [
              new Api.DocumentAttributeImageSize({
                w: 43,
                h: 43,
              }),
            ],
          }),
        }),
      ],
      cacheTime: 43,
      gallery: true,
      private: true,
      nextOffset: "some string here",
      switchPm: new Api.InlineBotSwitchPM({
        text: "some string here",
        startParam: "some string here",
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
    new Api.messages.SetInlineBotResults({
      queryId: BigInt("-4156887774564"),
      results: [
        new Api.InputBotInlineResult({
          id: "some string here",
          type: "some string here",
          sendMessage: new Api.InputBotInlineMessageMediaAuto({
            message: "Hello there!",
          }),
          title: "My very normal title",
          description: "some string here",
          url: "some string here",
          thumb: new Api.InputWebDocument({
            url: "some string here",
            size: 43,
            mimeType: "some string here",
            attributes: [
              new Api.DocumentAttributeImageSize({
                w: 43,
                h: 43,
              }),
            ],
          }),
          content: new Api.InputWebDocument({
            url: "some string here",
            size: 43,
            mimeType: "some string here",
            attributes: [
              new Api.DocumentAttributeImageSize({
                w: 43,
                h: 43,
              }),
            ],
          }),
        }),
      ],
      cacheTime: 43,
      gallery: true,
      private: true,
      nextOffset: "some string here",
      switchPm: new Api.InlineBotSwitchPM({
        text: "some string here",
        startParam: "some string here",
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|      Name      | Type                                                                                                                                                 | Description                                                                                                                                                                                                                        |
| :------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   **flags**    | [#](https://core.telegram.org/type/%23)                                                                                                              | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)                                                                                                                            |
|  **gallery**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true)                    | Set this flag if the results are composed of media files                                                                                                                                                                           |
|  **private**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true)                    | Set this flag if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query                                                          |
|  **queryId**   | [long](https://core.telegram.org/type/long)                                                                                                          | Unique identifier for the answered query                                                                                                                                                                                           |
|  **results**   | [Vector](https://core.telegram.org/type/Vector%20t)<[InputBotInlineResult](https://core.telegram.org/type/InputBotInlineResult)>                     | Vector of results for the inline query                                                                                                                                                                                             |
| **cacheTime**  | [int](https://core.telegram.org/type/int)                                                                                                            | The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.                                                                                                            |
| **nextOffset** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](https://core.telegram.org/type/string)                       | Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don‘t support pagination. Offset length can’t exceed 64 bytes. |
|  **switchPm**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[InlineBotSwitchPM](https://core.telegram.org/type/InlineBotSwitchPM) | If passed, clients will display a button with specified text that switches the user to a private chat with the bot and sends the bot a start message with a certain parameter.                                                     |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type                       | Description                                                    |
| :--: | -------------------------- | -------------------------------------------------------------- |
| 400  | ARTICLE_TITLE_EMPTY        | The title of the article is empty                              |
| 400  | BUTTON_DATA_INVALID        | The data of one or more of the buttons you provided is invalid |
| 400  | BUTTON_TYPE_INVALID        | The type of one or more of the buttons you provided is invalid |
| 400  | BUTTON_URL_INVALID         | Button URL invalid                                             |
| 400  | GIF_CONTENT_TYPE_INVALID   | GIF content-type invalid                                       |
| 400  | MESSAGE_EMPTY              | The provided message is empty                                  |
| 400  | MESSAGE_TOO_LONG           | The provided message is too long                               |
| 400  | PHOTO_CONTENT_TYPE_INVALID | Photo mime-type invalid                                        |
| 400  | PHOTO_CONTENT_URL_EMPTY    | Photo URL invalid                                              |
| 400  | PHOTO_INVALID              | Photo invalid                                                  |
| 400  | PHOTO_THUMB_URL_EMPTY      | Photo thumbnail URL is empty                                   |
| 400  | QUERY_ID_INVALID           | The query ID is invalid                                        |
| 400  | REPLY_MARKUP_INVALID       | The provided reply markup is invalid                           |
| 400  | RESULTS_TOO_MUCH           | Too many results were provided                                 |
| 400  | RESULT_ID_DUPLICATE        | You provided a duplicate result ID                             |
| 400  | RESULT_TYPE_INVALID        | Result type invalid                                            |
| 400  | SEND_MESSAGE_MEDIA_INVALID | Invalid media provided                                         |
| 400  | SEND_MESSAGE_TYPE_INVALID  | The message type is invalid                                    |
| 400  | START_PARAM_INVALID        | Start parameter invalid                                        |
| 403  | USER_BOT_INVALID           | This method can only be called by a bot                        |
| 400  | WEBDOCUMENT_INVALID        | Invalid webdocument URL provided                               |
| 400  | WEBDOCUMENT_MIME_INVALID   | Invalid webdocument mime type provided                         |
| 400  | WEBDOCUMENT_SIZE_TOO_BIG   | Webdocument is too big!                                        |

## Can bots use this method?

Yes

## Related pages
