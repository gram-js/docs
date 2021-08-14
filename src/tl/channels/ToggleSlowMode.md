# channels.ToggleSlowMode

Toggle supergroup slow mode: if enabled, users will only be able to send one message every `seconds` seconds

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
    new Api.channels.ToggleSlowMode({
      channel: "username",
      seconds: 43,
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
    new Api.channels.ToggleSlowMode({
      channel: "username",
      seconds: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name     | Type                                                        | Description                                                                                        |
| :---------: | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel) | The [supergroup](https://core.telegram.org/api/channel)                                            |
| **seconds** | [int](https://core.telegram.org/type/int)                   | Users will only be able to send one message every `seconds` seconds, `0` to disable the limitation |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                              | Description                                  |
| :--: | --------------------------------- | -------------------------------------------- |
| 400  | CHAT_ADMIN_REQUIRED               | You must be an admin in this chat to do this |
| 400  | CHAT_NOT_MODIFIED                 | The pinned message wasn't modified           |
| 400  | INPUT_METHOD_INVALID_1192227_X    | Invalid method                               |
| 400  | INPUT_METHOD_INVALID_1604042050_X | Invalid method                               |
| 400  | SECONDS_INVALID                   | Invalid duration provided                    |

## Can bots use this method?

No

## Related pages

#### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.
