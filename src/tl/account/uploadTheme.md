# account.uploadTheme

Upload theme

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.uploadTheme({
		file: new Api.InputFile({...}),
		thumb: new Api.InputFile({...}),
		fileName: 'random string here',
		mimeType: 'random string here',
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
    const result: Api.Document = await client.invoke(new Api.account.uploadTheme({
		file: new Api.InputFile({...}),
		thumb: new Api.InputFile({...}),
		fileName: 'random string here',
		mimeType: 'random string here',
		}));
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
account.uploadTheme#1c3db333 flags:# file:InputFile thumb:flags.0?InputFile file_name:string mime_type:string = Document;
```

## Parameters

|     Name      | Type                                                                                                                                 | Description                                                                                             |
| :-----------: | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
|   **flags**   | [#](https://core.telegram.org/type/%23)                                                                                              | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|   **file**    | [InputFile](https://core.telegram.org/type/InputFile)                                                                                | Theme file uploaded as described in [files »](https://core.telegram.org/api/files)                      |
|   **thumb**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputFile](https://core.telegram.org/type/InputFile) | Thumbnail                                                                                               |
| **file_name** | [string](https://core.telegram.org/type/string)                                                                                      | File name                                                                                               |
| **mime_type** | [string](https://core.telegram.org/type/string)                                                                                      | MIME type, must be application/x-tgtheme-{format}, where format depends on the client                   |

## Result

[Document](https://core.telegram.org/type/Document)

## Possible errors

| Code | Type               | Description                 |
| :--: | ------------------ | --------------------------- |
| 400  | THEME_FILE_INVALID | Invalid theme file provided |

## Can bots use this method?

Yes

## Related pages

#### [Uploading and Downloading Files](https://core.telegram.org/api/files)

How to transfer large data batches correctly.
