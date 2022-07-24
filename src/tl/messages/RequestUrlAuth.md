# messages.RequestUrlAuth

Get more info about a Seamless Telegram Login authorization request, for more info [click here »](https://core.telegram.org/api/url-authorization)



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

    const result = await client.invoke(new Api.messages.RequestUrlAuth({
    peer: 'username',
    msgId: 43,
    buttonId: 43,
    url: 'some string here'
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

    const result: Api.UrlAuthResult = await client.invoke(new Api.messages.RequestUrlAuth({
    peer: 'username',
    msgId: 43,
    buttonId: 43,
    url: 'some string here'
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
| **peer** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[InputPeer](https://core.telegram.org/type/InputPeer) | Peer where the message is located 
| **msgId** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](https://core.telegram.org/type/int) | The message 
| **buttonId** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](https://core.telegram.org/type/int) | The ID of the button with the authorization request 
| **url** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](https://core.telegram.org/type/string) | URL used for [link URL authorization, click here for more info »](https://core.telegram.org/api/url-authorization#link-url-authorization) 


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




