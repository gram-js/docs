# messages.DiscardEncryption

Cancels a request for creation and/or delete info on secret chat.

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
    new Api.messages.DiscardEncryption({
      chatId: 43,
      deleteHistory: true,
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
    new Api.messages.DiscardEncryption({
      chatId: 43,
      deleteHistory: true,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|       Name        | Type                                                                                                                              | Description                                                                                             |
| :---------------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|     **flags**     | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| **deleteHistory** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Whether to delete the entire chat history for the other user as well                                    |
|    **chatId**     | [int](https://core.telegram.org/type/int)                                                                                         | Secret chat ID                                                                                          |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type                        | Description                             |
| :--: | --------------------------- | --------------------------------------- |
| 400  | CHAT_ID_EMPTY               | The provided chat ID is empty.          |
| 400  | ENCRYPTION_ALREADY_DECLINED | The secret chat was already declined.   |
| 400  | ENCRYPTION_ID_INVALID       | The provided secret chat ID is invalid. |

## Can bots use this method?

No

## Related pages
