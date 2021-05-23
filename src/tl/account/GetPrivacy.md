# account.GetPrivacy

Get privacy settings of current account



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.GetPrivacy({
    key: new Api.InputPrivacyKeyStatusTimestamp({})
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
    const result: Api.account.PrivacyRules = await client.invoke(new Api.account.GetPrivacy({
    key: new Api.InputPrivacyKeyStatusTimestamp({})
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **key** | [InputPrivacyKey](https://core.telegram.org/type/InputPrivacyKey) | Peer category whose privacy settings should be fetched 


## Result

[account.PrivacyRules](https://core.telegram.org/type/account.PrivacyRules)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | PRIVACY\_KEY\_INVALID | The privacy key is invalid 


## Can bots use this method?

Yes

## Related pages


