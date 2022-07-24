# phone.JoinGroupCallPresentation

Start screen sharing in a call



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

    const result = await client.invoke(new Api.phone.JoinGroupCallPresentation({
    call: new Api.InputGroupCall({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    params: new Api.DataJSON({
        data: 'some string here'
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

const session = new StringSession(''); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    await client.connect() // This assumes you have already authenticated with .start()

    const result: Api.Updates = await client.invoke(new Api.phone.JoinGroupCallPresentation({
    call: new Api.InputGroupCall({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    params: new Api.DataJSON({
        data: 'some string here'
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

| **call** | [InputGroupCall](https://core.telegram.org/type/InputGroupCall) | The group call 
| **params** | [DataJSON](https://core.telegram.org/type/DataJSON) | WebRTC parameters 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 403 | PARTICIPANT\_JOIN\_MISSING | Trying to enable a presentation, when the user hasn't joined the Video Chat with [phone.joinGroupCall](https://core.telegram.org/method/phone.joinGroupCall). 


## Can bots use this method?

No

## Related pages

#### [phone.joinGroupCall](https://core.telegram.org/method/phone.joinGroupCall)

Join a group call




