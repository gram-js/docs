# messages.AddChatUser

Adds a user to a chat and sends a service message on it.



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

    const result = await client.invoke(new Api.messages.AddChatUser({
    chatId: BigInt('-4156887774564'),
    userId: 'username',
    fwdLimit: 43
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

    const result: Api.Updates = await client.invoke(new Api.messages.AddChatUser({
    chatId: BigInt('-4156887774564'),
    userId: 'username',
    fwdLimit: 43
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **chatId** | [long](https://core.telegram.org/type/long) | Chat ID 
| **userId** | [InputUser](https://core.telegram.org/type/InputUser) | User ID to be added 
| **fwdLimit** | [int](https://core.telegram.org/type/int) | Number of last messages to be forwarded 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | CHAT\_ADMIN\_REQUIRED | You must be an admin in this chat to do this. 
| 400 | CHAT\_ID\_INVALID | The provided chat id is invalid. 
| 403 | CHAT\_WRITE\_FORBIDDEN | You can't write in this chat. 
| 400 | INPUT\_USER\_DEACTIVATED | The specified user was deleted. 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid. 
| 400 | USERS\_TOO\_MUCH | The maximum number of users has been exceeded (to create a chat, for example). 
| 400 | USER\_ALREADY\_PARTICIPANT | The user is already in the group. 
| 400 | USER\_ID\_INVALID | The provided user ID is invalid. 
| 400 | USER\_IS\_BLOCKED | You were blocked by this user. 
| 403 | USER\_NOT\_MUTUAL\_CONTACT | The provided user is not a mutual contact. 
| 403 | USER\_PRIVACY\_RESTRICTED | The user's privacy settings do not allow you to do this. 
| 400 | YOU\_BLOCKED\_USER | You blocked this user. 


## Can bots use this method?

No

## Related pages


