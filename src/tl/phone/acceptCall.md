# phone.acceptCall

Accept incoming call

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.phone.acceptCall({
		peer: new Api.InputPhoneCall({...}),
		gB: Buffer.from('some bytes here'),
		protocol: new Api.PhoneCallProtocol({...}),
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
    const result: Api.phone.PhoneCall = await client.invoke(new Api.phone.acceptCall({
		peer: new Api.InputPhoneCall({...}),
		gB: Buffer.from('some bytes here'),
		protocol: new Api.PhoneCallProtocol({...}),
		}));
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
phone.phoneCall#ec82e140 phone_call:PhoneCall users:Vector<User> = phone.PhoneCall;
---functions---
phone.acceptCall#3bd2b4a0 peer:InputPhoneCall g_b:bytes protocol:PhoneCallProtocol = phone.PhoneCall;
```

## Parameters

|     Name     | Type                                                                  | Description                                                                                         |
| :----------: | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|   **peer**   | [InputPhoneCall](https://core.telegram.org/type/InputPhoneCall)       | The call to accept                                                                                  |
|   **g_b**    | [bytes](https://core.telegram.org/type/bytes)                         | [Parameter for E2E encryption key exchange »](https://core.telegram.org/api/end-to-end/voice-calls) |
| **protocol** | [PhoneCallProtocol](https://core.telegram.org/type/PhoneCallProtocol) | Phone call settings                                                                                 |

## Result

[phone.PhoneCall](https://core.telegram.org/type/phone.PhoneCall)

## Possible errors

| Code | Type                        | Description                              |
| :--: | --------------------------- | ---------------------------------------- |
| 400  | CALL_ALREADY_ACCEPTED       | The call was already accepted            |
| 400  | CALL_ALREADY_DECLINED       | The call was already declined            |
| 400  | CALL_PEER_INVALID           | The provided call peer object is invalid |
| 400  | CALL_PROTOCOL_FLAGS_INVALID | Call protocol flags invalid              |

## Can bots use this method?

Yes

## Related pages

#### [End-to-End Encrypted Voice Calls](https://core.telegram.org/api/end-to-end/voice-calls)
