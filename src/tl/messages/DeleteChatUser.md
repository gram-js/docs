# messages.DeleteChatUser

Deletes a user from a chat and sends a service message on it.



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.DeleteChatUser({
    chatId: 43,
    userId: 'username'
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
    const result: Api.Updates = await client.invoke(new Api.messages.DeleteChatUser({
    chatId: 43,
    userId: 'username'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **chatId** | [int](https://core.telegram.org/type/int) | Chat ID 
| **userId** | [InputUser](https://core.telegram.org/type/InputUser) | User ID to be deleted 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | CHAT\_ADMIN\_REQUIRED | You must be an admin in this chat to do this 
| 400 | CHAT\_ID\_INVALID | The provided chat id is invalid 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid 
| 400 | USER\_ID\_INVALID | The provided user ID is invalid 
| 400 | USER\_NOT\_PARTICIPANT | You're not a member of this supergroup/channel 


## Can bots use this method?

Yes

## Related pages


