# channels.GetFullChannel

Get full info about a [supergroup](https://core.telegram.org/api/channel#supergroups), [gigagroup](https://core.telegram.org/api/channel#gigagroups) or [channel](https://core.telegram.org/api/channel#channels)

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
    new Api.channels.GetFullChannel({
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

  const result: Api.messages.ChatFull = await client.invoke(
    new Api.channels.GetFullChannel({
      channel: "username",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name     | Type                                                        | Description                                                                                                                                                                                                       |
| :---------: | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel) | The [channel](https://core.telegram.org/api/channel#channels), [supergroup](https://core.telegram.org/api/channel#supergroups) or [gigagroup](https://core.telegram.org/api/channel#gigagroups) to get info about |

## Result

[messages.ChatFull](https://core.telegram.org/type/messages.ChatFull)

## Possible errors

| Code | Type                    | Description                                 |
| :--: | ----------------------- | ------------------------------------------- |
| 400  | CHANNEL_INVALID         | The provided channel is invalid.            |
| 406  | CHANNEL_PRIVATE         | You haven't joined this channel/supergroup. |
| 403  | CHANNEL_PUBLIC_GROUP_NA | channel/supergroup not available.           |
| 400  | CHAT_NOT_MODIFIED       | The pinned message wasn't modified.         |
| 400  | MSG_ID_INVALID          | Invalid message ID provided.                |

## Can bots use this method?

Yes

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
