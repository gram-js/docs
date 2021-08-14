# bots.SetBotCommands

Set bot command list

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
    new Api.bots.SetBotCommands({
      commands: [
        new Api.BotCommand({
          command: "some string here",
          description: "some string here",
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

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result: Api.Bool = await client.invoke(
    new Api.bots.SetBotCommands({
      commands: [
        new Api.BotCommand({
          command: "some string here",
          description: "some string here",
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

|     Name     | Type                                                                                                         | Description  |
| :----------: | ------------------------------------------------------------------------------------------------------------ | ------------ |
| **commands** | [Vector](https://core.telegram.org/type/Vector%20t)<[BotCommand](https://core.telegram.org/type/BotCommand)> | Bot commands |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
