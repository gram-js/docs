# upload.getWebfile

Returns content of an HTTP file or a part, by proxying the request through telegram.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.upload.getWebfile({
		location: new Api.InputWebFileLocation({...}),
		offset: 9204221,
		limit: 6983700,
		}));
    console.log(result); // prints the result
})();

```

:::

:::tab{title="TypeScript"}

```ts
import {Api, TelegramClient} from 'telegram';
import {StringSession} from 'telegram/sessions';

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.upload.WebFile = await client.invoke(new Api.upload.getWebfile({
		location: new Api.InputWebFileLocation({...}),
		offset: 9204221,
		limit: 6983700,
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
upload.webFile#21e753bc size:int mime_type:string file_type:storage.FileType mtime:int bytes:bytes = upload.WebFile;
---functions---
upload.getWebFile#24e6818d location:InputWebFileLocation offset:int limit:int = upload.WebFile;
```

## Parameters

|     Name     | Type                                                                        | Description                    |
| :----------: | --------------------------------------------------------------------------- | ------------------------------ |
| **location** | [InputWebFileLocation](https://core.telegram.org/type/InputWebFileLocation) | The file to download           |
|  **offset**  | [int](https://core.telegram.org/type/int)                                   | Number of bytes to be skipped  |
|  **limit**   | [int](https://core.telegram.org/type/int)                                   | Number of bytes to be returned |

## Result

[upload.WebFile](https://core.telegram.org/type/upload.WebFile)

## Possible errors

| Code | Type             | Description                      |
| :--: | ---------------- | -------------------------------- |
| 400  | LOCATION_INVALID | The provided location is invalid |

## Can bots use this method?

Yes

## Related pages
