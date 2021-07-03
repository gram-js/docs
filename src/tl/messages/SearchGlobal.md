# messages.SearchGlobal

Search for messages and peers globally

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const session = new StringSession("");
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  const result = await client.invoke(
    new Api.messages.SearchGlobal({
      q: "some string here",
      filter: new Api.InputMessagesFilterPhotos({}),
      minDate: 43,
      maxDate: 43,
      offsetRate: 43,
      offsetPeer: "username",
      offsetId: 43,
      limit: 100,
      folderId: 43,
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

const session = new StringSession("");
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  const result: Api.messages.Messages = await client.invoke(
    new Api.messages.SearchGlobal({
      q: "some string here",
      filter: new Api.InputMessagesFilterPhotos({}),
      minDate: 43,
      maxDate: 43,
      offsetRate: 43,
      offsetPeer: "username",
      offsetId: 43,
      limit: 100,
      folderId: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|      Name      | Type                                                                                                                     | Description                                                                                                                                   |
| :------------: | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
|   **flags**    | [#](https://core.telegram.org/type/%23)                                                                                  | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)                                       |
|  **folderId**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](https://core.telegram.org/type/int) | [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders)                                                |
|     **q**      | [string](https://core.telegram.org/type/string)                                                                          | Query                                                                                                                                         |
|   **filter**   | [MessagesFilter](https://core.telegram.org/type/MessagesFilter)                                                          | Global search filter                                                                                                                          |
|  **minDate**   | [int](https://core.telegram.org/type/int)                                                                                | If a positive value was specified, the method will return only messages with date bigger than min_date                                        |
|  **maxDate**   | [int](https://core.telegram.org/type/int)                                                                                | If a positive value was transferred, the method will return only messages with date smaller than max_date                                     |
| **offsetRate** | [int](https://core.telegram.org/type/int)                                                                                | Initially 0, then set to the [`next\_rate` parameter of messages.messagesSlice](https://core.telegram.org/constructor/messages.messagesSlice) |
| **offsetPeer** | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                    | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets)                                                     |
|  **offsetId**  | [int](https://core.telegram.org/type/int)                                                                                | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets)                                                     |
|   **limit**    | [int](https://core.telegram.org/type/int)                                                                                | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets)                                                     |

## Result

[messages.Messages](https://core.telegram.org/type/messages.Messages)

## Possible errors

| Code | Type               | Description               |
| :--: | ------------------ | ------------------------- |
| 400  | FOLDER_ID_INVALID  | Invalid folder ID         |
| 400  | SEARCH_QUERY_EMPTY | The search query is empty |

## Can bots use this method?

No

## Related pages

#### [Folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [messages.messagesSlice](https://core.telegram.org/constructor/messages.messagesSlice)

Incomplete list of messages and auxiliary data.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
