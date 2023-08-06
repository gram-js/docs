# account.UnregisterDevice

Deletes a device by its token, stops sending PUSH-notifications to it.



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

    const result = await client.invoke(new Api.account.UnregisterDevice({
    tokenType: 43,
    token: 'some string here',
    otherUids: [BigInt('-4156887774564')]
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

    const result: Api.Bool = await client.invoke(new Api.account.UnregisterDevice({
    tokenType: 43,
    token: 'some string here',
    otherUids: [BigInt('-4156887774564')]
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **tokenType** | [int](https://core.telegram.org/type/int) | Device token type.**Possible values**:`1` - APNS (device token for apple push)`2` - FCM (firebase token for google firebase)`3` - MPNS (channel URI for microsoft push)`4` - Simple push (endpoint for firefox's simple push API)`5` - Ubuntu phone (token for ubuntu push)`6` - Blackberry (token for blackberry push)`7` - Unused`8` - WNS (windows push)`9` - APNS VoIP (token for apple push VoIP)`10` - Web push (web push, see below)`11` - MPNS VoIP (token for microsoft push VoIP)`12` - Tizen (token for tizen push)For `10` web push, the token must be a JSON-encoded object containing the keys described in [PUSH updates](https://core.telegram.org/api/push-updates) 
| **token** | [string](https://core.telegram.org/type/string) | Device token 
| **otherUids** | [Vector](https://core.telegram.org/type/Vector%20t)<[long](https://core.telegram.org/type/long)> | List of user identifiers of other users currently using the client 


## Result

[Bool](https://core.telegram.org/type/Bool)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | TOKEN\_INVALID | The provided token is invalid. 


## Can bots use this method?

No

## Related pages

#### [Handling PUSH-notifications](https://core.telegram.org/api/push-updates)

How to subscribe to and handle PUSH notifications




