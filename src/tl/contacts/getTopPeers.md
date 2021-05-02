# contacts.getTopPeers

Get most used peers

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
        new Api.contacts.getTopPeers({
            correspondents: true,
            botsPm: true,
            botsInline: true,
            phoneCalls: true,
            forwardUsers: true,
            forwardChats: true,
            groups: true,
            channels: true,
            offset: 5972771,
            limit: 6658168,
            hash: 1575713,
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
    const result: Api.contacts.TopPeers = await client.invoke(
        new Api.contacts.getTopPeers({
            correspondents: true,
            botsPm: true,
            botsInline: true,
            phoneCalls: true,
            forwardUsers: true,
            forwardChats: true,
            groups: true,
            channels: true,
            offset: 5972771,
            limit: 6658168,
            hash: 1575713,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
contacts.topPeersNotModified#de266ef5 = contacts.TopPeers;
contacts.topPeers#70b772a8 categories:Vector<TopPeerCategoryPeers> chats:Vector<Chat> users:Vector<User> = contacts.TopPeers;
contacts.topPeersDisabled#b52c939d = contacts.TopPeers;
---functions---
contacts.getTopPeers#d4982db5 flags:# correspondents:flags.0?true bots_pm:flags.1?true bots_inline:flags.2?true phone_calls:flags.3?true forward_users:flags.4?true forward_chats:flags.5?true groups:flags.10?true channels:flags.15?true offset:int limit:int hash:int = contacts.TopPeers;
```

## Parameters

|        Name        | Type                                                                                                                               | Description                                                                                             |
| :----------------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|     **flags**      | [#](https://core.telegram.org/type/%23)                                                                                            | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| **correspondents** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true)  | Users we've chatted most frequently with                                                                |
|    **bots_pm**     | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true)  | Most used bots                                                                                          |
|  **bots_inline**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](https://core.telegram.org/constructor/true)  | Most used inline bots                                                                                   |
|  **phone_calls**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](https://core.telegram.org/constructor/true)  | Most frequently called users                                                                            |
| **forward_users**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](https://core.telegram.org/constructor/true)  | Users to which the users often forwards messages to                                                     |
| **forward_chats**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](https://core.telegram.org/constructor/true)  | Chats to which the users often forwards messages to                                                     |
|     **groups**     | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[true](https://core.telegram.org/constructor/true) | Often-opened groups and supergroups                                                                     |
|    **channels**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[true](https://core.telegram.org/constructor/true) | Most frequently visited channels                                                                        |
|     **offset**     | [int](https://core.telegram.org/type/int)                                                                                          | Offset for [pagination](https://core.telegram.org/api/offsets)                                          |
|     **limit**      | [int](https://core.telegram.org/type/int)                                                                                          | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets)            |
|      **hash**      | [int](https://core.telegram.org/type/int)                                                                                          | [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation)  |

## Result

[contacts.TopPeers](https://core.telegram.org/type/contacts.TopPeers)

## Possible errors

| Code | Type        | Description                   |
| :--: | ----------- | ----------------------------- |
| 400  | TYPES_EMPTY | No top peer type was provided |

## Can bots use this method?

Yes

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
