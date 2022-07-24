# messages.DeleteRevokedExportedChatInvites

Delete all revoked chat invites



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

    const result = await client.invoke(new Api.messages.DeleteRevokedExportedChatInvites({
    peer: 'username',
    adminId: 'username'
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

    const result: Api.Bool = await client.invoke(new Api.messages.DeleteRevokedExportedChatInvites({
    peer: 'username',
    adminId: 'username'
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
| **adminId** | [InputUser](https://core.telegram.org/type/InputUser) | ID of the admin that originally generated the revoked chat invites 


## Result

[Bool](https://core.telegram.org/type/Bool)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages


