# account.ResetAuthorization

Terminates all user's authorized sessions except for the current one.



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

    const result = await client.invoke(new Api.account.ResetAuthorization({
    hash: BigInt('-4156887774564')
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

    const result: Api.Bool = await client.invoke(new Api.account.ResetAuthorization({
    hash: BigInt('-4156887774564')
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

|hash|long|No description found


## Result

[Bool](https://core.telegram.org/type/Bool)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 406 | FRESH\_RESET\_AUTHORISATION\_FORBIDDEN | You can't logout other sessions if less than 24 hours have passed since you logged on the current session. 


## Can bots use this method?

No

## Related pages

#### [account.registerDevice](https://core.telegram.org/method/account.registerDevice)

Register device to receive [PUSH notifications](https://core.telegram.org/api/push-updates)




