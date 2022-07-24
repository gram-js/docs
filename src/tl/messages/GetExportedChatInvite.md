# messages.GetExportedChatInvite

Get info about a chat invite



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

    const result = await client.invoke(new Api.messages.GetExportedChatInvite({
    peer: 'username',
    link: 'some string here'
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

    const result: Api.messages.ExportedChatInvite = await client.invoke(new Api.messages.GetExportedChatInvite({
    peer: 'username',
    link: 'some string here'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Chat 
| **link** | [string](https://core.telegram.org/type/string) | Invite link 


## Result

[messages.ExportedChatInvite](https://core.telegram.org/type/messages.ExportedChatInvite)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | CHAT\_ADMIN\_REQUIRED | You must be an admin in this chat to do this. 
| 400 | INVITE\_HASH\_EXPIRED | The invite link has expired. 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid. 


## Can bots use this method?

No

## Related pages


