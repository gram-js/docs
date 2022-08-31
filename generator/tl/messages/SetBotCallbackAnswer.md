# messages.SetBotCallbackAnswer

Set the callback answer to a user button press (bots only)

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
    new Api.messages.SetBotCallbackAnswer({
      queryId: BigInt("-4156887774564"),
      cacheTime: 43,
      alert: true,
      message: "Hello there!",
      url: "some string here",
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
    new Api.messages.SetBotCallbackAnswer({
      queryId: BigInt("-4156887774564"),
      cacheTime: 43,
      alert: true,
      message: "Hello there!",
      url: "some string here",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name      | Type                                                                                                                              | Description                                                                                             |
| :-----------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|   **flags**   | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|   **alert**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true) | Whether to show the message as a popup instead of a toast notification                                  |
|  **queryId**  | [long](https://core.telegram.org/type/long)                                                                                       | Query ID                                                                                                |
|  **message**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](https://core.telegram.org/type/string)    | Popup to show                                                                                           |
|    **url**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](https://core.telegram.org/type/string)    | URL to open                                                                                             |
| **cacheTime** | [int](https://core.telegram.org/type/int)                                                                                         | Cache validity                                                                                          |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type             | Description                       |
| :--: | ---------------- | --------------------------------- |
| 400  | MESSAGE_TOO_LONG | The provided message is too long. |
| 400  | QUERY_ID_INVALID | The query ID is invalid.          |
| 400  | URL_INVALID      | Invalid URL provided.             |

## Can bots use this method?

Yes

## Related pages
