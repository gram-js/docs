# channels.TogglePreHistoryHidden

Hide/unhide message history for new channel/supergroup users

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
    new Api.channels.TogglePreHistoryHidden({
      channel: "username",
      enabled: false,
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
    new Api.channels.TogglePreHistoryHidden({
      channel: "username",
      enabled: false,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name     | Type                                                        | Description        |
| :---------: | ----------------------------------------------------------- | ------------------ |
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel) | Channel/supergroup |
| **enabled** | [Bool](https://core.telegram.org/type/Bool)                 | Hide/unhide        |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                | Description                                                  |
| :--: | ------------------- | ------------------------------------------------------------ |
| 400  | CHANNEL_INVALID     | The provided channel is invalid.                             |
| 400  | CHANNEL_PRIVATE     | You haven't joined this channel/supergroup.                  |
| 400  | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this.                |
| 400  | CHAT_ID_INVALID     | The provided chat id is invalid.                             |
| 400  | CHAT_LINK_EXISTS    | The chat is public, you can't hide the history to new users. |
| 400  | CHAT_NOT_MODIFIED   | The pinned message wasn't modified.                          |

## Can bots use this method?

No

## Related pages
