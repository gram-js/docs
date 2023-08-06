# channels.GetForumTopics

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

    const result = await client.invoke(new Api.channels.GetForumTopics({
    channel: 'username',
    offsetDate: 43,
    offsetId: 43,
    offsetTopic: 43,
    limit: 100,
    q: 'some string here'
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

    const result: Api.messages.ForumTopics = await client.invoke(new Api.channels.GetForumTopics({
    channel: 'username',
    offsetDate: 43,
    offsetId: 43,
    offsetTopic: 43,
    limit: 100,
    q: 'some string here'
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
|q|string|No description found
|offsetDate|int|No description found
|offsetId|int|No description found
|offsetTopic|int|No description found
|limit|int|No description found


## Result

messages.ForumTopics

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages


