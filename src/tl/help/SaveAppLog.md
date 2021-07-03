# help.SaveAppLog

Saves logs of application on the server.

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
    new Api.help.SaveAppLog({
      events: [
        new Api.InputAppEvent({
          time: 8.24,
          type: "some string here",
          peer: BigInt("-4156887774564"),
          data: new Api.JsonNull({}),
        }),
      ],
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
  const result: Api.Bool = await client.invoke(
    new Api.help.SaveAppLog({
      events: [
        new Api.InputAppEvent({
          time: 8.24,
          type: "some string here",
          peer: BigInt("-4156887774564"),
          data: new Api.JsonNull({}),
        }),
      ],
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name    | Type                                                                                                               | Description          |
| :--------: | ------------------------------------------------------------------------------------------------------------------ | -------------------- |
| **events** | [Vector](https://core.telegram.org/type/Vector%20t)<[InputAppEvent](https://core.telegram.org/type/InputAppEvent)> | List of input events |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages
