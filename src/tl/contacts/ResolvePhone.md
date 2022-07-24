# contacts.ResolvePhone

Resolve a phone number to get user info, if their privacy settings allow it.



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

    const result = await client.invoke(new Api.contacts.ResolvePhone({
    phone: 'some string here'
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

    const result: Api.contacts.ResolvedPeer = await client.invoke(new Api.contacts.ResolvePhone({
    phone: 'some string here'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **phone** | [string](https://core.telegram.org/type/string) | Phone number in international format, possibly obtained from a `t.me/+number` or `tg://resolve?phone=number` URI. 


## Result

[contacts.ResolvedPeer](https://core.telegram.org/type/contacts.ResolvedPeer)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages


