# messages.EditChatTitle

Changes chat name and sends a service message on it.

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
    new Api.messages.EditChatTitle({
      chatId: BigInt("-4156887774564"),
      title: "My very normal title",
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
    new Api.messages.EditChatTitle({
      chatId: BigInt("-4156887774564"),
      title: "My very normal title",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name    | Type                                            | Description                               |
| :--------: | ----------------------------------------------- | ----------------------------------------- |
| **chatId** | [long](https://core.telegram.org/type/long)     | Chat ID                                   |
| **title**  | [string](https://core.telegram.org/type/string) | New chat name, different from the old one |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type              | Description                         |
| :--: | ----------------- | ----------------------------------- |
| 400  | CHAT_ID_INVALID   | The provided chat id is invalid.    |
| 400  | CHAT_NOT_MODIFIED | The pinned message wasn't modified. |
| 400  | CHAT_TITLE_EMPTY  | No chat title provided.             |
| 400  | PEER_ID_INVALID   | The provided peer id is invalid.    |

## Can bots use this method?

Yes

## Related pages
