# messages.setBotCallbackAnswer

Set the callback answer to a user button press (bots only)

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
        new Api.messages.setBotCallbackAnswer({
            alert: true,
            queryId: 5130910,
            message: 'random string here',
            url: 'random string here',
            cacheTime: 3996368,
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
    const result: Api.Bool = await client.invoke(
        new Api.messages.setBotCallbackAnswer({
            alert: true,
            queryId: 5130910,
            message: 'random string here',
            url: 'random string here',
            cacheTime: 3996368,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.setBotCallbackAnswer#d58f130a flags:# alert:flags.1?true query_id:long message:flags.0?string url:flags.2?string cache_time:int = Bool;
```

## Parameters

|      Name      | Type                                                                                                                              | Description                                                                                             |
| :------------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|   **flags**    | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|   **alert**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true) | Whether to show the message as a popup instead of a toast notification                                  |
|  **query_id**  | [long](https://core.telegram.org/type/long)                                                                                       | Query ID                                                                                                |
|  **message**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](https://core.telegram.org/type/string)    | Popup to show                                                                                           |
|    **url**     | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](https://core.telegram.org/type/string)    | URL to open                                                                                             |
| **cache_time** | [int](https://core.telegram.org/type/int)                                                                                         | Cache validity                                                                                          |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type             | Description             |
| :--: | ---------------- | ----------------------- |
| 400  | QUERY_ID_INVALID | The query ID is invalid |
| 400  | URL_INVALID      | Invalid URL provided    |

## Can bots use this method?

Yes

## Related pages
