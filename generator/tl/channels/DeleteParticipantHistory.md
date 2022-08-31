# channels.DeleteParticipantHistory

Delete all messages sent by a specific participant of a given supergroup

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
    new Api.channels.DeleteParticipantHistory({
      channel: "username",
      participant: "username",
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

  const result: Api.messages.AffectedHistory = await client.invoke(
    new Api.channels.DeleteParticipantHistory({
      channel: "username",
      participant: "username",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|      Name       | Type                                                        | Description                                      |
| :-------------: | ----------------------------------------------------------- | ------------------------------------------------ |
|   **channel**   | [InputChannel](https://core.telegram.org/type/InputChannel) | Supergroup                                       |
| **participant** | [InputPeer](https://core.telegram.org/type/InputPeer)       | The participant whose messages should be deleted |

## Result

[messages.AffectedHistory](https://core.telegram.org/type/messages.AffectedHistory)

## Possible errors

| Code | Type                   | Description                                   |
| :--: | ---------------------- | --------------------------------------------- |
| 400  | CHAT_ADMIN_REQUIRED    | You must be an admin in this chat to do this. |
| 400  | MSG_ID_INVALID         | Invalid message ID provided.                  |
| 400  | PARTICIPANT_ID_INVALID | The specified participant ID is invalid.      |

## Can bots use this method?

Yes

## Related pages
