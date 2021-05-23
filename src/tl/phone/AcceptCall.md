# phone.AcceptCall

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
    const result = await client.invoke(new Api.phone.AcceptCall({
    peer: new Api.InputPhoneCall({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    gB: Buffer.from('arbitrary data here'),
    protocol: new Api.PhoneCallProtocol({
        minLayer: 43,
        maxLayer: 43,
        libraryVersions: ['some string here'],
        udpP2p: true,
        udpReflector: true
    })
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
    const result: Api.phone.PhoneCall = await client.invoke(new Api.phone.AcceptCall({
    peer: new Api.InputPhoneCall({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    gB: Buffer.from('arbitrary data here'),
    protocol: new Api.PhoneCallProtocol({
        minLayer: 43,
        maxLayer: 43,
        libraryVersions: ['some string here'],
        udpP2p: true,
        udpReflector: true
    })
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **peer** | [InputPhoneCall](https://core.telegram.org/type/InputPhoneCall) | The call to accept 
| **gB** | [bytes](https://core.telegram.org/type/bytes) | [Parameter for E2E encryption key exchange »](https://core.telegram.org/api/end-to-end/voice-calls) 
| **protocol** | [PhoneCallProtocol](https://core.telegram.org/type/PhoneCallProtocol) | Phone call settings 


## Result

[phone.PhoneCall](https://core.telegram.org/type/phone.PhoneCall)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | CALL\_ALREADY\_ACCEPTED | The call was already accepted 
| 400 | CALL\_ALREADY\_DECLINED | The call was already declined 
| 400 | CALL\_PEER\_INVALID | The provided call peer object is invalid 
| 400 | CALL\_PROTOCOL\_FLAGS\_INVALID | Call protocol flags invalid 


## Can bots use this method?

Yes

## Related pages

#### [End-to-End Encrypted Voice Calls](https://core.telegram.org/api/end-to-end/voice-calls)


