# messages.setInlineBotResults

Answer an inline query, for bots only

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.setInlineBotResults({
		gallery: true,
		private: true,
		queryId: 1598104,
		results: [new Api.InputBotInlineResult({...})],
		cacheTime: 8220380,
		nextOffset: 'random string here',
		switchPm: new Api.InlineBotSwitchPM({...}),
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
    const result: Api.Bool = await client.invoke(new Api.messages.setInlineBotResults({
		gallery: true,
		private: true,
		queryId: 1598104,
		results: [new Api.InputBotInlineResult({...})],
		cacheTime: 8220380,
		nextOffset: 'random string here',
		switchPm: new Api.InlineBotSwitchPM({...}),
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.setInlineBotResults#eb5ea206 flags:# gallery:flags.0?true private:flags.1?true query_id:long results:Vector<InputBotInlineResult> cache_time:int next_offset:flags.2?string switch_pm:flags.3?InlineBotSwitchPM = Bool;
```

## Parameters

|      Name       | Type                                                                                                                                                 | Description                                                                                                                                                                                                                        |
| :-------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    **flags**    | [#](https://core.telegram.org/type/%23)                                                                                                              | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)                                                                                                                            |
|   **gallery**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true)                    | Set this flag if the results are composed of media files                                                                                                                                                                           |
|   **private**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true)                    | Set this flag if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query                                                          |
|  **query_id**   | [long](https://core.telegram.org/type/long)                                                                                                          | Unique identifier for the answered query                                                                                                                                                                                           |
|   **results**   | [Vector](https://core.telegram.org/type/Vector%20t) < [InputBotInlineResult](https://core.telegram.org/type/InputBotInlineResult) >                  | Vector of results for the inline query                                                                                                                                                                                             |
| **cache_time**  | [int](https://core.telegram.org/type/int)                                                                                                            | The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.                                                                                                            |
| **next_offset** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](https://core.telegram.org/type/string)                       | Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don‘t support pagination. Offset length can’t exceed 64 bytes. |
|  **switch_pm**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[InlineBotSwitchPM](https://core.telegram.org/type/InlineBotSwitchPM) | If passed, clients will display a button with specified text that switches the user to a private chat with the bot and sends the bot a start message with a certain parameter.                                                     |

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
