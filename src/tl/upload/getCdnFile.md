# upload.getCdnFile

Download a [CDN](https://core.telegram.org/cdn) file.

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
        new Api.upload.getCdnFile({
            fileToken: Buffer.from('some bytes here'),
            offset: 1130267,
            limit: 8166765,
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
    const result: Api.upload.CdnFile = await client.invoke(
        new Api.upload.getCdnFile({
            fileToken: Buffer.from('some bytes here'),
            offset: 1130267,
            limit: 8166765,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
upload.cdnFileReuploadNeeded#eea8e46e request_token:bytes = upload.CdnFile;
upload.cdnFile#a99fca4f bytes:bytes = upload.CdnFile;
---functions---
upload.getCdnFile#2000bcc3 file_token:bytes offset:int limit:int = upload.CdnFile;
```

## Parameters

|      Name      | Type                                          | Description                 |
| :------------: | --------------------------------------------- | --------------------------- |
| **file_token** | [bytes](https://core.telegram.org/type/bytes) | File token                  |
|   **offset**   | [int](https://core.telegram.org/type/int)     | Offset of chunk to download |
|   **limit**    | [int](https://core.telegram.org/type/int)     | Length of chunk to download |

## Result

[upload.CdnFile](https://core.telegram.org/type/upload.CdnFile)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)
