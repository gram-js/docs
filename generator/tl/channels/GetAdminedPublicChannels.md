# channels.GetAdminedPublicChannels

Get [channels/supergroups/geogroups](https://core.telegram.org/api/channel) we're admin in. Usually called when the user exceeds the [limit](https://core.telegram.org/constructor/config) for owned public [channels/supergroups/geogroups](https://core.telegram.org/api/channel), and the user is given the choice to remove one of his channels/supergroups/geogroups.

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
    new Api.channels.GetAdminedPublicChannels({
      byLocation: true,
      checkLimit: true,
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

  const result: Api.messages.Chats = await client.invoke(
    new Api.channels.GetAdminedPublicChannels({
      byLocation: true,
      checkLimit: true,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|      Name      | Type                                                                                                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :------------: | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   **flags**    | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **byLocation** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Get geogroups                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **checkLimit** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true) | If set and the user has reached the limit of owned public [channels/supergroups/geogroups](https://core.telegram.org/api/channel), instead of returning the channel list one of the specified [errors](https://core.telegram.org#possible-errors) will be returned.Useful to check if a new public channel can indeed be created, even before asking the user to enter a channel username to use in [channels.checkUsername](https://core.telegram.org/method/channels.checkUsername)/[channels.updateUsername](https://core.telegram.org/method/channels.updateUsername). |

## Result

[messages.Chats](https://core.telegram.org/type/messages.Chats)

## Possible errors

| Code | Type                            | Description                                                                                                  |
| :--: | ------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 400  | CHANNELS_ADMIN_LOCATED_TOO_MUCH | The user has reached the limit of public geogroups.                                                          |
| 400  | CHANNELS_ADMIN_PUBLIC_TOO_MUCH  | You're admin of too many public channels, make some channels private to change the username of this channel. |

## Can bots use this method?

No

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [channels.checkUsername](https://core.telegram.org/method/channels.checkUsername)

Check if a username is free and can be assigned to a channel/supergroup

#### [channels.updateUsername](https://core.telegram.org/method/channels.updateUsername)

Change the username of a supergroup/channel

#### [config](https://core.telegram.org/constructor/config)

Current configuration
