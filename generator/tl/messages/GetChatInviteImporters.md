# messages.GetChatInviteImporters

Get info about the users that joined the chat using a specific chat invite

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
    new Api.messages.GetChatInviteImporters({
      peer: "username",
      offsetDate: 43,
      offsetUser: "username",
      limit: 100,
      requested: true,
      link: "some string here",
      q: "some string here",
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

  const result: Api.messages.ChatInviteImporters = await client.invoke(
    new Api.messages.GetChatInviteImporters({
      peer: "username",
      offsetDate: 43,
      offsetUser: "username",
      limit: 100,
      requested: true,
      link: "some string here",
      q: "some string here",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|      Name      | Type                                                                                                                              | Description                                                                                                                                                                                                    |
| :------------: | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   **flags**    | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)                                                                                                        |
| **requested**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | If set, only returns info about users with pending [join requests »](https://core.telegram.org/api/invites#join-requests)                                                                                      |
|    **peer**    | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                             | Chat                                                                                                                                                                                                           |
|    **link**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](https://core.telegram.org/type/string)    | Invite link                                                                                                                                                                                                    |
|     **q**      | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](https://core.telegram.org/type/string)    | Search for a user in the pending [join requests »](https://core.telegram.org/api/invites#join-requests) list: only available when the `requested` flag is set, cannot be used together with a specific `link`. |
| **offsetDate** | [int](https://core.telegram.org/type/int)                                                                                         | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets)                                                                                                                      |
| **offsetUser** | [InputUser](https://core.telegram.org/type/InputUser)                                                                             | User ID for [pagination](https://core.telegram.org/api/offsets)                                                                                                                                                |
|   **limit**    | [int](https://core.telegram.org/type/int)                                                                                         | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets)                                                                                                                   |

## Result

[messages.ChatInviteImporters](https://core.telegram.org/type/messages.ChatInviteImporters)

## Possible errors

| Code | Type                           | Description                                                            |
| :--: | ------------------------------ | ---------------------------------------------------------------------- |
| 400  | CHANNEL_PRIVATE                | You haven't joined this channel/supergroup.                            |
| 400  | CHAT_ADMIN_REQUIRED            | You must be an admin in this chat to do this.                          |
| 400  | INVITE_HASH_EXPIRED            | The invite link has expired.                                           |
| 400  | PEER_ID_INVALID                | The provided peer id is invalid.                                       |
| 400  | SEARCH_WITH_LINK_NOT_SUPPORTED | You cannot provide a search query and an invite link at the same time. |

## Can bots use this method?

No

## Related pages

#### [Invites](https://core.telegram.org/api/invites)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
