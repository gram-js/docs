# contacts.Search

Returns users found by username substring.



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

    const result = await client.invoke(new Api.contacts.Search({
    q: 'some string here',
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

    const result: Api.contacts.Found = await client.invoke(new Api.contacts.Search({
    q: 'some string here',
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

| **q** | [string](https://core.telegram.org/type/string) | Target substring 
| **limit** | [int](https://core.telegram.org/type/int) | Maximum number of users to be returned 


## Result

[contacts.Found](https://core.telegram.org/type/contacts.Found)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | QUERY\_TOO\_SHORT | The query string is too short. 
| 400 | SEARCH\_QUERY\_EMPTY | The search query is empty. 


## Can bots use this method?

No

## Related pages


