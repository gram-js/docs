# messages.HideChatJoinRequest

Dismiss or approve a chat [join request](https://core.telegram.org/api/invites#join-requests) related to a specific chat or channel.

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
    new Api.messages.HideChatJoinRequest({
      peer: "username",
      userId: "username",
      approved: true,
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
    new Api.messages.HideChatJoinRequest({
      peer: "username",
      userId: "username",
      approved: true,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name     | Type                                                                                                                              | Description                                                                                                          |
| :----------: | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
|  **flags**   | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)              |
| **approved** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Whether to dismiss or approve the chat [join request »](https://core.telegram.org/api/invites#join-requests)         |
|   **peer**   | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                             | The chat or channel                                                                                                  |
|  **userId**  | [InputUser](https://core.telegram.org/type/InputUser)                                                                             | The user whose [join request »](https://core.telegram.org/api/invites#join-requests) should be dismissed or approved |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type            | Description                      |
| :--: | --------------- | -------------------------------- |
| 400  | PEER_ID_INVALID | The provided peer id is invalid. |

## Can bots use this method?

Yes

## Related pages

#### [Invites](https://core.telegram.org/api/invites)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.
