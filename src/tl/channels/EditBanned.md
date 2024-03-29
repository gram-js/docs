# channels.EditBanned

Ban/unban/kick a user in a [supergroup/channel](https://core.telegram.org/api/channel).

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
    new Api.channels.EditBanned({
      channel: "username",
      participant: "username",
      bannedRights: new Api.ChatBannedRights({
        untilDate: 43,
        viewMessages: None,
        sendMessages: None,
        sendMedia: true,
        sendStickers: true,
        sendGifs: true,
        sendGames: true,
        sendInline: true,
        sendPolls: true,
        changeInfo: true,
        inviteUsers: true,
        pinMessages: true,
      }),
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

  const result: Api.Updates = await client.invoke(
    new Api.channels.EditBanned({
      channel: "username",
      participant: "username",
      bannedRights: new Api.ChatBannedRights({
        untilDate: 43,
        viewMessages: None,
        sendMessages: None,
        sendMedia: true,
        sendStickers: true,
        sendGifs: true,
        sendGames: true,
        sendInline: true,
        sendPolls: true,
        changeInfo: true,
        inviteUsers: true,
        pinMessages: true,
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|       Name       | Type                                                                | Description                                                      |
| :--------------: | ------------------------------------------------------------------- | ---------------------------------------------------------------- |
|   **channel**    | [InputChannel](https://core.telegram.org/type/InputChannel)         | The [supergroup/channel](https://core.telegram.org/api/channel). |
| **participant**  | [InputPeer](https://core.telegram.org/type/InputPeer)               | Participant to ban                                               |
| **bannedRights** | [ChatBannedRights](https://core.telegram.org/type/ChatBannedRights) | The banned rights                                                |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                   | Description                                   |
| :--: | ---------------------- | --------------------------------------------- |
| 400  | CHANNEL_INVALID        | The provided channel is invalid.              |
| 400  | CHANNEL_PRIVATE        | You haven't joined this channel/supergroup.   |
| 400  | CHAT_ADMIN_REQUIRED    | You must be an admin in this chat to do this. |
| 403  | CHAT_WRITE_FORBIDDEN   | You can't write in this chat.                 |
| 400  | INPUT_USER_DEACTIVATED | The specified user was deleted.               |
| 400  | MSG_ID_INVALID         | Invalid message ID provided.                  |
| 400  | PARTICIPANT_ID_INVALID | The specified participant ID is invalid.      |
| 400  | PEER_ID_INVALID        | The provided peer id is invalid.              |
| 400  | USER_ADMIN_INVALID     | You're not an admin.                          |
| 400  | USER_ID_INVALID        | The provided user ID is invalid.              |

## Can bots use this method?

Yes

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
