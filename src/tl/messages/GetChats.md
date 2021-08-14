# messages.GetChats

Returns chat basic info on their IDs.

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
    new Api.messages.GetChats({
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

  const result: Api.messages.Chats = await client.invoke(
    new Api.messages.GetChats({
      id: [43],
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|  Name  | Type                                                                                           | Description      |
| :----: | ---------------------------------------------------------------------------------------------- | ---------------- |
| **id** | [Vector](https://core.telegram.org/type/Vector%20t)<[int](https://core.telegram.org/type/int)> | List of chat IDs |

## Result

[messages.Chats](https://core.telegram.org/type/messages.Chats)

## Possible errors

| Code | Type            | Description                     |
| :--: | --------------- | ------------------------------- |
| 400  | CHAT_ID_INVALID | The provided chat id is invalid |
| 400  | PEER_ID_INVALID | The provided peer id is invalid |

## Can bots use this method?

Yes

## Related pages
