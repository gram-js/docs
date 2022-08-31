# channels.CheckUsername

Check if a username is free and can be assigned to a channel/supergroup

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
    new Api.channels.CheckUsername({
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

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result: Api.Bool = await client.invoke(
    new Api.channels.CheckUsername({
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

|     Name     | Type                                                        | Description                                                                                               |
| :----------: | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **channel**  | [InputChannel](https://core.telegram.org/type/InputChannel) | The [channel/supergroup](https://core.telegram.org/api/channel) that will assigned the specified username |
| **username** | [string](https://core.telegram.org/type/string)             | The username to check                                                                                     |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type                           | Description                                                                                                  |
| :--: | ------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| 400  | CHANNELS_ADMIN_PUBLIC_TOO_MUCH | You're admin of too many public channels, make some channels private to change the username of this channel. |
| 400  | CHANNEL_INVALID                | The provided channel is invalid.                                                                             |
| 400  | CHAT_ID_INVALID                | The provided chat id is invalid.                                                                             |
| 400  | USERNAME_INVALID               | The provided username is not valid.                                                                          |

## Can bots use this method?

No

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
