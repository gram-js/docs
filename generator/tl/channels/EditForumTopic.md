# channels.EditForumTopic

No description found

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

    const result = await client.invoke(new Api.channels.EditForumTopic({
    channel: 'username',
    topicId: 43,
    title: 'My very normal title',
    iconEmojiId: BigInt('-4156887774564'),
    closed: false,
    hidden: false
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

    const result: Api.Updates = await client.invoke(new Api.channels.EditForumTopic({
    channel: 'username',
    topicId: 43,
    title: 'My very normal title',
    iconEmojiId: BigInt('-4156887774564'),
    closed: false,
    hidden: false
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

|channel|InputChannel|No description found
|topicId|int|No description found
|title|string|No description found
|iconEmojiId|long|No description found
|closed|Bool|No description found
|hidden|Bool|No description found


## Result

Updates

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages


