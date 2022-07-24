# messages.EditChatAbout

Edit the description of a [group/supergroup/channel](https://core.telegram.org/api/channel).



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

    const result = await client.invoke(new Api.messages.EditChatAbout({
    peer: 'username',
    about: 'some string here'
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

    const result: Api.Bool = await client.invoke(new Api.messages.EditChatAbout({
    peer: 'username',
    about: 'some string here'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | The [group/supergroup/channel](https://core.telegram.org/api/channel). 
| **about** | [string](https://core.telegram.org/type/string) | The new description 


## Result

[Bool](https://core.telegram.org/type/Bool)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | CHANNEL\_INVALID | The provided channel is invalid. 
| 400 | CHANNEL\_PRIVATE | You haven't joined this channel/supergroup. 
| 400 | CHAT\_ABOUT\_NOT\_MODIFIED | About text has not changed. 
| 400 | CHAT\_ABOUT\_TOO\_LONG | Chat about too long. 
| 400 | CHAT\_ADMIN\_REQUIRED | You must be an admin in this chat to do this. 
| 400 | CHAT\_ID\_INVALID | The provided chat id is invalid. 
| 400 | CHAT\_NOT\_MODIFIED | The pinned message wasn't modified. 
| 403 | CHAT\_WRITE\_FORBIDDEN | You can't write in this chat. 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid. 


## Can bots use this method?

Yes

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.




