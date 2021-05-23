# InvokeWithMessagesRange

Invoke with the given message range



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.InvokeWithMessagesRange({
    range: new Api.MessageRange({
        minId: 0,
        maxId: 0
    }),
    query: new Api.AnyRequest({/*...*/})
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
    const result: Api.AnyRequest = await client.invoke(new Api.InvokeWithMessagesRange({
    range: new Api.MessageRange({
        minId: 0,
        maxId: 0
    }),
    query: new Api.AnyRequest({/*...*/})
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **range** | [MessageRange](https://core.telegram.org/type/MessageRange) | Message range 
| **query** | !X | Query 


## Result

X



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |


## Can bots use this method?

Yes

## Related pages


