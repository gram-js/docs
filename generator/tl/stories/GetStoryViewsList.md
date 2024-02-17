# stories.GetStoryViewsList

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

    const result = await client.invoke(new Api.stories.GetStoryViewsList({
    peer: 'username',
    id: 43,
    offset: 'some string here',
    limit: 100,
    justContacts: true,
    reactionsFirst: true,
    forwardsFirst: true,
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

    const result: Api.stories.StoryViewsList = await client.invoke(new Api.stories.GetStoryViewsList({
    peer: 'username',
    id: 43,
    offset: 'some string here',
    limit: 100,
    justContacts: true,
    reactionsFirst: true,
    forwardsFirst: true,
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

|justContacts|true|No description found
|reactionsFirst|true|No description found
|forwardsFirst|true|No description found
|peer|InputPeer|No description found
|q|string|No description found
|id|int|No description found
|offset|string|No description found
|limit|int|No description found


## Result

stories.StoryViewsList

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages


