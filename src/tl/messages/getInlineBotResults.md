# messages.getInlineBotResults

Query an inline bot

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(
        new Api.messages.getInlineBotResults({
            bot: new Api.InputUser({
                /* ... */
            }),
            peer: new Api.InputPeer({
                /* ... */
            }),
            geoPoint: new Api.InputGeoPoint({
                /* ... */
            }),
            query: 'random string here',
            offset: 'random string here',
        }),
    );
    console.log(result); // prints the result
})();
```

:::

:::tab{title="TypeScript"}

```ts
import { Api, TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.messages.BotResults = await client.invoke(
        new Api.messages.getInlineBotResults({
            bot: new Api.InputUser({
                /* ... */
            }),
            peer: new Api.InputPeer({
                /* ... */
            }),
            geoPoint: new Api.InputGeoPoint({
                /* ... */
            }),
            query: 'random string here',
            offset: 'random string here',
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
messages.botResults#947ca848 flags:# gallery:flags.0?true query_id:long next_offset:flags.1?string switch_pm:flags.2?InlineBotSwitchPM results:Vector<BotInlineResult> cache_time:int users:Vector<User> = messages.BotResults;
---functions---
messages.getInlineBotResults#514e999d flags:# bot:InputUser peer:InputPeer geo_point:flags.0?InputGeoPoint query:string offset:string = messages.BotResults;
```

## Parameters

|     Name      | Type                                                                                                                                         | Description                                                                                             |
| :-----------: | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|   **flags**   | [#](https://core.telegram.org/type/%23)                                                                                                      | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|    **bot**    | [InputUser](https://core.telegram.org/type/InputUser)                                                                                        | The bot to query                                                                                        |
|   **peer**    | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                                        | The currently opened chat                                                                               |
| **geo_point** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputGeoPoint](https://core.telegram.org/type/InputGeoPoint) | The geolocation, if requested                                                                           |
|   **query**   | [string](https://core.telegram.org/type/string)                                                                                              | The query                                                                                               |
|  **offset**   | [string](https://core.telegram.org/type/string)                                                                                              | The offset within the results, will be passed directly as-is to the bot.                                |

## Result

[messages.BotResults](https://core.telegram.org/type/messages.BotResults)

## Possible errors

| Code | Type                   | Description                                         |
| :--: | ---------------------- | --------------------------------------------------- |
| 400  | BOT_INLINE_DISABLED    | This bot can't be used in inline mode               |
| 400  | BOT_INVALID            | This is not a valid bot                             |
| 400  | BOT_RESPONSE_TIMEOUT   | A timeout occurred while fetching data from the bot |
| 400  | CHANNEL_PRIVATE        | You haven't joined this channel/supergroup          |
| 400  | INPUT_USER_DEACTIVATED | The specified user was deleted                      |
| 400  | MSG_ID_INVALID         | Invalid message ID provided                         |
| -503 | Timeout                | Timeout while fetching data                         |

## Can bots use this method?

Yes

## Related pages
