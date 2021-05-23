# stats.GetMessageStats

Get [message statistics](https://core.telegram.org/api/stats)



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.stats.GetMessageStats({
    channel: 'username',
    msgId: 43,
    dark: true
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
    const result: Api.stats.MessageStats = await client.invoke(new Api.stats.GetMessageStats({
    channel: 'username',
    msgId: 43,
    dark: true
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **flags** | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) 
| **dark** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Whether to enable dark theme for graph colors 
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel) | Channel ID 
| **msgId** | [int](https://core.telegram.org/type/int) | Message ID 


## Result

[stats.MessageStats](https://core.telegram.org/type/stats.MessageStats)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | CHAT\_ADMIN\_REQUIRED | You must be an admin in this chat to do this 


## Can bots use this method?

Yes

## Related pages

#### [Channel statistics](https://core.telegram.org/api/stats)

Telegram offers detailed channel statistics for channels and supergroups.




