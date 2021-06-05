# messages.RequestUrlAuth

Get more info about a Seamless Telegram Login authorization request, for more info [click here »](https://core.telegram.org/api/url-authorization)



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.RequestUrlAuth({
    peer: 'username',
    msgId: 43,
    buttonId: 43
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
    const result: Api.UrlAuthResult = await client.invoke(new Api.messages.RequestUrlAuth({
    peer: 'username',
    msgId: 43,
    buttonId: 43
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Peer where the message is located 
| **msgId** | [int](https://core.telegram.org/type/int) | The message 
| **buttonId** | [int](https://core.telegram.org/type/int) | The ID of the button with the authorization request 


## Result

[UrlAuthResult](https://core.telegram.org/type/UrlAuthResult)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |


## Can bots use this method?

No

## Related pages

#### [Seamless Telegram Login](https://core.telegram.org/api/url-authorization)

Handle Seamless Telegram Login URL authorization requests.




