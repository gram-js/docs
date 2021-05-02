# messages.searchGlobal

Search for messages and peers globally

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
        new Api.messages.searchGlobal({
            folderId: 9421634,
            q: 'random string here',
            filter: new Api.MessagesFilter({
                /* ... */
            }),
            minDate: 9329785,
            maxDate: 7418948,
            offsetRate: 6917823,
            offsetPeer: new Api.InputPeer({
                /* ... */
            }),
            offsetId: 9896393,
            limit: 6987313,
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
    const result: Api.messages.Messages = await client.invoke(
        new Api.messages.searchGlobal({
            folderId: 9421634,
            q: 'random string here',
            filter: new Api.MessagesFilter({
                /* ... */
            }),
            minDate: 9329785,
            maxDate: 7418948,
            offsetRate: 6917823,
            offsetPeer: new Api.InputPeer({
                /* ... */
            }),
            offsetId: 9896393,
            limit: 6987313,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
messages.messages#8c718e87 messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#3a54685e flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#64479808 flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;
---functions---
messages.searchGlobal#4bc6589a flags:# folder_id:flags.0?int q:string filter:MessagesFilter min_date:int max_date:int offset_rate:int offset_peer:InputPeer offset_id:int limit:int = messages.Messages;
```

## Parameters

|      Name       | Type                                                                                                                     | Description                                                                                                                                |
| :-------------: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
|    **flags**    | [#](https://core.telegram.org/type/%23)                                                                                  | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)                                    |
|  **folder_id**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](https://core.telegram.org/type/int) | [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders)                                             |
|      **q**      | [string](https://core.telegram.org/type/string)                                                                          | Query                                                                                                                                      |
|   **filter**    | [MessagesFilter](https://core.telegram.org/type/MessagesFilter)                                                          | Global search filter                                                                                                                       |
|  **min_date**   | [int](https://core.telegram.org/type/int)                                                                                | If a positive value was specified, the method will return only messages with date bigger than min_date                                     |
|  **max_date**   | [int](https://core.telegram.org/type/int)                                                                                | If a positive value was transferred, the method will return only messages with date smaller than max_date                                  |
| **offset_rate** | [int](https://core.telegram.org/type/int)                                                                                | Initially 0, then set to the [next_rate parameter of messages.messagesSlice](https://core.telegram.org/constructor/messages.messagesSlice) |
| **offset_peer** | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                    | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets)                                                  |
|  **offset_id**  | [int](https://core.telegram.org/type/int)                                                                                | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets)                                                  |
|    **limit**    | [int](https://core.telegram.org/type/int)                                                                                | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets)                                                  |

## Result

[messages.Messages](https://core.telegram.org/type/messages.Messages)

## Possible errors

| Code | Type               | Description               |
| :--: | ------------------ | ------------------------- |
| 400  | FOLDER_ID_INVALID  | Invalid folder ID         |
| 400  | SEARCH_QUERY_EMPTY | The search query is empty |

## Can bots use this method?

Yes

## Related pages

#### [Folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [messages.messagesSlice](https://core.telegram.org/constructor/messages.messagesSlice)

Incomplete list of messages and auxiliary data.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
