# account.RegisterDevice

Register device to receive [PUSH notifications](https://core.telegram.org/api/push-updates)



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession(''); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    await client.connect() // This assumes you have already authenticated with .start()

    const result = await client.invoke(new Api.account.RegisterDevice({
    tokenType: 43,
    token: 'some string here',
    appSandbox: false,
    secret: Buffer.from('arbitrary data here'),
    otherUids: [BigInt('-4156887774564')],
    noMuted: true
}));
    console.log(result); // prints the result
})();
```
:::

:::tab{title="TypeScript"}
```ts
import {Api, TelegramClient} from 'telegram';
import {StringSession} from 'telegram/sessions';

const session = new StringSession(''); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    await client.connect() // This assumes you have already authenticated with .start()

    const result: Api.Bool = await client.invoke(new Api.account.RegisterDevice({
    tokenType: 43,
    token: 'some string here',
    appSandbox: false,
    secret: Buffer.from('arbitrary data here'),
    otherUids: [BigInt('-4156887774564')],
    noMuted: true
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **flags** | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) 
| **noMuted** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Avoid receiving (silent and invisible background) notifications. Useful to save battery. 
| **tokenType** | [int](https://core.telegram.org/type/int) | Device token type.**Possible values**:`1` - APNS (device token for apple push)`2` - FCM (firebase token for google firebase)`3` - MPNS (channel URI for microsoft push)`4` - Simple push (endpoint for firefox's simple push API)`5` - Ubuntu phone (token for ubuntu push)`6` - Blackberry (token for blackberry push)`7` - Unused`8` - WNS (windows push)`9` - APNS VoIP (token for apple push VoIP)`10` - Web push (web push, see below)`11` - MPNS VoIP (token for microsoft push VoIP)`12` - Tizen (token for tizen push)For `10` web push, the token must be a JSON-encoded object containing the keys described in [PUSH updates](https://core.telegram.org/api/push-updates) 
| **token** | [string](https://core.telegram.org/type/string) | Device token 
| **appSandbox** | [Bool](https://core.telegram.org/type/Bool) | If [(boolTrue)](https://core.telegram.org/constructor/boolTrue) is transmitted, a sandbox-certificate will be used during transmission. 
| **secret** | [bytes](https://core.telegram.org/type/bytes) | For FCM and APNS VoIP, optional encryption key used to encrypt push notifications 
| **otherUids** | [Vector](https://core.telegram.org/type/Vector%20t)<[long](https://core.telegram.org/type/long)> | List of user identifiers of other users currently using the client 


## Result

[Bool](https://core.telegram.org/type/Bool)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | TOKEN\_INVALID | The provided token is invalid. 
| 400 | WEBPUSH\_AUTH\_INVALID | The specified web push authentication secret is invalid. 
| 400 | WEBPUSH\_KEY\_INVALID | The specified web push elliptic curve Diffie-Hellman public key is invalid. 
| 400 | WEBPUSH\_TOKEN\_INVALID | The specified web push token is invalid. 


## Can bots use this method?

No

## Related pages

#### [Handling PUSH-notifications](https://core.telegram.org/api/push-updates)

How to subscribe to and handle PUSH notifications



#### [boolTrue](https://core.telegram.org/constructor/boolTrue)

The constructor can be interpreted as a \*\*boolean\*\*`true` value.




