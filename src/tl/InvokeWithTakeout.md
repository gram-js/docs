# InvokeWithTakeout

Invoke a method within a takeout session



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.InvokeWithTakeout({
    takeoutId: BigInt('-4156887774564'),
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
    const result: Api.AnyRequest = await client.invoke(new Api.InvokeWithTakeout({
    takeoutId: BigInt('-4156887774564'),
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
| **takeoutId** | [long](https://core.telegram.org/type/long) | Takeout session ID 
| **query** | !X | Query 


## Result

X



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | INPUT\_METHOD\_INVALID\_1400137063\_X | Invalid method 


## Can bots use this method?

Yes

## Related pages


