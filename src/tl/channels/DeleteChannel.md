# channels.DeleteChannel

Delete a [channel/supergroup](https://core.telegram.org/api/channel)

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
    new Api.channels.DeleteChannel({
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
    new Api.channels.DeleteChannel({
      channel: "username",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name     | Type                                                        | Description                                                           |
| :---------: | ----------------------------------------------------------- | --------------------------------------------------------------------- |
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel) | [Channel/supergroup](https://core.telegram.org/api/channel) to delete |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                 | Description                                                                                                                             |
| :--: | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 400  | CHANNEL_INVALID      | The provided channel is invalid                                                                                                         |
| 400  | CHANNEL_PRIVATE      | You haven't joined this channel/supergroup                                                                                              |
| 400  | CHANNEL_TOO_LARGE    | Channel is too large to be deleted; this error is issued when trying to delete channels with more than 1000 members (subject to change) |
| 400  | CHAT_ADMIN_REQUIRED  | You must be an admin in this chat to do this                                                                                            |
| 403  | CHAT_WRITE_FORBIDDEN | You can't write in this chat                                                                                                            |

## Can bots use this method?

No

## Related pages

#### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.
