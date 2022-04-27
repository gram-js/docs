# channels.CreateChannel

Create a [supergroup/channel](https://core.telegram.org/api/channel).

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
    new Api.channels.CreateChannel({
      title: "My very normal title",
      about: "some string here",
      megagroup: true,
      forImport: true,
      geoPoint: new Api.InputGeoPoint({
        lat: 8.24,
        long: 8.24,
        accuracyRadius: 43,
      }),
      address: "some string here",
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

  const result: Api.TypeUpdates = await client.invoke(
    new Api.channels.CreateChannel({
      title: "My very normal title",
      about: "some string here",
      megagroup: true,
      forImport: true,
      geoPoint: new Api.InputGeoPoint({
        lat: 8.24,
        long: 8.24,
        accuracyRadius: 43,
      }),
      address: "some string here",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name      | Type                                                                                                                                         | Description                                                                                             |
| :-----------: | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|   **flags**   | [#](https://core.telegram.org/type/%23)                                                                                                      | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| **broadcast** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true)            | Whether to create a [channel](https://core.telegram.org/api/channel)                                    |
| **megagroup** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true)            | Whether to create a [supergroup](https://core.telegram.org/api/channel)                                 |
|   **title**   | [string](https://core.telegram.org/type/string)                                                                                              | Channel title                                                                                           |
|   **about**   | [string](https://core.telegram.org/type/string)                                                                                              | Channel description                                                                                     |
| **geoPoint**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InputGeoPoint](https://core.telegram.org/type/InputGeoPoint) | Geogroup location                                                                                       |
|  **address**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](https://core.telegram.org/type/string)               | Geogroup address                                                                                        |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type                | Description                                              |
| :--: | ------------------- | -------------------------------------------------------- |
| 400  | CHANNELS_TOO_MUCH   | You have joined too many channels/supergroups            |
| 400  | CHAT_ABOUT_TOO_LONG | Chat about too long                                      |
| 400  | CHAT_TITLE_EMPTY    | No chat title provided                                   |
| 403  | USER_RESTRICTED     | You're spamreported, you can't create channels or chats. |

## Can bots use this method?

No

## Related pages

#### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.
