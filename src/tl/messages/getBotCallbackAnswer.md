# messages.getBotCallbackAnswer

Press an inline callback button and get a callback answer from the bot

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
        new Api.messages.getBotCallbackAnswer({
            game: true,
            peer: new Api.InputPeer({
                /* ... */
            }),
            msgId: 4437344,
            data: Buffer.from('some bytes here'),
            password: new Api.InputCheckPasswordSRP({
                /* ... */
            }),
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
    const result: Api.messages.BotCallbackAnswer = await client.invoke(
        new Api.messages.getBotCallbackAnswer({
            game: true,
            peer: new Api.InputPeer({
                /* ... */
            }),
            msgId: 4437344,
            data: Buffer.from('some bytes here'),
            password: new Api.InputCheckPasswordSRP({
                /* ... */
            }),
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
messages.botCallbackAnswer#36585ea4 flags:# alert:flags.1?true has_url:flags.3?true native_ui:flags.4?true message:flags.0?string url:flags.2?string cache_time:int = messages.BotCallbackAnswer;
---functions---
messages.getBotCallbackAnswer#9342ca07 flags:# game:flags.1?true peer:InputPeer msg_id:int data:flags.0?bytes password:flags.2?InputCheckPasswordSRP = messages.BotCallbackAnswer;
```

## Parameters

|     Name     | Type                                                                                                                                                         | Description                                                                                                                                                                                                         |
| :----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  **flags**   | [#](https://core.telegram.org/type/%23)                                                                                                                      | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)                                                                                                             |
|   **game**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true)                            | Whether this is a "play game" button                                                                                                                                                                                |
|   **peer**   | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                                                        | Where was the inline keyboard sent                                                                                                                                                                                  |
|  **msg_id**  | [int](https://core.telegram.org/type/int)                                                                                                                    | ID of the Message with the inline keyboard                                                                                                                                                                          |
|   **data**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[bytes](https://core.telegram.org/type/bytes)                                 | Callback data                                                                                                                                                                                                       |
| **password** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InputCheckPasswordSRP](https://core.telegram.org/type/InputCheckPasswordSRP) | For buttons [requiring you to verify your identity with your 2FA password](https://core.telegram.org/constructor/keyboardButtonCallback), the SRP payload generated using [SRP](https://core.telegram.org/api/srp). |

## Result

[messages.BotCallbackAnswer](https://core.telegram.org/type/messages.BotCallbackAnswer)

## Possible errors

| Code | Type                 | Description                                         |
| :--: | -------------------- | --------------------------------------------------- |
| 400  | BOT_RESPONSE_TIMEOUT | A timeout occurred while fetching data from the bot |
| 400  | CHANNEL_INVALID      | The provided channel is invalid                     |
| 400  | CHANNEL_PRIVATE      | You haven't joined this channel/supergroup          |
| 400  | DATA_INVALID         | Encrypted data invalid                              |
| 400  | MESSAGE_ID_INVALID   | The provided message id is invalid                  |
| 400  | PEER_ID_INVALID      | The provided peer id is invalid                     |
| -503 | Timeout              | Timeout while fetching data                         |

## Can bots use this method?

Yes

## Related pages

### [keyboardButtonCallback](https://core.telegram.org/constructor/keyboardButtonCallback)

Callback button

### [Two-factor authentication](https://core.telegram.org/api/srp)

How to login to a user's account if they have enabled 2FA, how to change password.
