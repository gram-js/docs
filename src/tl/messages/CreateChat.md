# messages.CreateChat

Creates a new chat.



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.CreateChat({
    users: ['username'],
    title: 'My very normal title'
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
    const result: Api.Updates = await client.invoke(new Api.messages.CreateChat({
    users: ['username'],
    title: 'My very normal title'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **users** | [Vector](https://core.telegram.org/type/Vector%20t)<[InputUser](https://core.telegram.org/type/InputUser)> | List of user IDs to be invited 
| **title** | [string](https://core.telegram.org/type/string) | Chat name 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | CHAT\_INVALID | Invalid chat 
| 400 | CHAT\_TITLE\_EMPTY | No chat title provided 
| 400 | INPUT\_USER\_DEACTIVATED | The specified user was deleted 
| 400 | USERS\_TOO\_FEW | Not enough users (to create a chat, for example) 
| 403 | USER\_RESTRICTED | You're spamreported, you can't create channels or chats. 


## Can bots use this method?

No

## Related pages


