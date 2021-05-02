# contacts.blockFromReplies

Stop getting notifications about [thread replies](https://core.telegram.org/api/threads) of a certain user in @replies

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
        new Api.contacts.blockFromReplies({
            deleteMessage: true,
            deleteHistory: true,
            reportSpam: true,
            msgId: 2523879,
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
    const result: Api.Updates = await client.invoke(
        new Api.contacts.blockFromReplies({
            deleteMessage: true,
            deleteHistory: true,
            reportSpam: true,
            msgId: 2523879,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
@replies
```

## Parameters

|        Name        | Type                                                                                                                              | Description                                                                                             |
| :----------------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|     **flags**      | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| **delete_message** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Whether to delete the specified message as well                                                         |
| **delete_history** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true) | Whether to delete all @replies messages from this user as well                                          |
|  **report_spam**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](https://core.telegram.org/constructor/true) | Whether to also report this user for spam                                                               |
|     **msg_id**     | [int](https://core.telegram.org/type/int)                                                                                         | ID of the message in the [@replies](https://core.telegram.org/api/threads#replies) chat                 |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

### [Threads](https://core.telegram.org/api/threads)

Telegram allows commenting on a [channel post](https://core.telegram.org/api/channel) or on a generic [supergroup message](https://core.telegram.org/api/channel), thanks to message threads.
