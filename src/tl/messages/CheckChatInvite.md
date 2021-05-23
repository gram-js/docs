# messages.CheckChatInvite

Check the validity of a chat invite link and get basic info about it



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.CheckChatInvite({
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
    const result: Api.ChatInvite = await client.invoke(new Api.messages.CheckChatInvite({
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
| **hash** | [string](https://core.telegram.org/type/string) | Invite hash in t.me/joinchat/hash 


## Result

[ChatInvite](https://core.telegram.org/type/ChatInvite)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | INVITE\_HASH\_EMPTY | The invite hash is empty 
| 400 | INVITE\_HASH\_EXPIRED | The invite link has expired 
| 400 | INVITE\_HASH\_INVALID | The invite hash is invalid 


## Can bots use this method?

Yes

## Related pages


