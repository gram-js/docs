# channels.ToggleSignatures

Enable/disable message signatures in channels

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
    new Api.channels.ToggleSignatures({
      channel: "username",
      enabled: false,
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
    new Api.channels.ToggleSignatures({
      channel: "username",
      enabled: false,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name     | Type                                                        | Description |
| :---------: | ----------------------------------------------------------- | ----------- |
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel) | Channel     |
| **enabled** | [Bool](https://core.telegram.org/type/Bool)                 | Value       |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type            | Description                     |
| :--: | --------------- | ------------------------------- |
| 400  | CHANNEL_INVALID | The provided channel is invalid |
| 400  | CHAT_ID_INVALID | The provided chat id is invalid |

## Can bots use this method?

No

## Related pages
