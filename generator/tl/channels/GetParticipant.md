# channels.GetParticipant

Get info about a [channel/supergroup](https://core.telegram.org/api/channel) participant

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
    new Api.channels.GetParticipant({
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

  const result: Api.channels.ChannelParticipant = await client.invoke(
    new Api.channels.GetParticipant({
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

|      Name       | Type                                                        | Description                   |
| :-------------: | ----------------------------------------------------------- | ----------------------------- |
|   **channel**   | [InputChannel](https://core.telegram.org/type/InputChannel) | Channel/supergroup            |
| **participant** | [InputPeer](https://core.telegram.org/type/InputPeer)       | Participant to get info about |

## Result

[channels.ChannelParticipant](https://core.telegram.org/type/channels.ChannelParticipant)

## Possible errors

| Code | Type                   | Description                                     |
| :--: | ---------------------- | ----------------------------------------------- |
| 400  | CHANNEL_INVALID        | The provided channel is invalid.                |
| 400  | CHANNEL_PRIVATE        | You haven't joined this channel/supergroup.     |
| 400  | CHAT_ADMIN_REQUIRED    | You must be an admin in this chat to do this.   |
| 400  | MSG_ID_INVALID         | Invalid message ID provided.                    |
| 400  | PARTICIPANT_ID_INVALID | The specified participant ID is invalid.        |
| 400  | USER_ID_INVALID        | The provided user ID is invalid.                |
| 400  | USER_NOT_PARTICIPANT   | You're not a member of this supergroup/channel. |

## Can bots use this method?

Yes

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
