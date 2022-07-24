# channels.GetGroupsForDiscussion

Get all groups that can be used as [discussion groups](https://core.telegram.org/api/discussion).



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

    const result = await client.invoke(new Api.channels.GetGroupsForDiscussion({}));
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

    const result: Api.messages.Chats = await client.invoke(new Api.channels.GetGroupsForDiscussion({}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |



## Result

[messages.Chats](https://core.telegram.org/type/messages.Chats)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages

#### [Discussion groups](https://core.telegram.org/api/discussion)

[Groups](https://core.telegram.org/api/channel) can be associated to a [channel](https://core.telegram.org/api/channel) as a [discussion group](https://telegram.org/blog/privacy-discussions-web-bots), to allow users to discuss about posts.



#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.



#### [channels.togglePreHistoryHidden](https://core.telegram.org/method/channels.togglePreHistoryHidden)

Hide/unhide message history for new channel/supergroup users




