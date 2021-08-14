# messages.GetWebPagePreview

Get preview of webpage

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
    new Api.messages.GetWebPagePreview({
      message: "Hello there!",
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

  const result: Api.MessageMedia = await client.invoke(
    new Api.messages.GetWebPagePreview({
      message: "Hello there!",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name     | Type                                                                                                                                                                                              | Description                                                                                             |
| :----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  **flags**   | [#](https://core.telegram.org/type/%23)                                                                                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| **message**  | [string](https://core.telegram.org/type/string)                                                                                                                                                   | Message from which to extract the preview                                                               |
| **entities** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](https://core.telegram.org/type/MessageEntity)> | [Message entities for styled text](https://core.telegram.org/api/entities)                              |

## Result

[MessageMedia](https://core.telegram.org/type/MessageMedia)

## Possible errors

| Code | Type          | Description                   |
| :--: | ------------- | ----------------------------- |
| 400  | MESSAGE_EMPTY | The provided message is empty |

## Can bots use this method?

No

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities
