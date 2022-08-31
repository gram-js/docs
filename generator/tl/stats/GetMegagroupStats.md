# stats.GetMegagroupStats

Get [supergroup statistics](https://core.telegram.org/api/stats)

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
    new Api.stats.GetMegagroupStats({
      channel: "username",
      dark: true,
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

  const result: Api.stats.MegagroupStats = await client.invoke(
    new Api.stats.GetMegagroupStats({
      channel: "username",
      dark: true,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name     | Type                                                                                                                              | Description                                                                                             |
| :---------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  **flags**  | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|  **dark**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Whether to enable dark theme for graph colors                                                           |
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel)                                                                       | [Supergroup ID](https://core.telegram.org/api/channel)                                                  |

## Result

[stats.MegagroupStats](https://core.telegram.org/type/stats.MegagroupStats)

## Possible errors

| Code | Type                | Description                                   |
| :--: | ------------------- | --------------------------------------------- |
| 400  | CHANNEL_INVALID     | The provided channel is invalid.              |
| 400  | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400  | MEGAGROUP_REQUIRED  | You can only use this method on a supergroup. |

## Can bots use this method?

No

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Channel statistics](https://core.telegram.org/api/stats)

Telegram offers detailed channel statistics for channels and supergroups.
