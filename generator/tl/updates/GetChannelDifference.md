# updates.GetChannelDifference

Returns the difference between the current state of updates of a certain channel and transmitted.

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
    new Api.updates.GetChannelDifference({
      channel: "username",
      filter: new Api.ChannelMessagesFilter({
        ranges: [
          new Api.MessageRange({
            minId: 0,
            maxId: 0,
          }),
        ],
        excludeNewMessages: true,
      }),
      pts: 43,
      limit: 100,
      force: true,
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

  const result: Api.updates.ChannelDifference = await client.invoke(
    new Api.updates.GetChannelDifference({
      channel: "username",
      filter: new Api.ChannelMessagesFilter({
        ranges: [
          new Api.MessageRange({
            minId: 0,
            maxId: 0,
          }),
        ],
        excludeNewMessages: true,
      }),
      pts: 43,
      limit: 100,
      force: true,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name     | Type                                                                                                                              | Description                                                                                             |
| :---------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  **flags**  | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|  **force**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Set to true to skip some possibly unneeded updates and reduce server-side load                          |
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel)                                                                       | The channel                                                                                             |
| **filter**  | [ChannelMessagesFilter](https://core.telegram.org/type/ChannelMessagesFilter)                                                     | Messsage filter                                                                                         |
|   **pts**   | [int](https://core.telegram.org/type/int)                                                                                         | Persistent timestamp (see [updates](https://core.telegram.org/api/updates))                             |
|  **limit**  | [int](https://core.telegram.org/type/int)                                                                                         | How many updates to fetch, max `100000`Ordinary (non-bot) users are supposed to pass `10-100`           |

## Result

[updates.ChannelDifference](https://core.telegram.org/type/updates.ChannelDifference)

## Possible errors

| Code | Type                          | Description                                                                              |
| :--: | ----------------------------- | ---------------------------------------------------------------------------------------- |
| 400  | CHANNEL_INVALID               | The provided channel is invalid.                                                         |
| 400  | CHANNEL_PRIVATE               | You haven't joined this channel/supergroup.                                              |
| 403  | CHANNEL_PUBLIC_GROUP_NA       | channel/supergroup not available.                                                        |
| 403  | CHAT_WRITE_FORBIDDEN          | You can't write in this chat.                                                            |
| 400  | FROM_MESSAGE_BOT_DISABLED     | Bots can't use fromMessage min constructors.                                             |
| 400  | MSG_ID_INVALID                | Invalid message ID provided.                                                             |
| 400  | PERSISTENT_TIMESTAMP_EMPTY    | Persistent timestamp empty.                                                              |
| 400  | PERSISTENT_TIMESTAMP_INVALID  | Persistent timestamp invalid.                                                            |
| 500  | PERSISTENT_TIMESTAMP_OUTDATED | Channel internal replication issues, try again later (treat this like an RPC_CALL_FAIL). |
| 400  | PINNED_DIALOGS_TOO_MUCH       | Too many pinned dialogs.                                                                 |
| 400  | RANGES_INVALID                | Invalid range provided.                                                                  |
| 400  | USER_BANNED_IN_CHANNEL        | You're banned from sending messages in supergroups/channels.                             |

## Can bots use this method?

Yes

## Related pages

#### [Working with Updates](https://core.telegram.org/api/updates)

How to subscribe to updates and handle them properly.
