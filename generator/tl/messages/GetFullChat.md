# messages.GetFullChat

Get full info about a [basic group](https://core.telegram.org/api/channel#basic-groups).



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

    const result = await client.invoke(new Api.messages.GetFullChat({
    chatId: BigInt('-4156887774564')
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

    const result: Api.messages.ChatFull = await client.invoke(new Api.messages.GetFullChat({
    chatId: BigInt('-4156887774564')
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **chatId** | [long](https://core.telegram.org/type/long) | [Basic group](https://core.telegram.org/api/channel#basic-groups) ID. 


## Result

[messages.ChatFull](https://core.telegram.org/type/messages.ChatFull)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | CHAT\_ID\_INVALID | The provided chat id is invalid. 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid. 


## Can bots use this method?

Yes

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.




