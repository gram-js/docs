# messages.ReadEncryptedHistory

Marks message history within a secret chat as read.

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
    new Api.messages.ReadEncryptedHistory({
      peer: new Api.InputEncryptedChat({
        chatId: 43,
        accessHash: BigInt("-4156887774564"),
      }),
      maxDate: 43,
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
    new Api.messages.ReadEncryptedHistory({
      peer: new Api.InputEncryptedChat({
        chatId: 43,
        accessHash: BigInt("-4156887774564"),
      }),
      maxDate: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name     | Type                                                                    | Description                                         |
| :---------: | ----------------------------------------------------------------------- | --------------------------------------------------- |
|  **peer**   | [InputEncryptedChat](https://core.telegram.org/type/InputEncryptedChat) | Secret chat ID                                      |
| **maxDate** | [int](https://core.telegram.org/type/int)                               | Maximum date value for received messages in history |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type            | Description                       |
| :--: | --------------- | --------------------------------- |
| 400  | MSG_WAIT_FAILED | A waiting call returned an error. |

## Can bots use this method?

No

## Related pages
