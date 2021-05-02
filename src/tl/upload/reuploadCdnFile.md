# upload.reuploadCdnFile

Request a reupload of a certain file to a [CDN DC](https://core.telegram.org/cdn).

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
        new Api.upload.reuploadCdnFile({
            fileToken: Buffer.from('some bytes here'),
            requestToken: Buffer.from('some bytes here'),
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
        new Api.upload.reuploadCdnFile({
            fileToken: Buffer.from('some bytes here'),
            requestToken: Buffer.from('some bytes here'),
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
---functions---
upload.reuploadCdnFile#9b2754a8 file_token:bytes request_token:bytes = Vector<FileHash>;
```

## Parameters

|       Name        | Type                                          | Description   |
| :---------------: | --------------------------------------------- | ------------- |
|  **file_token**   | [bytes](https://core.telegram.org/type/bytes) | File token    |
| **request_token** | [bytes](https://core.telegram.org/type/bytes) | Request token |

## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[FileHash](https://core.telegram.org/type/FileHash)>

## Possible errors

| Code | Type               | Description                    |
| :--: | ------------------ | ------------------------------ |
| 400  | RSA_DECRYPT_FAILED | Internal RSA decryption failed |

## Can bots use this method?

Yes

## Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)
