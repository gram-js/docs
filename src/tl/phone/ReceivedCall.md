# phone.ReceivedCall

Optional: notify the server that the user is currently busy in a call: this will automatically refuse all incoming phone calls until the current phone call is ended.



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.phone.ReceivedCall({
    peer: new Api.InputPhoneCall({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
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
    const result: Api.Bool = await client.invoke(new Api.phone.ReceivedCall({
    peer: new Api.InputPhoneCall({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
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
| **peer** | [InputPhoneCall](https://core.telegram.org/type/InputPhoneCall) | The phone call we're currently in 


## Result

[Bool](https://core.telegram.org/type/Bool)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | CALL\_ALREADY\_DECLINED | The call was already declined 
| 400 | CALL\_PEER\_INVALID | The provided call peer object is invalid 


## Can bots use this method?

No

## Related pages


