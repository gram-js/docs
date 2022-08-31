# users.GetUsers

Returns basic user info according to their identifiers.

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
    new Api.users.GetUsers({
      id: ["username"],
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

  const result: Api.Vector<User> = await client.invoke(
    new Api.users.GetUsers({
      id: ["username"],
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|  Name  | Type                                                                                                       | Description              |
| :----: | ---------------------------------------------------------------------------------------------------------- | ------------------------ |
| **id** | [Vector](https://core.telegram.org/type/Vector%20t)<[InputUser](https://core.telegram.org/type/InputUser)> | List of user identifiers |

## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[User](https://core.telegram.org/type/User)>

## Possible errors

| Code | Type                   | Description                                                  |
| :--: | ---------------------- | ------------------------------------------------------------ |
| 400  | CHANNEL_INVALID        | The provided channel is invalid.                             |
| 400  | CHANNEL_PRIVATE        | You haven't joined this channel/supergroup.                  |
| 400  | MSG_ID_INVALID         | Invalid message ID provided.                                 |
| 400  | USER_BANNED_IN_CHANNEL | You're banned from sending messages in supergroups/channels. |

## Can bots use this method?

Yes

## Related pages
