# messages.getPinnedDialogs

Get pinned dialogs

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
        new Api.messages.getPinnedDialogs({
            folderId: 2463643,
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
    const result: Api.messages.PeerDialogs = await client.invoke(
        new Api.messages.getPinnedDialogs({
            folderId: 2463643,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
messages.peerDialogs#3371c354 dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> state:updates.State = messages.PeerDialogs;
---functions---
messages.getPinnedDialogs#d6b94df2 folder_id:int = messages.PeerDialogs;
```

## Parameters

|     Name      | Type                                      | Description                                                                                    |
| :-----------: | ----------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **folder_id** | [int](https://core.telegram.org/type/int) | [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) |

## Result

[messages.PeerDialogs](https://core.telegram.org/type/messages.PeerDialogs)

## Possible errors

| Code | Type              | Description       |
| :--: | ----------------- | ----------------- |
| 400  | FOLDER_ID_INVALID | Invalid folder ID |

## Can bots use this method?

Yes

## Related pages

#### [Folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
