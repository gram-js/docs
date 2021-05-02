# messages.reorderPinnedDialogs

Reorder pinned dialogs

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
        new Api.messages.reorderPinnedDialogs({
            force: true,
            folderId: 2182144,
            order: [
                new Api.InputDialogPeer({
                    /* ... */
                }),
            ],
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
    const result: Api.Bool = await client.invoke(
        new Api.messages.reorderPinnedDialogs({
            force: true,
            folderId: 2182144,
            order: [
                new Api.InputDialogPeer({
                    /* ... */
                }),
            ],
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.reorderPinnedDialogs#3b1adf37 flags:# force:flags.0?true folder_id:int order:Vector<InputDialogPeer> = Bool;
```

## Parameters

|     Name      | Type                                                                                                                              | Description                                                                                             |
| :-----------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|   **flags**   | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|   **force**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | If set, dialogs pinned server-side but not present in the order field will be unpinned.                 |
| **folder_id** | [int](https://core.telegram.org/type/int)                                                                                         | [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders)          |
|   **order**   | [Vector](https://core.telegram.org/type/Vector%20t) < [InputDialogPeer](https://core.telegram.org/type/InputDialogPeer) >         | New dialog order                                                                                        |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type            | Description                     |
| :--: | --------------- | ------------------------------- |
| 400  | PEER_ID_INVALID | The provided peer id is invalid |

## Can bots use this method?

Yes

## Related pages

### [Folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
