# users.GetFullUser

Returns extended user info by ID.



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.users.GetFullUser({
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
    const result: Api.UserFull = await client.invoke(new Api.users.GetFullUser({
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
| **id** | [InputUser](https://core.telegram.org/type/InputUser) | User ID 


## Result

Returns a [UserFull](https://core.telegram.org/type/UserFull) object containing user info.



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | CHANNEL\_PRIVATE | You haven't joined this channel/supergroup 
| 400 | MSG\_ID\_INVALID | Invalid message ID provided 
| 400 | USER\_ID\_INVALID | The provided user ID is invalid 


## Can bots use this method?

Yes

## Related pages


