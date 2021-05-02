# messages.editInlineBotMessage

Edit an inline bot message

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.editInlineBotMessage({
		noWebpage: true,
		id: new Api.InputBotInlineMessageID({...}),
		message: 'random string here',
		media: new Api.InputMedia({...}),
		replyMarkup: new Api.ReplyMarkup({...}),
		entities: [new Api.MessageEntity({...})],
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
    const result: Api.Bool = await client.invoke(new Api.messages.editInlineBotMessage({
		noWebpage: true,
		id: new Api.InputBotInlineMessageID({...}),
		message: 'random string here',
		media: new Api.InputMedia({...}),
		replyMarkup: new Api.ReplyMarkup({...}),
		entities: [new Api.MessageEntity({...})],
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```txt
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.editInlineBotMessage#83557dba flags:# no_webpage:flags.1?true id:InputBotInlineMessageID message:flags.11?string media:flags.14?InputMedia reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> = Bool;
```

## Parameters

|       Name       | Type                                                                                                                                                                                                 | Description                                                                                             |
| :--------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|    **flags**     | [#](https://core.telegram.org/type/%23)                                                                                                                                                              | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|  **no_webpage**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true)                                                                    | Disable webpage preview                                                                                 |
|      **id**      | [InputBotInlineMessageID](https://core.telegram.org/type/InputBotInlineMessageID)                                                                                                                    | Sent inline message ID                                                                                  |
|   **message**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[string](https://core.telegram.org/type/string)                                                                      | Message                                                                                                 |
|    **media**     | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[InputMedia](https://core.telegram.org/type/InputMedia)                                                              | Media                                                                                                   |
| **reply_markup** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[ReplyMarkup](https://core.telegram.org/type/ReplyMarkup)                                                             | Reply markup for inline keyboards                                                                       |
|   **entities**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t) < [MessageEntity](https://core.telegram.org/type/MessageEntity) > | [Message entities for styled text](https://core.telegram.org/api/entities)                              |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type                 | Description                        |
| :--: | -------------------- | ---------------------------------- |
| 400  | MESSAGE_ID_INVALID   | The provided message id is invalid |
| 400  | MESSAGE_NOT_MODIFIED | The message text has not changed   |

## Can bots use this method?

Yes

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities
