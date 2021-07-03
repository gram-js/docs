# channels.JoinChannel

Join a channel/supergroup

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
    new Api.channels.JoinChannel({
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

const session = new StringSession("");
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  const result: Api.Updates = await client.invoke(
    new Api.channels.JoinChannel({
      channel: "username",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name     | Type                                                        | Description                |
| :---------: | ----------------------------------------------------------- | -------------------------- |
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel) | Channel/supergroup to join |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                     | Description                                                                   |
| :--: | ------------------------ | ----------------------------------------------------------------------------- |
| 400  | CHANNELS_TOO_MUCH        | You have joined too many channels/supergroups                                 |
| 400  | CHANNEL_INVALID          | The provided channel is invalid                                               |
| 400  | CHANNEL_PRIVATE          | You haven't joined this channel/supergroup                                    |
| 400  | INVITE_HASH_EMPTY        | The invite hash is empty                                                      |
| 400  | INVITE_HASH_EXPIRED      | The invite link has expired                                                   |
| 400  | INVITE_HASH_INVALID      | The invite hash is invalid                                                    |
| 400  | MSG_ID_INVALID           | Invalid message ID provided                                                   |
| 400  | PEER_ID_INVALID          | The provided peer id is invalid                                               |
| 400  | USERS_TOO_MUCH           | The maximum number of users has been exceeded (to create a chat, for example) |
| 400  | USER_ALREADY_PARTICIPANT | The user is already in the group                                              |
| 400  | USER_CHANNELS_TOO_MUCH   | One of the users you tried to add is already in too many channels/supergroups |

## Can bots use this method?

No

## Related pages
