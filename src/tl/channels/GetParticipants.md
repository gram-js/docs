# channels.GetParticipants

Get the participants of a [supergroup/channel](https://core.telegram.org/api/channel)

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
    new Api.channels.GetParticipants({
      channel: "username",
      filter: new Api.ChannelParticipantsRecent({}),
      offset: 43,
      limit: 100,
      hash: 0,
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
  const result: Api.channels.ChannelParticipants = await client.invoke(
    new Api.channels.GetParticipants({
      channel: "username",
      filter: new Api.ChannelParticipantsRecent({}),
      offset: 43,
      limit: 100,
      hash: 0,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name     | Type                                                                                  | Description                                     |
| :---------: | ------------------------------------------------------------------------------------- | ----------------------------------------------- |
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel)                           | Channel                                         |
| **filter**  | [ChannelParticipantsFilter](https://core.telegram.org/type/ChannelParticipantsFilter) | Which participant types to fetch                |
| **offset**  | [int](https://core.telegram.org/type/int)                                             | [Offset](https://core.telegram.org/api/offsets) |
|  **limit**  | [int](https://core.telegram.org/type/int)                                             | [Limit](https://core.telegram.org/api/offsets)  |
|  **hash**   | [int](https://core.telegram.org/type/int)                                             | [Hash](https://core.telegram.org/api/offsets)   |

## Result

[channels.ChannelParticipants](https://core.telegram.org/type/channels.ChannelParticipants)

## Possible errors

| Code | Type                      | Description                                  |
| :--: | ------------------------- | -------------------------------------------- |
| 400  | CHANNEL_INVALID           | The provided channel is invalid              |
| 400  | CHANNEL_PRIVATE           | You haven't joined this channel/supergroup   |
| 400  | CHAT_ADMIN_REQUIRED       | You must be an admin in this chat to do this |
| 400  | INPUT_CONSTRUCTOR_INVALID | The provided constructor is invalid          |

## Can bots use this method?

Yes

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.
