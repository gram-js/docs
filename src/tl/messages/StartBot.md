# messages.StartBot

Start a conversation with a bot using a [deep linking parameter](https://core.telegram.org/bots#deep-linking)



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.StartBot({
    bot: 'username',
    peer: 'username',
    randomId: BigInt('-4156887774564'),
    startParam: 'some string here'
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
    const result: Api.Updates = await client.invoke(new Api.messages.StartBot({
    bot: 'username',
    peer: 'username',
    randomId: BigInt('-4156887774564'),
    startParam: 'some string here'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **bot** | [InputUser](https://core.telegram.org/type/InputUser) | The bot 
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | The chat where to start the bot, can be the bot's private chat or a group 
| **randomId** | [long](https://core.telegram.org/type/long) | Random ID to avoid resending the same message 
| **startParam** | [string](https://core.telegram.org/type/string) | [Deep linking parameter](https://core.telegram.org/bots#deep-linking) 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | BOT\_INVALID | This is not a valid bot 
| 400 | INPUT\_USER\_DEACTIVATED | The specified user was deleted 
| 400 | MSG\_ID\_INVALID | Invalid message ID provided 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid 
| 400 | START\_PARAM\_EMPTY | The start parameter is empty 
| 400 | START\_PARAM\_INVALID | Start parameter invalid 
| 400 | START\_PARAM\_TOO\_LONG | Start parameter is too long 


## Can bots use this method?

Yes

## Related pages

#### [Bots: An introduction for developers](https://core.telegram.org/bots)


