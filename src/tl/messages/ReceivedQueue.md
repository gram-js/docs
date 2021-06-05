# messages.ReceivedQueue

Confirms receipt of messages in a secret chat by client, cancels push notifications.



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.ReceivedQueue({
    maxQts: 43
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
    const result: Api.Vector<long> = await client.invoke(new Api.messages.ReceivedQueue({
    maxQts: 43
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **maxQts** | [int](https://core.telegram.org/type/int) | Maximum qts value available at the client 


## Result

Method returns a list of **random\_id**s of messages for which push notifications were cancelled in [Vector](https://core.telegram.org/type/Vector%20t)<[long](https://core.telegram.org/type/long)>.



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | MSG\_WAIT\_FAILED | A waiting call returned an error 


## Can bots use this method?

No

## Related pages


