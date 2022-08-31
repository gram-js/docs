# messages.GetDialogs

Returns the current user dialog list.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result = await client.invoke(
    new Api.messages.GetDialogs({
      offsetDate: 43,
      offsetId: 43,
      offsetPeer: "username",
      limit: 100,
      hash: BigInt("-4156887774564"),
      excludePinned: true,
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

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result: Api.messages.Dialogs = await client.invoke(
    new Api.messages.GetDialogs({
      offsetDate: 43,
      offsetId: 43,
      offsetPeer: "username",
      limit: 100,
      hash: BigInt("-4156887774564"),
      excludePinned: true,
      folderId: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|       Name        | Type                                                                                                                              | Description                                                                                             |
| :---------------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|     **flags**     | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| **excludePinned** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Exclude pinned dialogs                                                                                  |
|   **folderId**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](https://core.telegram.org/type/int)          | [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders)          |
|  **offsetDate**   | [int](https://core.telegram.org/type/int)                                                                                         | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets)               |
|   **offsetId**    | [int](https://core.telegram.org/type/int)                                                                                         | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets)               |
|  **offsetPeer**   | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                             | [Offset peer for pagination](https://core.telegram.org/api/offsets)                                     |
|     **limit**     | [int](https://core.telegram.org/type/int)                                                                                         | Number of list elements to be returned                                                                  |
|     **hash**      | [long](https://core.telegram.org/type/long)                                                                                       | [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation)  |

## Result

[messages.Dialogs](https://core.telegram.org/type/messages.Dialogs)

## Possible errors

| Code | Type                   | Description                          |
| :--: | ---------------------- | ------------------------------------ |
| 400  | FOLDER_ID_INVALID      | Invalid folder ID.                   |
| 400  | OFFSET_PEER_ID_INVALID | The provided offset peer is invalid. |

## Can bots use this method?

No

## Related pages

#### [Folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
