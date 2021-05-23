# contacts.ResolveUsername

Resolve a @username to get peer info



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.contacts.ResolveUsername({
    username: 'some string here'
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
    const result: Api.contacts.ResolvedPeer = await client.invoke(new Api.contacts.ResolveUsername({
    username: 'some string here'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **username** | [string](https://core.telegram.org/type/string) | @username to resolve 


## Result

[contacts.ResolvedPeer](https://core.telegram.org/type/contacts.ResolvedPeer)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 401 | AUTH\_KEY\_PERM\_EMPTY | The temporary auth key must be binded to the permanent auth key to use these methods. 
| 400 | CONNECTION\_DEVICE\_MODEL\_EMPTY | Device model empty 
| 400 | CONNECTION\_LAYER\_INVALID | Layer invalid 
| 400 | USERNAME\_INVALID | The provided username is not valid 
| 400 | USERNAME\_NOT\_OCCUPIED | The provided username is not occupied 


## Can bots use this method?

Yes

## Related pages


