# messages.ToggleNoForwards

Enable or disable [content protection](https://telegram.org/blog/protected-content-delete-by-date-and-more) on a channel or chat

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
    new Api.messages.ToggleNoForwards({
      peer: "username",
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
    new Api.messages.ToggleNoForwards({
      peer: "username",
      enabled: false,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name     | Type                                                  | Description                          |
| :---------: | ----------------------------------------------------- | ------------------------------------ |
|  **peer**   | [InputPeer](https://core.telegram.org/type/InputPeer) | The chat or channel                  |
| **enabled** | [Bool](https://core.telegram.org/type/Bool)           | Enable or disable content protection |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages
