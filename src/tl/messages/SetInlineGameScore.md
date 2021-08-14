# messages.SetInlineGameScore

Use this method to set the score of the specified user in a game sent as an inline message (bots only).

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
    new Api.messages.SetInlineGameScore({
      id: new Api.InputBotInlineMessageID({
        dcId: 43,
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
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

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result: Api.Bool = await client.invoke(
    new Api.messages.SetInlineGameScore({
      id: new Api.InputBotInlineMessageID({
        dcId: 43,
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
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
|     **id**      | [InputBotInlineMessageID](https://core.telegram.org/type/InputBotInlineMessageID)                                                 | ID of the inline message                                                                                            |
|   **userId**    | [InputUser](https://core.telegram.org/type/InputUser)                                                                             | User identifier                                                                                                     |
|    **score**    | [int](https://core.telegram.org/type/int)                                                                                         | New score                                                                                                           |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type               | Description                             |
| :--: | ------------------ | --------------------------------------- |
| 400  | MESSAGE_ID_INVALID | The provided message id is invalid      |
| 400  | USER_BOT_REQUIRED  | This method can only be called by a bot |

## Can bots use this method?

Yes

## Related pages
