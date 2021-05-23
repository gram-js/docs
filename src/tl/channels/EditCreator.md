# channels.EditCreator

Transfer channel ownership



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.channels.EditCreator({
    channel: 'username',
    userId: 'username',
    password: new Api.InputCheckPasswordSRP({
        srpId: BigInt('-4156887774564'),
        a: Buffer.from('arbitrary data here'),
        m1: Buffer.from('arbitrary data here')
    })
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
    const result: Api.Updates = await client.invoke(new Api.channels.EditCreator({
    channel: 'username',
    userId: 'username',
    password: new Api.InputCheckPasswordSRP({
        srpId: BigInt('-4156887774564'),
        a: Buffer.from('arbitrary data here'),
        m1: Buffer.from('arbitrary data here')
    })
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel) | Channel 
| **userId** | [InputUser](https://core.telegram.org/type/InputUser) | New channel owner 
| **password** | [InputCheckPasswordSRP](https://core.telegram.org/type/InputCheckPasswordSRP) | [2FA password](https://core.telegram.org/api/srp) of account 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | CHANNEL\_PRIVATE | You haven't joined this channel/supergroup 
| 400 | CHAT\_ADMIN\_REQUIRED | You must be an admin in this chat to do this 
| 400 | PASSWORD\_HASH\_INVALID | The provided password hash is invalid 
| 400 | PASSWORD\_MISSING | You must enable 2FA in order to transfer ownership of a channel 
| 400 | PASSWORD\_TOO\_FRESH\_X | The password was modified less than 24 hours ago, try again in X seconds 
| 400 | SESSION\_TOO\_FRESH\_X | This session was created less than 24 hours ago, try again in X seconds 
| 400 | USER\_ID\_INVALID | The provided user ID is invalid 


## Can bots use this method?

Yes

## Related pages

#### [Two-factor authentication](https://core.telegram.org/api/srp)

How to login to a user's account if they have enabled 2FA, how to change password.




