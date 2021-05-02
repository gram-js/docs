# updates.getDifference

Get new [updates](https://core.telegram.org/api/updates).

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
        new Api.updates.getDifference({
            pts: 7870694,
            ptsTotalLimit: 4676820,
            date: 2319564,
            qts: 8059435,
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
    const result: Api.updates.Difference = await client.invoke(
        new Api.updates.getDifference({
            pts: 7870694,
            ptsTotalLimit: 4676820,
            date: 2319564,
            qts: 8059435,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
updates.differenceEmpty#5d75a138 date:int seq:int = updates.Difference;
updates.difference#f49ca0 new_messages:Vector<Message> new_encrypted_messages:Vector<EncryptedMessage> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> state:updates.State = updates.Difference;
updates.differenceSlice#a8fb1981 new_messages:Vector<Message> new_encrypted_messages:Vector<EncryptedMessage> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> intermediate_state:updates.State = updates.Difference;
updates.differenceTooLong#4afe8f6d pts:int = updates.Difference;
---functions---
updates.getDifference#25939651 flags:# pts:int pts_total_limit:flags.0?int date:int qts:int = updates.Difference;
```

## Parameters

|        Name         | Type                                                                                                                     | Description                                                                                                                                                                           |
| :-----------------: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      **flags**      | [#](https://core.telegram.org/type/%23)                                                                                  | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)                                                                               |
|       **pts**       | [int](https://core.telegram.org/type/int)                                                                                | PTS, see [updates](https://core.telegram.org/api/updates).                                                                                                                            |
| **pts_total_limit** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](https://core.telegram.org/type/int) | For fast updating: if provided and pts + pts_total_limit < remote pts, [updates.differenceTooLong](https://core.telegram.org/constructor/updates.differenceTooLong) will be returned. |

Simply tells the server to not return the difference if it is bigger than pts_total_limit  
If the remote pts is too big (> ~4000000), this field will default to 1000000|
|**date**|[int](https://core.telegram.org/type/int)|date, see [updates](https://core.telegram.org/api/updates).|
|**qts**|[int](https://core.telegram.org/type/int)|QTS, see [updates](https://core.telegram.org/api/updates).|

## Result

[updates.Difference](https://core.telegram.org/type/updates.Difference)

## Possible errors

| Code | Type                         | Description                                                                           |
| :--: | ---------------------------- | ------------------------------------------------------------------------------------- |
| 401  | AUTH_KEY_PERM_EMPTY          | The temporary auth key must be binded to the permanent auth key to use these methods. |
| 400  | CDN_METHOD_INVALID           | You can't call this method in a CDN DC                                                |
| 400  | DATE_EMPTY                   | Date empty                                                                            |
| 400  | PERSISTENT_TIMESTAMP_EMPTY   | Persistent timestamp empty                                                            |
| 400  | PERSISTENT_TIMESTAMP_INVALID | Persistent timestamp invalid                                                          |

## Can bots use this method?

Yes

## Related pages

#### [Working with Updates](https://core.telegram.org/api/updates)

How to subscribe to updates and handle them properly.

#### [updates.differenceTooLong](https://core.telegram.org/constructor/updates.differenceTooLong)

The difference is [too long](https://core.telegram.org/api/updates#recovering-gaps), and the specified state must be used to refetch updates.
