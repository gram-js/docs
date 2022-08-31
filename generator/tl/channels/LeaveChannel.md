# channels.LeaveChannel

Leave a [channel/supergroup](https://core.telegram.org/api/channel)

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
    new Api.channels.LeaveChannel({
      channel: "username",
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
    new Api.channels.LeaveChannel({
      channel: "username",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name     | Type                                                        | Description                                                          |
| :---------: | ----------------------------------------------------------- | -------------------------------------------------------------------- |
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel) | [Channel/supergroup](https://core.telegram.org/api/channel) to leave |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                    | Description                                                  |
| :--: | ----------------------- | ------------------------------------------------------------ |
| 400  | CHANNEL_INVALID         | The provided channel is invalid.                             |
| 400  | CHANNEL_PRIVATE         | You haven't joined this channel/supergroup.                  |
| 403  | CHANNEL_PUBLIC_GROUP_NA | channel/supergroup not available.                            |
| 400  | MSG_ID_INVALID          | Invalid message ID provided.                                 |
| 400  | USER_BANNED_IN_CHANNEL  | You're banned from sending messages in supergroups/channels. |
| 400  | USER_CREATOR            | You can't leave this channel, because you're its creator.    |
| 400  | USER_NOT_PARTICIPANT    | You're not a member of this supergroup/channel.              |

## Can bots use this method?

Yes

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
