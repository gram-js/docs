# stats.GetBroadcastStats

Get [channel statistics](https://core.telegram.org/api/stats)



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.stats.GetBroadcastStats({
    channel: 'username',
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
    const result: Api.stats.BroadcastStats = await client.invoke(new Api.stats.GetBroadcastStats({
    channel: 'username',
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
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel) | The channel 


## Result

[stats.BroadcastStats](https://core.telegram.org/type/stats.BroadcastStats)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | BROADCAST\_REQUIRED | This method can only be called on a channel, please use stats.getMegagroupStats for supergroups 
| 400 | CHANNEL\_INVALID | The provided channel is invalid 
| 400 | CHANNEL\_PRIVATE | You haven't joined this channel/supergroup 
| 400 | CHAT\_ADMIN\_REQUIRED | You must be an admin in this chat to do this 


## Can bots use this method?

Yes

## Related pages

#### [Channel statistics](https://core.telegram.org/api/stats)

Telegram offers detailed channel statistics for channels and supergroups.




