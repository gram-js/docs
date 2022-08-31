# phone.CreateGroupCall

Create a group call or livestream

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
    new Api.phone.CreateGroupCall({
      peer: "username",
      randomId: 43,
      rtmpStream: true,
      title: "My very normal title",
      scheduleDate: 43,
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
    new Api.phone.CreateGroupCall({
      peer: "username",
      randomId: 43,
      rtmpStream: true,
      title: "My very normal title",
      scheduleDate: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|       Name       | Type                                                                                                                              | Description                                                                                                                                        |
| :--------------: | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
|    **flags**     | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)                                            |
|  **rtmpStream**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](https://core.telegram.org/constructor/true) | Whether RTMP stream support should be enabled: only the [group/supergroup/channel](https://core.telegram.org/api/channel) owner can use this flag. |
|     **peer**     | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                             | Associate the group call or livestream to the provided [group/supergroup/channel](https://core.telegram.org/api/channel)                           |
|   **randomId**   | [int](https://core.telegram.org/type/int)                                                                                         | Unique client message ID required to prevent creation of duplicate group calls                                                                     |
|    **title**     | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](https://core.telegram.org/type/string)    | Call title                                                                                                                                         |
| **scheduleDate** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](https://core.telegram.org/type/int)          | For scheduled group call or livestreams, the absolute date when the group call will start                                                          |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                  | Description                                   |
| :--: | --------------------- | --------------------------------------------- |
| 400  | CHAT_ADMIN_REQUIRED   | You must be an admin in this chat to do this. |
| 400  | PEER_ID_INVALID       | The provided peer id is invalid.              |
| 400  | SCHEDULE_DATE_INVALID | Invalid schedule date provided.               |

## Can bots use this method?

No

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
