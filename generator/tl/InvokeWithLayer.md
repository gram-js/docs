# InvokeWithLayer

Invoke the specified query using the specified API [layer](https://core.telegram.org/api/invoking#layers)



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

const session = new StringSession(''); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    await client.connect() // This assumes you have already authenticated with .start()

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

| 400 | AUTH\_BYTES\_INVALID | The provided authorization is invalid. 
| 400 | CDN\_METHOD\_INVALID | You can't call this method in a CDN DC. 
| 403 | CHAT\_WRITE\_FORBIDDEN | You can't write in this chat. 
| 400 | CONNECTION\_API\_ID\_INVALID | The provided API id is invalid. 
| 400 | INVITE\_HASH\_EXPIRED | The invite link has expired. 


## Can bots use this method?

Yes

## Related pages

#### [Calling API Methods](https://core.telegram.org/api/invoking)

Additional options for calling methods.




