# messages.exportChatInvite

Export an invite link for a chat

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
        new Api.messages.exportChatInvite({
            peer: new Api.InputPeer({
                /* ... */
            }),
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
    const result: Api.ExportedChatInvite = await client.invoke(
        new Api.messages.exportChatInvite({
            peer: new Api.InputPeer({
                /* ... */
            }),
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
chatInviteEmpty#69df3769 = ExportedChatInvite;
chatInviteExported#fc2e05bc link:string = ExportedChatInvite;
---functions---
messages.exportChatInvite#df7534c peer:InputPeer = ExportedChatInvite;
```

## Parameters

|   Name   | Type                                                  | Description |
| :------: | ----------------------------------------------------- | ----------- |
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Chat        |

## Result

[ExportedChatInvite](https://core.telegram.org/type/ExportedChatInvite)

## Possible errors

| Code | Type                 | Description                                  |
| :--: | -------------------- | -------------------------------------------- |
| 400  | CHANNEL_PRIVATE      | You haven't joined this channel/supergroup   |
| 400  | CHAT_ADMIN_REQUIRED  | You must be an admin in this chat to do this |
| 400  | CHAT_ID_INVALID      | The provided chat id is invalid              |
| 403  | CHAT_WRITE_FORBIDDEN | You can't write in this chat                 |
| 400  | PEER_ID_INVALID      | The provided peer id is invalid              |

## Can bots use this method?

Yes

## Related pages
