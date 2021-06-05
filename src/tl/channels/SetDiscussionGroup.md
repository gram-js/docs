# channels.SetDiscussionGroup

Associate a group to a channel as [discussion group](https://core.telegram.org/api/discussion) for that channel



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.channels.SetDiscussionGroup({
    broadcast: 'username',
    group: 'username'
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
    const result: Api.Bool = await client.invoke(new Api.channels.SetDiscussionGroup({
    broadcast: 'username',
    group: 'username'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **broadcast** | [InputChannel](https://core.telegram.org/type/InputChannel) | Channel 
| **group** | [InputChannel](https://core.telegram.org/type/InputChannel) | [Discussion group](https://core.telegram.org/api/discussion) to associate to the channel 


## Result

[Bool](https://core.telegram.org/type/Bool)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | BROADCAST\_ID\_INVALID | Broadcast ID invalid 
| 400 | LINK\_NOT\_MODIFIED | Discussion link not modified 
| 400 | MEGAGROUP\_ID\_INVALID | Invalid supergroup ID 


## Can bots use this method?

No

## Related pages

#### [Discussion groups](https://core.telegram.org/api/discussion)

[Groups](https://core.telegram.org/api/channel) can be associated to a [channel](https://core.telegram.org/api/channel) as a [discussion group](https://telegram.org/blog/privacy-discussions-web-bots), to allow users to discuss about posts.




