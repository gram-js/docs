# bots.GetBotCommands

Obtain a list of bot commands for the specified bot scope and language code

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
    new Api.bots.GetBotCommands({
      scope: new Api.BotCommandScopeDefault({}),
      langCode: "some string here",
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

  const result: Api.Vector<BotCommand> = await client.invoke(
    new Api.bots.GetBotCommands({
      scope: new Api.BotCommandScopeDefault({}),
      langCode: "some string here",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name     | Type                                                              | Description   |
| :----------: | ----------------------------------------------------------------- | ------------- |
|  **scope**   | [BotCommandScope](https://core.telegram.org/type/BotCommandScope) | Command scope |
| **langCode** | [string](https://core.telegram.org/type/string)                   | Language code |

## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[BotCommand](https://core.telegram.org/type/BotCommand)>

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
