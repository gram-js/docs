# contacts.AcceptContact

If the [peer settings](https://core.telegram.org/constructor/peerSettings) of a new user allow us to add him as contact, add that user as contact



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.contacts.AcceptContact({
    id: 'username'
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
    const result: Api.Updates = await client.invoke(new Api.contacts.AcceptContact({
    id: 'username'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **id** | [InputUser](https://core.telegram.org/type/InputUser) | The user to add as contact 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | CONTACT\_ADD\_MISSING | Contact to add is missing 
| 400 | CONTACT\_ID\_INVALID | The provided contact ID is invalid 
| 400 | CONTACT\_REQ\_MISSING | Missing contact request 


## Can bots use this method?

Yes

## Related pages

#### [peerSettings](https://core.telegram.org/constructor/peerSettings)

Peer settings



