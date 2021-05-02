# messages.setTyping

Sends a current user typing event (see [SendMessageAction](https://core.telegram.org/type/SendMessageAction) for all event types) to a conversation partner or group.

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
        new Api.messages.setTyping({
            peer: new Api.InputPeer({
                /* ... */
            }),
            topMsgId: 6046220,
            action: new Api.SendMessageAction({
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
    const result: Api.Bool = await client.invoke(
        new Api.messages.setTyping({
            peer: new Api.InputPeer({
                /* ... */
            }),
            topMsgId: 6046220,
            action: new Api.SendMessageAction({
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
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.setTyping#58943ee2 flags:# peer:InputPeer top_msg_id:flags.0?int action:SendMessageAction = Bool;
```

## Parameters

|                                     Name                                      | Type                                                                                                                     | Description                                                                                             |
| :---------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
|                                   **flags**                                   | [#](https://core.telegram.org/type/%23)                                                                                  | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|                                   **peer**                                    | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                    | Target user or group                                                                                    |
|                                **top_msg_id**                                 | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](https://core.telegram.org/type/int) | [Thread ID](https://core.telegram.org/api/threads)                                                      |
|                                  **action**                                   | [SendMessageAction](https://core.telegram.org/type/SendMessageAction)                                                    | Type of action                                                                                          |
| Parameter added in [Layer 17](https://core.telegram.org/api/layers#layer-17). |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type                   | Description                                                 |
| :--: | ---------------------- | ----------------------------------------------------------- |
| 400  | CHANNEL_INVALID        | The provided channel is invalid                             |
| 400  | CHANNEL_PRIVATE        | You haven't joined this channel/supergroup                  |
| 400  | CHAT_ADMIN_REQUIRED    | You must be an admin in this chat to do this                |
| 400  | CHAT_ID_INVALID        | The provided chat id is invalid                             |
| 403  | CHAT_WRITE_FORBIDDEN   | You can't write in this chat                                |
| 400  | INPUT_USER_DEACTIVATED | The specified user was deleted                              |
| 400  | MSG_ID_INVALID         | Invalid message ID provided                                 |
| 400  | PEER_ID_INVALID        | The provided peer id is invalid                             |
| 400  | USER_BANNED_IN_CHANNEL | You're banned from sending messages in supergroups/channels |
| 400  | USER_IS_BLOCKED        | You were blocked by this user                               |
| 400  | USER_IS_BOT            | Bots can't send messages to other bots                      |

## Can bots use this method?

Yes

## Related pages

### [Threads](https://core.telegram.org/api/threads)

Telegram allows commenting on a [channel post](https://core.telegram.org/api/channel) or on a generic [supergroup message](https://core.telegram.org/api/channel), thanks to message threads.

### [Layers](https://core.telegram.org/api/layers)

Below you will find information on scheme changes. For more details on the use of layers, see [Invoking API methods](https://core.telegram.org/api/invoking#layers).

### [SendMessageAction](https://core.telegram.org/type/SendMessageAction)

User actions. Use this to provide users with detailed info about their chat partners' actions: typing or sending attachments of all kinds.
