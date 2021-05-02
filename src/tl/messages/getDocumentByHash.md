# messages.getDocumentByHash

Get a document by its SHA256 hash, mainly used for gifs

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
        new Api.messages.getDocumentByHash({
            sha256: Buffer.from('some bytes here'),
            size: 9452675,
            mimeType: 'random string here',
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
    const result: Api.Document = await client.invoke(
        new Api.messages.getDocumentByHash({
            sha256: Buffer.from('some bytes here'),
            size: 9452675,
            mimeType: 'random string here',
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
documentEmpty#36f8c871 id:long = Document;
document#1e87342b flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:int thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;
---functions---
messages.getDocumentByHash#338e2464 sha256:bytes size:int mime_type:string = Document;
```

## Parameters

|     Name      | Type                                            | Description               |
| :-----------: | ----------------------------------------------- | ------------------------- |
|  **sha256**   | [bytes](https://core.telegram.org/type/bytes)   | SHA256 of file            |
|   **size**    | [int](https://core.telegram.org/type/int)       | Size of the file in bytes |
| **mime_type** | [string](https://core.telegram.org/type/string) | Mime type                 |

## Result

[Document](https://core.telegram.org/type/Document)

## Possible errors

| Code | Type                | Description                         |
| :--: | ------------------- | ----------------------------------- |
| 400  | SHA256_HASH_INVALID | The provided SHA256 hash is invalid |

## Can bots use this method?

Yes

## Related pages
