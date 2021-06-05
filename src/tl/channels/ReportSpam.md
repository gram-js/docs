# channels.ReportSpam

Reports some messages from a user in a supergroup as spam; requires administrator rights in the supergroup



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.channels.ReportSpam({
    channel: 'username',
    userId: 'username',
    id: [43]
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
    const result: Api.Bool = await client.invoke(new Api.channels.ReportSpam({
    channel: 'username',
    userId: 'username',
    id: [43]
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel) | Supergroup 
| **userId** | [InputUser](https://core.telegram.org/type/InputUser) | ID of the user that sent the spam messages 
| **id** | [Vector](https://core.telegram.org/type/Vector%20t)<[int](https://core.telegram.org/type/int)> | IDs of spam messages 


## Result

[Bool](https://core.telegram.org/type/Bool)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | CHANNEL\_INVALID | The provided channel is invalid 
| 400 | CHAT\_ADMIN\_REQUIRED | You must be an admin in this chat to do this 
| 400 | INPUT\_USER\_DEACTIVATED | The specified user was deleted 
| 400 | USER\_ID\_INVALID | The provided user ID is invalid 


## Can bots use this method?

No

## Related pages


