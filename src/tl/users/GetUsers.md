# users.GetUsers

Returns basic user info according to their identifiers.



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.users.GetUsers({
    id: ['username']
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
    const result: Api.Vector<User> = await client.invoke(new Api.users.GetUsers({
    id: ['username']
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **id** | [Vector](https://core.telegram.org/type/Vector%20t)<[InputUser](https://core.telegram.org/type/InputUser)> | List of user identifiers 


## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[User](https://core.telegram.org/type/User)>



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 401 | AUTH\_KEY\_PERM\_EMPTY | The temporary auth key must be binded to the permanent auth key to use these methods. 
| 400 | CHANNEL\_PRIVATE | You haven't joined this channel/supergroup 
| 400 | CONNECTION\_NOT\_INITED | Connection not initialized 
| 400 | INPUT\_LAYER\_INVALID | The provided layer is invalid 
| 400 | MSG\_ID\_INVALID | Invalid message ID provided 


## Can bots use this method?

Yes

## Related pages


