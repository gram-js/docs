# messages.GetScheduledMessages

Get scheduled messages

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
    new Api.messages.GetScheduledMessages({
      peer: "username",
      id: [43],
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

  const result: Api.messages.Messages = await client.invoke(
    new Api.messages.GetScheduledMessages({
      peer: "username",
      id: [43],
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|   Name   | Type                                                                                           | Description               |
| :------: | ---------------------------------------------------------------------------------------------- | ------------------------- |
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer)                                          | Peer                      |
|  **id**  | [Vector](https://core.telegram.org/type/Vector%20t)<[int](https://core.telegram.org/type/int)> | IDs of scheduled messages |

## Result

[messages.Messages](https://core.telegram.org/type/messages.Messages)

## Possible errors

| Code | Type                | Description                                  |
| :--: | ------------------- | -------------------------------------------- |
| 400  | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this |
| 400  | PEER_ID_INVALID     | The provided peer id is invalid              |

## Can bots use this method?

No

## Related pages
