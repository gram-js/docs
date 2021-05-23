# messages.ImportChatInvite

Import a chat invite and join a private chat/supergroup/channel



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.ImportChatInvite({
    hash: 'B5MnlS34H1JKyBE71zZfo1'
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
    const result: Api.Updates = await client.invoke(new Api.messages.ImportChatInvite({
    hash: 'B5MnlS34H1JKyBE71zZfo1'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **hash** | [string](https://core.telegram.org/type/string) | hash from t.me/joinchat/hash 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | CHANNELS\_TOO\_MUCH | You have joined too many channels/supergroups 
| 400 | CHANNEL\_INVALID | The provided channel is invalid 
| 400 | CHANNEL\_PRIVATE | You haven't joined this channel/supergroup 
| 400 | INVITE\_HASH\_EMPTY | The invite hash is empty 
| 400 | INVITE\_HASH\_EXPIRED | The invite link has expired 
| 400 | INVITE\_HASH\_INVALID | The invite hash is invalid 
| 400 | MSG\_ID\_INVALID | Invalid message ID provided 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid 
| 400 | USERS\_TOO\_MUCH | The maximum number of users has been exceeded (to create a chat, for example) 
| 400 | USER\_ALREADY\_PARTICIPANT | The user is already in the group 
| 400 | USER\_CHANNELS\_TOO\_MUCH | One of the users you tried to add is already in too many channels/supergroups 


## Can bots use this method?

Yes

## Related pages


