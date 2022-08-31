# account.InitTakeoutSession

Initialize account takeout session

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
    new Api.account.InitTakeoutSession({
      contacts: true,
      messageUsers: true,
      messageChats: true,
      messageMegagroups: true,
      messageChannels: true,
      files: true,
      fileMaxSize: BigInt("-4156887774564"),
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

  const result: Api.account.Takeout = await client.invoke(
    new Api.account.InitTakeoutSession({
      contacts: true,
      messageUsers: true,
      messageChats: true,
      messageMegagroups: true,
      messageChannels: true,
      files: true,
      fileMaxSize: BigInt("-4156887774564"),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|         Name          | Type                                                                                                                              | Description                                                                                             |
| :-------------------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|       **flags**       | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|     **contacts**      | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Whether to export contacts                                                                              |
|   **messageUsers**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true) | Whether to export messages in private chats                                                             |
|   **messageChats**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](https://core.telegram.org/constructor/true) | Whether to export messages in [basic groups](https://core.telegram.org/api/channel#basic-groups)        |
| **messageMegagroups** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](https://core.telegram.org/constructor/true) | Whether to export messages in [supergroups](https://core.telegram.org/api/channel#supergroups)          |
|  **messageChannels**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](https://core.telegram.org/constructor/true) | Whether to export messages in [channels](https://core.telegram.org/api/channel#channels)                |
|       **files**       | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](https://core.telegram.org/constructor/true) | Whether to export files                                                                                 |
|    **fileMaxSize**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[int](https://core.telegram.org/type/int)          | Maximum size of files to export                                                                         |

## Result

[account.Takeout](https://core.telegram.org/type/account.Takeout)

## Possible errors

| Code | Type                   | Description                                  |
| :--: | ---------------------- | -------------------------------------------- |
| 420  | TAKEOUT_INIT_DELAY\_%d | Wait %d seconds before initializing takeout. |

## Can bots use this method?

No

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
