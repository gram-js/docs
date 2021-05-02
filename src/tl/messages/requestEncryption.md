# messages.requestEncryption

Sends a request to start a secret chat to the user.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.requestEncryption({
		userId: new Api.InputUser({...}),
		randomId: 2421447,
		gA: Buffer.from('some bytes here'),
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
    const result: Api.EncryptedChat = await client.invoke(new Api.messages.requestEncryption({
		userId: new Api.InputUser({...}),
		randomId: 2421447,
		gA: Buffer.from('some bytes here'),
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
messages.requestEncryption#f64daf43 user_id:InputUser random_id:int g_a:bytes = EncryptedChat;
```

## Parameters

|     Name      | Type                                                  | Description                                                                                         |
| :-----------: | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|  **user_id**  | [InputUser](https://core.telegram.org/type/InputUser) | User ID                                                                                             |
| **random_id** | [int](https://core.telegram.org/type/int)             | Unique client request ID required to prevent resending. This also doubles as the chat ID.           |
|    **g_a**    | [bytes](https://core.telegram.org/type/bytes)         | A = g ^ a mod p, see [Wikipedia](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) |

## Result

[EncryptedChat](https://core.telegram.org/type/EncryptedChat)

## Possible errors

| Code | Type            | Description                     |
| :--: | --------------- | ------------------------------- |
| 400  | DH_G_A_INVALID  | g_a invalid                     |
| 400  | USER_ID_INVALID | The provided user ID is invalid |

## Can bots use this method?

Yes

## Related pages
