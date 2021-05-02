# messages.sendEncryptedService

Sends a service message to a secret chat.

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
        new Api.messages.sendEncryptedService({
            peer: new Api.InputEncryptedChat({
                /* ... */
            }),
            randomId: 6741509,
            data: Buffer.from('some bytes here'),
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
    const result: Api.messages.SentEncryptedMessage = await client.invoke(
        new Api.messages.sendEncryptedService({
            peer: new Api.InputEncryptedChat({
                /* ... */
            }),
            randomId: 6741509,
            data: Buffer.from('some bytes here'),
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
messages.sentEncryptedMessage#560f8935 date:int = messages.SentEncryptedMessage;
messages.sentEncryptedFile#9493ff32 date:int file:EncryptedFile = messages.SentEncryptedMessage;
---functions---
messages.sendEncryptedService#32d439a4 peer:InputEncryptedChat random_id:long data:bytes = messages.SentEncryptedMessage;
```

## Parameters

|     Name      | Type                                                                    | Description                                                                                                                                             |
| :-----------: | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   **peer**    | [InputEncryptedChat](https://core.telegram.org/type/InputEncryptedChat) | Secret chat ID                                                                                                                                          |
| **random_id** | [long](https://core.telegram.org/type/long)                             | Unique client message ID required to prevent message resending                                                                                          |
|   **data**    | [bytes](https://core.telegram.org/type/bytes)                           | TL-serialization of [DecryptedMessage](https://core.telegram.org/type/DecryptedMessage) type, encrypted with a key generated during chat initialization |

## Result

[messages.SentEncryptedMessage](https://core.telegram.org/type/messages.SentEncryptedMessage)

## Possible errors

| Code | Type                  | Description                            |
| :--: | --------------------- | -------------------------------------- |
| 400  | DATA_INVALID          | Encrypted data invalid                 |
| 400  | ENCRYPTION_DECLINED   | The secret chat was declined           |
| 400  | ENCRYPTION_ID_INVALID | The provided secret chat ID is invalid |
| 400  | MSG_WAIT_FAILED       | A waiting call returned an error       |
| 403  | USER_IS_BLOCKED       | You were blocked by this user          |

## Can bots use this method?

Yes

## Related pages

#### [DecryptedMessage](https://core.telegram.org/type/DecryptedMessage)

Object describes the contents of an encrypted message.
