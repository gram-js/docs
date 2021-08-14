# messages.ReportEncryptedSpam

Report a secret chat for spam

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
    new Api.messages.ReportEncryptedSpam({
      peer: new Api.InputEncryptedChat({
        chatId: 43,
        accessHash: BigInt("-4156887774564"),
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

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result: Api.Bool = await client.invoke(
    new Api.messages.ReportEncryptedSpam({
      peer: new Api.InputEncryptedChat({
        chatId: 43,
        accessHash: BigInt("-4156887774564"),
      }),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|   Name   | Type                                                                    | Description               |
| :------: | ----------------------------------------------------------------------- | ------------------------- |
| **peer** | [InputEncryptedChat](https://core.telegram.org/type/InputEncryptedChat) | The secret chat to report |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type            | Description                     |
| :--: | --------------- | ------------------------------- |
| 400  | CHAT_ID_INVALID | The provided chat id is invalid |

## Can bots use this method?

No

## Related pages
