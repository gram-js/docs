# contacts.GetBlocked

Returns the list of blocked users.



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.contacts.GetBlocked({
    offset: 43,
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

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.contacts.Blocked = await client.invoke(new Api.contacts.GetBlocked({
    offset: 43,
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
| **offset** | [int](https://core.telegram.org/type/int) | The number of list elements to be skipped 
| **limit** | [int](https://core.telegram.org/type/int) | The number of list elements to be returned 


## Result

[contacts.Blocked](https://core.telegram.org/type/contacts.Blocked)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |


## Can bots use this method?

Yes

## Related pages


