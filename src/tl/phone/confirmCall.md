# phone.confirmCall

[Complete phone call E2E encryption key exchange »](https://core.telegram.org/api/end-to-end/voice-calls)

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.phone.confirmCall({
		peer: new Api.InputPhoneCall({...}),
		gA: Buffer.from('some bytes here'),
		keyFingerprint: 8851789,
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
    const result: Api.phone.PhoneCall = await client.invoke(new Api.phone.confirmCall({
		peer: new Api.InputPhoneCall({...}),
		gA: Buffer.from('some bytes here'),
		keyFingerprint: 8851789,
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
phone.confirmCall#2efe1722 peer:InputPhoneCall g_a:bytes key_fingerprint:long protocol:PhoneCallProtocol = phone.PhoneCall;
```

## Parameters

|        Name         | Type                                                                  | Description                                                                                         |
| :-----------------: | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|      **peer**       | [InputPhoneCall](https://core.telegram.org/type/InputPhoneCall)       | The phone call                                                                                      |
|       **g_a**       | [bytes](https://core.telegram.org/type/bytes)                         | [Parameter for E2E encryption key exchange »](https://core.telegram.org/api/end-to-end/voice-calls) |
| **key_fingerprint** | [long](https://core.telegram.org/type/long)                           | Key fingerprint                                                                                     |
|    **protocol**     | [PhoneCallProtocol](https://core.telegram.org/type/PhoneCallProtocol) | Phone call settings                                                                                 |

## Result

[phone.PhoneCall](https://core.telegram.org/type/phone.PhoneCall)

## Possible errors

| Code | Type                  | Description                              |
| :--: | --------------------- | ---------------------------------------- |
| 400  | CALL_ALREADY_DECLINED | The call was already declined            |
| 400  | CALL_PEER_INVALID     | The provided call peer object is invalid |

## Can bots use this method?

Yes

## Related pages

#### [End-to-End Encrypted Voice Calls](https://core.telegram.org/api/end-to-end/voice-calls)
