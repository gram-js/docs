# account.UpdateStatus

Updates online user status.



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.UpdateStatus({
    offline: false
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
    const result: Api.Bool = await client.invoke(new Api.account.UpdateStatus({
    offline: false
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **offline** | [Bool](https://core.telegram.org/type/Bool) | If [(boolTrue)](https://core.telegram.org/constructor/boolTrue) is transmitted, user status will change to [(userStatusOffline)](https://core.telegram.org/constructor/userStatusOffline). 


## Result

[Bool](https://core.telegram.org/type/Bool)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |


## Can bots use this method?

Yes

## Related pages

#### [boolTrue](https://core.telegram.org/constructor/boolTrue)

The constructor can be interpreted as a **boolean**true value.



#### [userStatusOffline](https://core.telegram.org/constructor/userStatusOffline)

The user's offline status.




