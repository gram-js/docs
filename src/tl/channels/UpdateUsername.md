# channels.UpdateUsername

Change the username of a supergroup/channel

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
    new Api.channels.UpdateUsername({
      channel: "username",
      username: "some string here",
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
  const result: Api.Bool = await client.invoke(
    new Api.channels.UpdateUsername({
      channel: "username",
      username: "some string here",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name     | Type                                                        | Description  |
| :----------: | ----------------------------------------------------------- | ------------ |
| **channel**  | [InputChannel](https://core.telegram.org/type/InputChannel) | Channel      |
| **username** | [string](https://core.telegram.org/type/string)             | New username |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type                           | Description                                                                                                 |
| :--: | ------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| 400  | CHANNELS_ADMIN_PUBLIC_TOO_MUCH | You're admin of too many public channels, make some channels private to change the username of this channel |
| 400  | CHANNEL_INVALID                | The provided channel is invalid                                                                             |
| 400  | CHANNEL_PRIVATE                | You haven't joined this channel/supergroup                                                                  |
| 400  | CHAT_ADMIN_REQUIRED            | You must be an admin in this chat to do this                                                                |
| 400  | CHAT_NOT_MODIFIED              | The pinned message wasn't modified                                                                          |
| 403  | CHAT_WRITE_FORBIDDEN           | You can't write in this chat                                                                                |
| 400  | USERNAME_INVALID               | The provided username is not valid                                                                          |
| 400  | USERNAME_NOT_MODIFIED          | The username was not modified                                                                               |
| 400  | USERNAME_OCCUPIED              | The provided username is already occupied                                                                   |

## Can bots use this method?

No

## Related pages
