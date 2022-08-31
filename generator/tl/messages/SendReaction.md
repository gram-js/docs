# messages.SendReaction

React to message

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
    new Api.messages.SendReaction({
      peer: "username",
      msgId: 43,
      big: true,
      reaction: "some string here",
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
    new Api.messages.SendReaction({
      peer: "username",
      msgId: 43,
      big: true,
      reaction: "some string here",
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
|   **big**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true) | Whether a bigger and longer reaction should be shown                                                    |
|   **peer**   | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                             | Peer                                                                                                    |
|  **msgId**   | [int](https://core.telegram.org/type/int)                                                                                         | Message ID to react to                                                                                  |
| **reaction** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](https://core.telegram.org/type/string)    | Reaction (a UTF8 emoji)                                                                                 |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                 | Description                                                                                       |
| :--: | -------------------- | ------------------------------------------------------------------------------------------------- |
| 400  | CHANNEL_PRIVATE      | You haven't joined this channel/supergroup.                                                       |
| 400  | MESSAGE_ID_INVALID   | The provided message id is invalid.                                                               |
| 400  | MESSAGE_NOT_MODIFIED | The provided message data is identical to the previous message data, the message wasn't modified. |
| 400  | PEER_ID_INVALID      | The provided peer id is invalid.                                                                  |
| 400  | REACTION_EMPTY       | Empty reaction provided.                                                                          |
| 400  | REACTION_INVALID     | The specified reaction is invalid.                                                                |

## Can bots use this method?

No

## Related pages
