# messages.deleteMessages

Deletes messages by their identifiers.

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
        new Api.messages.deleteMessages({
            revoke: true,
            id: [7969713],
        }),
    );
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
    const result: Api.The method returns the list of successfully deleted messages in Vector<int>. = await client.invoke(new Api.messages.deleteMessages({
		revoke: true,
		id: [7969713],
		}));
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
messages.affectedMessages#84d19185 pts:int pts_count:int = messages.AffectedMessages;
---functions---
messages.deleteMessages#e58e95d2 flags:# revoke:flags.0?true id:Vector<int> = messages.AffectedMessages;
```

## Parameters

|    Name    | Type                                                                                                                              | Description                                                                                             |
| :--------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **flags**  | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| **revoke** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Whether to delete messages for all participants of the chat                                             |
|   **id**   | [Vector](https://core.telegram.org/type/Vector%20t) < [int](https://core.telegram.org/type/int) >                                 | Message ID list                                                                                         |

## Result

The method returns the list of successfully deleted messages in [Vector](https://core.telegram.org/type/Vector%20t)<[int](https://core.telegram.org/type/int)>.

## Possible errors

| Code | Type                     | Description                                                                                            |
| :--: | ------------------------ | ------------------------------------------------------------------------------------------------------ |
| 403  | MESSAGE_DELETE_FORBIDDEN | You can't delete one of the messages you tried to delete, most likely because it is a service message. |

## Can bots use this method?

Yes

## Related pages
