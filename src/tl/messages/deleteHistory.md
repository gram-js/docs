# messages.deleteHistory

Deletes communication history.

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
        new Api.messages.deleteHistory({
            justClear: true,
            revoke: true,
            peer: new Api.InputPeer({
                /* ... */
            }),
            maxId: 6598494,
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
    const result: Api.messages.AffectedHistory = await client.invoke(
        new Api.messages.deleteHistory({
            justClear: true,
            revoke: true,
            peer: new Api.InputPeer({
                /* ... */
            }),
            maxId: 6598494,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
messages.affectedHistory#b45c69d1 pts:int pts_count:int offset:int = messages.AffectedHistory;
---functions---
messages.deleteHistory#1c015b09 flags:# just_clear:flags.0?true revoke:flags.1?true peer:InputPeer max_id:int = messages.AffectedHistory;
```

## Parameters

|      Name      | Type                                                                                                                              | Description                                                                                             |
| :------------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|   **flags**    | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| **just_clear** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Just clear history for the current user, without actually removing messages for every chat user         |
|   **revoke**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true) | Whether to delete the message history for all chat participants                                         |
|    **peer**    | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                             | User or chat, communication history of which will be deleted                                            |
|   **max_id**   | [int](https://core.telegram.org/type/int)                                                                                         | Maximum ID of message to delete                                                                         |

## Result

[messages.AffectedHistory](https://core.telegram.org/type/messages.AffectedHistory)

## Possible errors

| Code | Type               | Description                        |
| :--: | ------------------ | ---------------------------------- |
| 400  | CHAT_ID_INVALID    | The provided chat id is invalid    |
| 400  | MESSAGE_ID_INVALID | The provided message id is invalid |
| 400  | MSG_ID_INVALID     | Invalid message ID provided        |
| 400  | PEER_ID_INVALID    | The provided peer id is invalid    |

## Can bots use this method?

Yes

## Related pages
