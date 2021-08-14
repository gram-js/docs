# messages.GetAllChats

Get all chats, channels and supergroups

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
    new Api.messages.GetAllChats({
      exceptIds: [43],
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
    new Api.messages.GetAllChats({
      exceptIds: [43],
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name      | Type                                                                                           | Description                             |
| :-----------: | ---------------------------------------------------------------------------------------------- | --------------------------------------- |
| **exceptIds** | [Vector](https://core.telegram.org/type/Vector%20t)<[int](https://core.telegram.org/type/int)> | Except these chats/channels/supergroups |

## Result

[messages.Chats](https://core.telegram.org/type/messages.Chats)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages
