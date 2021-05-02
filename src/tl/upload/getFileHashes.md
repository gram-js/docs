# upload.getFileHashes

Get SHA256 hashes for verifying downloaded files

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
        new Api.upload.getFileHashes({
            location: new Api.InputFileLocation({
                /* ... */
            }),
            offset: 5955620,
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
    const result: Api.Vector<FileHash> = await client.invoke(
        new Api.upload.getFileHashes({
            location: new Api.InputFileLocation({
                /* ... */
            }),
            offset: 5955620,
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
upload.getFileHashes#c7025931 location:InputFileLocation offset:int = Vector<FileHash>;
```

## Parameters

|     Name     | Type                                                                  | Description                          |
| :----------: | --------------------------------------------------------------------- | ------------------------------------ |
| **location** | [InputFileLocation](https://core.telegram.org/type/InputFileLocation) | File                                 |
|  **offset**  | [int](https://core.telegram.org/type/int)                             | Offset from which to get file hashes |

## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[FileHash](https://core.telegram.org/type/FileHash)>

## Possible errors

| Code | Type             | Description                      |
| :--: | ---------------- | -------------------------------- |
| 400  | LOCATION_INVALID | The provided location is invalid |

## Can bots use this method?

Yes

## Related pages