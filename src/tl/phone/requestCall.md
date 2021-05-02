# phone.requestCall

Start a telegram phone call

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
        new Api.phone.requestCall({
            video: true,
            userId: new Api.InputUser({
                /* ... */
            }),
            randomId: 3511366,
            gAHash: Buffer.from('some bytes here'),
            protocol: new Api.PhoneCallProtocol({
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
    const result: Api.phone.PhoneCall = await client.invoke(
        new Api.phone.requestCall({
            video: true,
            userId: new Api.InputUser({
                /* ... */
            }),
            randomId: 3511366,
            gAHash: Buffer.from('some bytes here'),
            protocol: new Api.PhoneCallProtocol({
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
phone.phoneCall#ec82e140 phone_call:PhoneCall users:Vector<User> = phone.PhoneCall;
---functions---
phone.requestCall#42ff96ed flags:# video:flags.0?true user_id:InputUser random_id:int g_a_hash:bytes protocol:PhoneCallProtocol = phone.PhoneCall;
```

## Parameters

|     Name      | Type                                                                                                                              | Description                                                                                             |
| :-----------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|   **flags**   | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|   **video**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Whether to start a video call                                                                           |
|  **user_id**  | [InputUser](https://core.telegram.org/type/InputUser)                                                                             | Destination of the phone call                                                                           |
| **random_id** | [int](https://core.telegram.org/type/int)                                                                                         | Random ID to avoid resending the same object                                                            |
| **g_a_hash**  | [bytes](https://core.telegram.org/type/bytes)                                                                                     | [Parameter for E2E encryption key exchange »](https://core.telegram.org/api/end-to-end/voice-calls)     |
| **protocol**  | [PhoneCallProtocol](https://core.telegram.org/type/PhoneCallProtocol)                                                             | Phone call settings                                                                                     |

## Result

[phone.PhoneCall](https://core.telegram.org/type/phone.PhoneCall)

## Possible errors

| Code | Type                         | Description                                                                             |
| :--: | ---------------------------- | --------------------------------------------------------------------------------------- |
| 400  | CALL_PROTOCOL_FLAGS_INVALID  | Call protocol flags invalid                                                             |
| 400  | PARTICIPANT_VERSION_OUTDATED | The other participant does not use an up to date telegram client with support for calls |
| 400  | USER_ID_INVALID              | The provided user ID is invalid                                                         |
| 403  | USER_IS_BLOCKED              | You were blocked by this user                                                           |
| 403  | USER_PRIVACY_RESTRICTED      | The user's privacy settings do not allow you to do this                                 |

## Can bots use this method?

Yes

## Related pages

#### [End-to-End Encrypted Voice Calls](https://core.telegram.org/api/end-to-end/voice-calls)
