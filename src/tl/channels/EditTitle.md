# channels.EditTitle

Edit the name of a [channel/supergroup](https://core.telegram.org/api/channel)

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
    new Api.channels.EditTitle({
      channel: "username",
      title: "My very normal title",
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
  const result: Api.Updates = await client.invoke(
    new Api.channels.EditTitle({
      channel: "username",
      title: "My very normal title",
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
|  **title**  | [string](https://core.telegram.org/type/string)             | New name           |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                 | Description                                  |
| :--: | -------------------- | -------------------------------------------- |
| 400  | CHANNEL_INVALID      | The provided channel is invalid              |
| 400  | CHAT_ADMIN_REQUIRED  | You must be an admin in this chat to do this |
| 400  | CHAT_NOT_MODIFIED    | The pinned message wasn't modified           |
| 400  | CHAT_TITLE_EMPTY     | No chat title provided                       |
| 403  | CHAT_WRITE_FORBIDDEN | You can't write in this chat                 |

## Can bots use this method?

Yes

## Related pages

#### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.
