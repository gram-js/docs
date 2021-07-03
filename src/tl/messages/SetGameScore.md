# messages.SetGameScore

Use this method to set the score of the specified user in a game sent as a normal message (bots only).

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
    new Api.messages.SetGameScore({
      peer: "username",
      id: 43,
      userId: "username",
      score: 43,
      editMessage: true,
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

const session = new StringSession("");
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  const result: Api.Updates = await client.invoke(
    new Api.messages.SetGameScore({
      peer: "username",
      id: 43,
      userId: "username",
      score: 43,
      editMessage: true,
      force: true,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|      Name       | Type                                                                                                                              | Description                                                                                                         |
| :-------------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
|    **flags**    | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)             |
| **editMessage** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Set this flag if the game message should be automatically edited to include the current scoreboard                  |
|    **force**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true) | Set this flag if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters |
|    **peer**     | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                             | Unique identifier of target chat                                                                                    |
|     **id**      | [int](https://core.telegram.org/type/int)                                                                                         | Identifier of the sent message                                                                                      |
|   **userId**    | [InputUser](https://core.telegram.org/type/InputUser)                                                                             | User identifier                                                                                                     |
|    **score**    | [int](https://core.telegram.org/type/int)                                                                                         | New score                                                                                                           |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type               | Description                             |
| :--: | ------------------ | --------------------------------------- |
| 400  | MESSAGE_ID_INVALID | The provided message id is invalid      |
| 400  | PEER_ID_INVALID    | The provided peer id is invalid         |
| 400  | USER_BOT_REQUIRED  | This method can only be called by a bot |

## Can bots use this method?

Yes

## Related pages
