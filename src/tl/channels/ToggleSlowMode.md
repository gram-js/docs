# channels.ToggleSlowMode

Toggle supergroup slow mode: if enabled, users will only be able to send one message every seconds seconds



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.channels.ToggleSlowMode({
    channel: 'username',
    seconds: 43
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
    const result: Api.Updates = await client.invoke(new Api.channels.ToggleSlowMode({
    channel: 'username',
    seconds: 43
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel) | The [supergroup](https://core.telegram.org/api/channel) 
| **seconds** | [int](https://core.telegram.org/type/int) | Users will only be able to send one message every seconds seconds, 0 to disable the limitation 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | CHAT\_ADMIN\_REQUIRED | You must be an admin in this chat to do this 
| 400 | CHAT\_NOT\_MODIFIED | The pinned message wasn't modified 
| 400 | INPUT\_METHOD\_INVALID\_1192227\_X | Invalid method 
| 400 | INPUT\_METHOD\_INVALID\_1604042050\_X | Invalid method 
| 400 | SECONDS\_INVALID | Invalid duration provided 


## Can bots use this method?

Yes

## Related pages

#### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.




