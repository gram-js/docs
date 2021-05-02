# upload.saveFilePart

Saves a part of file for futher sending to one of the methods.

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
        new Api.upload.saveFilePart({
            fileId: 3008416,
            filePart: 1765024,
            bytes: Buffer.from('some bytes here'),
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
        new Api.upload.saveFilePart({
            fileId: 3008416,
            filePart: 1765024,
            bytes: Buffer.from('some bytes here'),
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
upload.saveFilePart#b304a621 file_id:long file_part:int bytes:bytes = Bool;
```

## Parameters

|     Name      | Type                                          | Description                                  |
| :-----------: | --------------------------------------------- | -------------------------------------------- |
|  **file_id**  | [long](https://core.telegram.org/type/long)   | Random file identifier created by the client |
| **file_part** | [int](https://core.telegram.org/type/int)     | Numerical order of a part                    |
|   **bytes**   | [bytes](https://core.telegram.org/type/bytes) | Binary data, contend of a part               |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type              | Description                     |
| :--: | ----------------- | ------------------------------- |
| 400  | FILE_PART_EMPTY   | The provided file part is empty |
| 400  | FILE_PART_INVALID | The file part number is invalid |

## Can bots use this method?

Yes

## Related pages
