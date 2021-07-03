# InitConnection

Initialize connection

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
    new Api.InitConnection({
      apiId: 43,
      deviceModel: "some string here",
      systemVersion: "some string here",
      appVersion: "some string here",
      systemLangCode: "some string here",
      langPack: "some string here",
      langCode: "some string here",
      query: new Api.AnyRequest({
        /*...*/
      }),
      proxy: new Api.InputClientProxy({
        address: "some string here",
        port: 43,
      }),
      params: new Api.JsonNull({}),
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
  const result: Api.AnyRequest = await client.invoke(
    new Api.InitConnection({
      apiId: 43,
      deviceModel: "some string here",
      systemVersion: "some string here",
      appVersion: "some string here",
      systemLangCode: "some string here",
      langPack: "some string here",
      langCode: "some string here",
      query: new Api.AnyRequest({
        /*...*/
      }),
      proxy: new Api.InputClientProxy({
        address: "some string here",
        port: 43,
      }),
      params: new Api.JsonNull({}),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|        Name        | Type                                                                                                                                               | Description                                                                                                                             |
| :----------------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
|     **flags**      | [#](https://core.telegram.org/type/%23)                                                                                                            | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)                                 |
|     **apiId**      | [int](https://core.telegram.org/type/int)                                                                                                          | Application identifier (see. [App configuration](https://core.telegram.org/myapp))                                                      |
|  **deviceModel**   | [string](https://core.telegram.org/type/string)                                                                                                    | Device model                                                                                                                            |
| **systemVersion**  | [string](https://core.telegram.org/type/string)                                                                                                    | Operation system version                                                                                                                |
|   **appVersion**   | [string](https://core.telegram.org/type/string)                                                                                                    | Application version                                                                                                                     |
| **systemLangCode** | [string](https://core.telegram.org/type/string)                                                                                                    | Code for the language used on the device's OS, ISO 639-1 standard                                                                       |
|    **langPack**    | [string](https://core.telegram.org/type/string)                                                                                                    | Language pack to use                                                                                                                    |
|    **langCode**    | [string](https://core.telegram.org/type/string)                                                                                                    | Code for the language used on the client, ISO 639-1 standard                                                                            |
|     **proxy**      | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputClientProxy](https://core.telegram.org/type/InputClientProxy) | Info about an MTProto proxy                                                                                                             |
|     **params**     | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[JSONValue](https://core.telegram.org/type/JSONValue)               | Additional initConnection parameters. <br>For now, only the `tz\_offset` field is supported, for specifying timezone offset in seconds. |
|     **query**      | !X                                                                                                                                                 | The query itself                                                                                                                        |

## Result

X

## Possible errors

| Code | Type                     | Description   |
| :--: | ------------------------ | ------------- |
| 400  | CONNECTION_LAYER_INVALID | Layer invalid |

## Can bots use this method?

Yes

## Related pages
