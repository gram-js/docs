# messages.GetMessageReadParticipants

Get which users read a specific message: only available for groups and supergroups with less than `chat_read_mark_size_threshold` members, read receipts will be stored for `chat_read_mark_expire_period` seconds after the message was sent, see [client configuration for more info »](https://core.telegram.org/api/config#client-configuration).

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
    new Api.messages.GetMessageReadParticipants({
      peer: "username",
      msgId: 43,
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

  const result: Api.Vector<long> = await client.invoke(
    new Api.messages.GetMessageReadParticipants({
      peer: "username",
      msgId: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|   Name    | Type                                                  | Description |
| :-------: | ----------------------------------------------------- | ----------- |
| **peer**  | [InputPeer](https://core.telegram.org/type/InputPeer) | Dialog      |
| **msgId** | [int](https://core.telegram.org/type/int)             | Message ID  |

## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[long](https://core.telegram.org/type/long)>

## Possible errors

| Code | Type         | Description                                                                                                                                                                              |
| :--: | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 400  | CHAT_TOO_BIG | This method is not available for groups with more than `chat_read_mark_size_threshold` members, [see client configuration »](https://core.telegram.org/api/config#client-configuration). |

## Can bots use this method?

No

## Related pages

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
