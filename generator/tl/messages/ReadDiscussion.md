# messages.ReadDiscussion

Mark a [thread](https://core.telegram.org/api/threads) as read

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
    new Api.messages.ReadDiscussion({
      peer: "username",
      msgId: 43,
      readMaxId: 43,
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
    new Api.messages.ReadDiscussion({
      peer: "username",
      msgId: 43,
      readMaxId: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name      | Type                                                  | Description                              |
| :-----------: | ----------------------------------------------------- | ---------------------------------------- |
|   **peer**    | [InputPeer](https://core.telegram.org/type/InputPeer) | Group ID                                 |
|   **msgId**   | [int](https://core.telegram.org/type/int)             | ID of message that started the thread    |
| **readMaxId** | [int](https://core.telegram.org/type/int)             | ID up to which thread messages were read |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type            | Description                      |
| :--: | --------------- | -------------------------------- |
| 400  | MSG_ID_INVALID  | Invalid message ID provided.     |
| 400  | PEER_ID_INVALID | The provided peer id is invalid. |

## Can bots use this method?

No

## Related pages

#### [Threads](https://core.telegram.org/api/threads)

Telegram allows commenting on a [channel post](https://core.telegram.org/api/channel) or on a generic [supergroup message](https://core.telegram.org/api/channel), thanks to message threads.
