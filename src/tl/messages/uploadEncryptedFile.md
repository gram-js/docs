# messages.uploadEncryptedFile

Upload encrypted file and associate it to a secret chat

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.uploadEncryptedFile({
		peer: new Api.InputEncryptedChat({...}),
		file: new Api.InputEncryptedFile({...}),
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
    const result: Api.EncryptedFile = await client.invoke(new Api.messages.uploadEncryptedFile({
		peer: new Api.InputEncryptedChat({...}),
		file: new Api.InputEncryptedFile({...}),
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```txt
encryptedFileEmpty#c21f497e = EncryptedFile;
encryptedFile#4a70994c id:long access_hash:long size:int dc_id:int key_fingerprint:int = EncryptedFile;
---functions---
messages.uploadEncryptedFile#5057c497 peer:InputEncryptedChat file:InputEncryptedFile = EncryptedFile;
```

## Parameters

|   Name   | Type                                                                    | Description                              |
| :------: | ----------------------------------------------------------------------- | ---------------------------------------- |
| **peer** | [InputEncryptedChat](https://core.telegram.org/type/InputEncryptedChat) | The secret chat to associate the file to |
| **file** | [InputEncryptedFile](https://core.telegram.org/type/InputEncryptedFile) | The file                                 |

## Result

[EncryptedFile](https://core.telegram.org/type/EncryptedFile)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
