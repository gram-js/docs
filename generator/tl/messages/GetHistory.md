# messages.GetHistory

Gets back the conversation history with one interlocutor / within a chat

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
    new Api.messages.GetHistory({
      peer: "username",
      offsetId: 43,
      offsetDate: 43,
      addOffset: 0,
      limit: 100,
      maxId: 0,
      minId: 0,
      hash: BigInt("-4156887774564"),
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
    new Api.messages.GetHistory({
      peer: "username",
      offsetId: 43,
      offsetDate: 43,
      addOffset: 0,
      limit: 100,
      maxId: 0,
      minId: 0,
      hash: BigInt("-4156887774564"),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|      Name      | Type                                                  | Description                                                                                             |
| :------------: | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|    **peer**    | [InputPeer](https://core.telegram.org/type/InputPeer) | Target peer                                                                                             |
|  **offsetId**  | [int](https://core.telegram.org/type/int)             | Only return messages starting from the specified message ID                                             |
| **offsetDate** | [int](https://core.telegram.org/type/int)             | Only return messages sent before the specified date                                                     |
| **addOffset**  | [int](https://core.telegram.org/type/int)             | Number of list elements to be skipped, negative values are also accepted.                               |
|   **limit**    | [int](https://core.telegram.org/type/int)             | Number of results to return                                                                             |
|   **maxId**    | [int](https://core.telegram.org/type/int)             | If a positive value was transferred, the method will return only messages with IDs less than **max_id** |
|   **minId**    | [int](https://core.telegram.org/type/int)             | If a positive value was transferred, the method will return only messages with IDs more than **min_id** |
|    **hash**    | [long](https://core.telegram.org/type/long)           | [Result hash](https://core.telegram.org/api/offsets)                                                    |

## Result

[messages.Messages](https://core.telegram.org/type/messages.Messages)

## Possible errors

| Code | Type            | Description                                 |
| :--: | --------------- | ------------------------------------------- |
| 400  | CHANNEL_INVALID | The provided channel is invalid.            |
| 400  | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400  | CHAT_ID_INVALID | The provided chat id is invalid.            |
| 400  | MSG_ID_INVALID  | Invalid message ID provided.                |
| 400  | PEER_ID_INVALID | The provided peer id is invalid.            |

## Can bots use this method?

No

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
