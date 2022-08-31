# messages.ReorderPinnedDialogs

Reorder pinned dialogs

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
    new Api.messages.ReorderPinnedDialogs({
      folderId: 43,
      order: ["username"],
      force: true,
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

  const result: Api.Bool = await client.invoke(
    new Api.messages.ReorderPinnedDialogs({
      folderId: 43,
      order: ["username"],
      force: true,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name     | Type                                                                                                                              | Description                                                                                             |
| :----------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  **flags**   | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|  **force**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | If set, dialogs pinned server-side but not present in the `order` field will be unpinned.               |
| **folderId** | [int](https://core.telegram.org/type/int)                                                                                         | [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders)          |
|  **order**   | [Vector](https://core.telegram.org/type/Vector%20t)<[InputDialogPeer](https://core.telegram.org/type/InputDialogPeer)>            | New dialog order                                                                                        |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type            | Description                      |
| :--: | --------------- | -------------------------------- |
| 400  | PEER_ID_INVALID | The provided peer id is invalid. |

## Can bots use this method?

No

## Related pages

#### [Folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
