# messages.EditChatDefaultBannedRights

Edit the default banned rights of a [channel/supergroup/group](https://core.telegram.org/api/channel).

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
    new Api.messages.EditChatDefaultBannedRights({
      peer: "username",
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

const session = new StringSession("");
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  const result: Api.Updates = await client.invoke(
    new Api.messages.EditChatDefaultBannedRights({
      peer: "username",
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

|       Name       | Type                                                                | Description           |
| :--------------: | ------------------------------------------------------------------- | --------------------- |
|     **peer**     | [InputPeer](https://core.telegram.org/type/InputPeer)               | The peer              |
| **bannedRights** | [ChatBannedRights](https://core.telegram.org/type/ChatBannedRights) | The new global rights |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                  | Description                                          |
| :--: | --------------------- | ---------------------------------------------------- |
| 400  | BANNED_RIGHTS_INVALID | You provided some invalid flags in the banned rights |
| 400  | CHAT_ADMIN_REQUIRED   | You must be an admin in this chat to do this         |
| 400  | CHAT_NOT_MODIFIED     | The pinned message wasn't modified                   |
| 400  | PEER_ID_INVALID       | The provided peer id is invalid                      |
| 400  | UNTIL_DATE_INVALID    | Invalid until date provided                          |

## Can bots use this method?

Yes

## Related pages

#### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.
