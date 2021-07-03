# messages.GetFullChat

Returns full chat info according to its ID.

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
    new Api.messages.GetFullChat({
      chatId: 43,
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
  const result: Api.messages.ChatFull = await client.invoke(
    new Api.messages.GetFullChat({
      chatId: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name    | Type                                      | Description |
| :--------: | ----------------------------------------- | ----------- |
| **chatId** | [int](https://core.telegram.org/type/int) | Chat ID     |

## Result

[messages.ChatFull](https://core.telegram.org/type/messages.ChatFull)

## Possible errors

| Code | Type            | Description                     |
| :--: | --------------- | ------------------------------- |
| 400  | CHAT_ID_INVALID | The provided chat id is invalid |
| 400  | PEER_ID_INVALID | The provided peer id is invalid |

## Can bots use this method?

Yes

## Related pages
