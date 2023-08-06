# messages.SetChatTheme

Change the chat theme of a certain chat



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

    const result = await client.invoke(new Api.messages.SetChatTheme({
    peer: 'username',
    emoticon: 'some string here'
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

    const result: Api.Updates = await client.invoke(new Api.messages.SetChatTheme({
    peer: 'username',
    emoticon: 'some string here'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Private chat where to change theme 
| **emoticon** | [string](https://core.telegram.org/type/string) | Emoji, identifying a specific chat theme; a list of chat themes can be fetched using [account.getChatThemes](https://core.telegram.org/method/account.getChatThemes) 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | EMOJI\_INVALID | The specified theme emoji is valid. 
| 400 | EMOJI\_NOT\_MODIFIED | The theme wasn't changed. 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid. 


## Can bots use this method?

No

## Related pages

#### [account.getChatThemes](https://core.telegram.org/method/account.getChatThemes)

Get all available chat themes




