# InvokeWithLayer

Invoke the specified query using the specified API [layer](https://core.telegram.org/api/invoking#layers)



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.InvokeWithLayer({
    layer: 43,
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
    const result: Api.AnyRequest = await client.invoke(new Api.InvokeWithLayer({
    layer: 43,
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
| **layer** | [int](https://core.telegram.org/type/int) | The layer to use 
| **query** | !X | The query 


## Result

X



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | AUTH\_BYTES\_INVALID | The provided authorization is invalid 
| 400 | CDN\_METHOD\_INVALID | You can't call this method in a CDN DC 
| 403 | CHAT\_WRITE\_FORBIDDEN | You can't write in this chat 
| 400 | CONNECTION\_API\_ID\_INVALID | The provided API id is invalid 
| 400 | CONNECTION\_DEVICE\_MODEL\_EMPTY | Device model empty 
| 400 | CONNECTION\_LANG\_PACK\_INVALID | Language pack invalid 
| 400 | CONNECTION\_NOT\_INITED | Connection not initialized 
| 400 | CONNECTION\_SYSTEM\_EMPTY | Connection system empty 
| 400 | INPUT\_LAYER\_INVALID | The provided layer is invalid 
| 400 | INVITE\_HASH\_EXPIRED | The invite link has expired 


## Can bots use this method?

Yes

## Related pages

#### [Calling API Methods](https://core.telegram.org/api/invoking)

Additional options for calling methods.




