# messages.GetBotCallbackAnswer

No description found

### [](#example)Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const session = new StringSession("");
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  const result = await client.invoke(
    new Api.messages.GetBotCallbackAnswer({
      peer: "username",
      msgId: 43,
      game: true,
      data: Buffer.from("arbitrary data here"),
      password: new Api.InputCheckPasswordSRP({
        srpId: BigInt("-4156887774564"),
        a: Buffer.from("arbitrary data here"),
        m1: Buffer.from("arbitrary data here"),
      }),
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
  const result: Api.messages.BotCallbackAnswer = await client.invoke(
    new Api.messages.GetBotCallbackAnswer({
      peer: "username",
      msgId: 43,
      game: true,
      data: Buffer.from("arbitrary data here"),
      password: new Api.InputCheckPasswordSRP({
        srpId: BigInt("-4156887774564"),
        a: Buffer.from("arbitrary data here"),
        m1: Buffer.from("arbitrary data here"),
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|   Name   | Type                  | Description          |
| :------: | --------------------- | -------------------- |
|   game   | true                  | No description found |
|   peer   | InputPeer             | No description found |
|  msgId   | int                   | No description found |
|   data   | bytes                 | No description found |
| password | InputCheckPasswordSRP | No description found |

### [](#result)Result

messages.BotCallbackAnswer

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
