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
    id: 43,
    offsetDate: 43,
    offsetId: BigInt('-4156887774564'),
    limit: 100
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
    id: 43,
    offsetDate: 43,
    offsetId: BigInt('-4156887774564'),
    limit: 100
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

|id|int|No description found
|offsetDate|int|No description found
|offsetId|long|No description found
|limit|int|No description found


## Result

stories.StoryViewsList

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages


