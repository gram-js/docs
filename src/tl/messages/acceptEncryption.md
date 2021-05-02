# messages.acceptEncryption

Confirms creation of a secret chat

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.acceptEncryption({
		peer: new Api.InputEncryptedChat({...}),
		gB: Buffer.from('some bytes here'),
		keyFingerprint: 3544566,
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
    const result: Api.EncryptedChat = await client.invoke(new Api.messages.acceptEncryption({
		peer: new Api.InputEncryptedChat({...}),
		gB: Buffer.from('some bytes here'),
		keyFingerprint: 3544566,
		}));
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
encryptedChatEmpty#ab7ec0a0 id:int = EncryptedChat;
encryptedChatWaiting#3bf703dc id:int access_hash:long date:int admin_id:int participant_id:int = EncryptedChat;
encryptedChatRequested#62718a82 flags:# folder_id:flags.0?int id:int access_hash:long date:int admin_id:int participant_id:int g_a:bytes = EncryptedChat;
encryptedChat#fa56ce36 id:int access_hash:long date:int admin_id:int participant_id:int g_a_or_b:bytes key_fingerprint:long = EncryptedChat;
encryptedChatDiscarded#13d6dd27 id:int = EncryptedChat;
---functions---
messages.acceptEncryption#3dbc0415 peer:InputEncryptedChat g_b:bytes key_fingerprint:long = EncryptedChat;
```

## Parameters

|        Name         | Type                                                                    | Description                                                                                         |
| :-----------------: | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|      **peer**       | [InputEncryptedChat](https://core.telegram.org/type/InputEncryptedChat) | Secret chat ID                                                                                      |
|       **g_b**       | [bytes](https://core.telegram.org/type/bytes)                           | B = g ^ b mod p, see [Wikipedia](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) |
| **key_fingerprint** | [long](https://core.telegram.org/type/long)                             | 64-bit fingerprint of the received key                                                              |

## Result

[EncryptedChat](https://core.telegram.org/type/EncryptedChat)

## Possible errors

| Code | Type                        | Description                          |
| :--: | --------------------------- | ------------------------------------ |
| 400  | CHAT_ID_INVALID             | The provided chat id is invalid      |
| 400  | ENCRYPTION_ALREADY_ACCEPTED | Secret chat already accepted         |
| 400  | ENCRYPTION_ALREADY_DECLINED | The secret chat was already declined |

## Can bots use this method?

Yes

## Related pages
