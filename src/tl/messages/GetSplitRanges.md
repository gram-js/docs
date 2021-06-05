# messages.GetSplitRanges

Get message ranges for saving the user's chat history



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.GetSplitRanges({}));
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
    const result: Api.Vector<MessageRange> = await client.invoke(new Api.messages.GetSplitRanges({}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |


## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[MessageRange](https://core.telegram.org/type/MessageRange)>



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |


## Can bots use this method?

No

## Related pages


