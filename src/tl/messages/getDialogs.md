# messages.getDialogs

Returns the current user dialog list.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.getDialogs({
		excludePinned: true,
		folderId: 1470086,
		offsetDate: 2226947,
		offsetId: 483369,
		offsetPeer: new Api.InputPeer({...}),
		limit: 5241323,
		hash: 7683946,
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
    const result: Api.messages.Dialogs = await client.invoke(new Api.messages.getDialogs({
		excludePinned: true,
		folderId: 1470086,
		offsetDate: 2226947,
		offsetId: 483369,
		offsetPeer: new Api.InputPeer({...}),
		limit: 5241323,
		hash: 7683946,
		}));
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
messages.dialogs#15ba6c40 dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Dialogs;
messages.dialogsSlice#71e094f3 count:int dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Dialogs;
messages.dialogsNotModified#f0e3e596 count:int = messages.Dialogs;
---functions---
messages.getDialogs#a0ee3b73 flags:# exclude_pinned:flags.0?true folder_id:flags.1?int offset_date:int offset_id:int offset_peer:InputPeer limit:int hash:int = messages.Dialogs;
```

## Parameters

|        Name        | Type                                                                                                                              | Description                                                                                             |
| :----------------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|     **flags**      | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| **exclude_pinned** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Exclude pinned dialogs                                                                                  |
|   **folder_id**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](https://core.telegram.org/type/int)          | [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders)          |
|  **offset_date**   | [int](https://core.telegram.org/type/int)                                                                                         | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets)               |
|   **offset_id**    | [int](https://core.telegram.org/type/int)                                                                                         | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets)               |
|  **offset_peer**   | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                             | [Offset peer for pagination](https://core.telegram.org/api/offsets)                                     |
|     **limit**      | [int](https://core.telegram.org/type/int)                                                                                         | Number of list elements to be returned                                                                  |
|      **hash**      | [int](https://core.telegram.org/type/int)                                                                                         | [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation)  |

## Result

[messages.Dialogs](https://core.telegram.org/type/messages.Dialogs)

## Possible errors

| Code | Type                      | Description                         |
| :--: | ------------------------- | ----------------------------------- |
| 400  | FOLDER_ID_INVALID         | Invalid folder ID                   |
| 400  | INPUT_CONSTRUCTOR_INVALID | The provided constructor is invalid |
| 400  | OFFSET_PEER_ID_INVALID    | The provided offset peer is invalid |

## Can bots use this method?

Yes

## Related pages

#### [Folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
