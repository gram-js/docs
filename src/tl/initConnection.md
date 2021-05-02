# initConnection

Initialize connection

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(
        new Api.initConnection({
            apiId: 8925113,
            deviceModel: 'random string here',
            systemVersion: 'random string here',
            appVersion: 'random string here',
            systemLangCode: 'random string here',
            langPack: 'random string here',
            langCode: 'random string here',
            proxy: new Api.InputClientProxy({
                /* ... */
            }),
            params: new Api.JSONValue({
                /* ... */
            }),
            query: new Api.AnyRequest({
                /* ... */
            }),
        }),
    );
    console.log(result); // prints the result
})();
```

:::

:::tab{title="TypeScript"}

```ts
import { Api, TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.X = await client.invoke(
        new Api.initConnection({
            apiId: 8925113,
            deviceModel: 'random string here',
            systemVersion: 'random string here',
            appVersion: 'random string here',
            systemLangCode: 'random string here',
            langPack: 'random string here',
            langCode: 'random string here',
            proxy: new Api.InputClientProxy({
                /* ... */
            }),
            params: new Api.JSONValue({
                /* ... */
            }),
            query: new Api.AnyRequest({
                /* ... */
            }),
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
---functions---
initConnection#c1cd5ea9 {X:Type} flags:# api_id:int device_model:string system_version:string app_version:string system_lang_code:string lang_pack:string lang_code:string proxy:flags.0?InputClientProxy params:flags.1?JSONValue query:!X = X;
```

## Parameters

|         Name         | Type                                                                                                                                               | Description                                                                                                                         |
| :------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
|      **flags**       | [#](https://core.telegram.org/type/%23)                                                                                                            | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)                             |
|      **api_id**      | [int](https://core.telegram.org/type/int)                                                                                                          | Application identifier (see. [App configuration](https://core.telegram.org/myapp))                                                  |
|   **device_model**   | [string](https://core.telegram.org/type/string)                                                                                                    | Device model                                                                                                                        |
|  **system_version**  | [string](https://core.telegram.org/type/string)                                                                                                    | Operation system version                                                                                                            |
|   **app_version**    | [string](https://core.telegram.org/type/string)                                                                                                    | Application version                                                                                                                 |
| **system_lang_code** | [string](https://core.telegram.org/type/string)                                                                                                    | Code for the language used on the device's OS, ISO 639-1 standard                                                                   |
|    **lang_pack**     | [string](https://core.telegram.org/type/string)                                                                                                    | Language pack to use                                                                                                                |
|    **lang_code**     | [string](https://core.telegram.org/type/string)                                                                                                    | Code for the language used on the client, ISO 639-1 standard                                                                        |
|      **proxy**       | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputClientProxy](https://core.telegram.org/type/InputClientProxy) | Info about an MTProto proxy                                                                                                         |
|      **params**      | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[JSONValue](https://core.telegram.org/type/JSONValue)               | Additional initConnection parameters.<br>For now, only the tz_offset field is supported, for specifying timezone offset in seconds. |
|      **query**       | !X                                                                                                                                                 | The query itself                                                                                                                    |

## Result

X

## Possible errors

| Code | Type                     | Description   |
| :--: | ------------------------ | ------------- |
| 400  | CONNECTION_LAYER_INVALID | Layer invalid |

## Can bots use this method?

Yes

## Related pages
