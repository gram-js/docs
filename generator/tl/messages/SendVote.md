# messages.SendVote

Vote in a [poll](https://core.telegram.org/constructor/poll)

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
    new Api.messages.SendVote({
      peer: "username",
      msgId: 43,
      options: [Buffer.from("arbitrary data here")],
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
    new Api.messages.SendVote({
      peer: "username",
      msgId: 43,
      options: [Buffer.from("arbitrary data here")],
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name     | Type                                                                                               | Description                      |
| :---------: | -------------------------------------------------------------------------------------------------- | -------------------------------- |
|  **peer**   | [InputPeer](https://core.telegram.org/type/InputPeer)                                              | The chat where the poll was sent |
|  **msgId**  | [int](https://core.telegram.org/type/int)                                                          | The message ID of the poll       |
| **options** | [Vector](https://core.telegram.org/type/Vector%20t)<[bytes](https://core.telegram.org/type/bytes)> | The options that were chosen     |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                | Description                                 |
| :--: | ------------------- | ------------------------------------------- |
| 400  | CHANNEL_INVALID     | The provided channel is invalid.            |
| 400  | CHANNEL_PRIVATE     | You haven't joined this channel/supergroup. |
| 400  | MESSAGE_ID_INVALID  | The provided message id is invalid.         |
| 400  | MESSAGE_POLL_CLOSED | Poll closed.                                |
| 400  | OPTIONS_TOO_MUCH    | Too many options provided.                  |
| 400  | OPTION_INVALID      | Invalid option selected.                    |
| 400  | PEER_ID_INVALID     | The provided peer id is invalid.            |
| 400  | REVOTE_NOT_ALLOWED  | You cannot change your vote.                |

## Can bots use this method?

No

## Related pages

#### [poll](https://core.telegram.org/constructor/poll)

Poll
