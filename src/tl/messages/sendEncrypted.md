# messages.sendEncrypted

Sends a text message to a secret chat.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.sendEncrypted({
		silent: true,
		peer: new Api.InputEncryptedChat({...}),
		randomId: 2927390,
		data: Buffer.from('some bytes here'),
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
    const result: Api.messages.SentEncryptedMessage = await client.invoke(new Api.messages.sendEncrypted({
		silent: true,
		peer: new Api.InputEncryptedChat({...}),
		randomId: 2927390,
		data: Buffer.from('some bytes here'),
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
messages.sentEncryptedMessage#560f8935 date:int = messages.SentEncryptedMessage;
messages.sentEncryptedFile#9493ff32 date:int file:EncryptedFile = messages.SentEncryptedMessage;
---functions---
messages.sendEncrypted#44fa7a15 flags:# silent:flags.0?true peer:InputEncryptedChat random_id:long data:bytes = messages.SentEncryptedMessage;
```

## Parameters

|     Name      | Type                                                                                                                              | Description                                                                                                                                                    |
| :-----------: | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   **flags**   | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)                                                        |
|  **silent**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Send encrypted message without a notification                                                                                                                  |
|   **peer**    | [InputEncryptedChat](https://core.telegram.org/type/InputEncryptedChat)                                                           | Secret chat ID                                                                                                                                                 |
| **random_id** | [long](https://core.telegram.org/type/long)                                                                                       | Unique client message ID, necessary to avoid message resending                                                                                                 |
|   **data**    | [bytes](https://core.telegram.org/type/bytes)                                                                                     | TL-serialization of [DecryptedMessage](https://core.telegram.org/type/DecryptedMessage) type, encrypted with a key that was created during chat initialization |

## Result

[messages.SentEncryptedMessage](https://core.telegram.org/type/messages.SentEncryptedMessage)

## Possible errors

| Code | Type                | Description                      |
| :--: | ------------------- | -------------------------------- |
| 400  | CHAT_ID_INVALID     | The provided chat id is invalid  |
| 400  | DATA_INVALID        | Encrypted data invalid           |
| 400  | ENCRYPTION_DECLINED | The secret chat was declined     |
| 400  | MSG_WAIT_FAILED     | A waiting call returned an error |

## Can bots use this method?

Yes

## Related pages

#### [DecryptedMessage](https://core.telegram.org/type/DecryptedMessage)

Object describes the contents of an encrypted message.
