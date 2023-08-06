# help.GetConfig

Returns current configuration, including data center configuration.



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

    const result = await client.invoke(new Api.help.GetConfig({}));
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

    const result: Api.Config = await client.invoke(new Api.help.GetConfig({}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |



## Result

[Config](https://core.telegram.org/type/Config)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | CONNECTION\_API\_ID\_INVALID | The provided API id is invalid. 
| 400 | CONNECTION\_APP\_VERSION\_EMPTY | App version is empty. 
| 400 | CONNECTION\_LAYER\_INVALID | Layer invalid. 
| 400 | DATA\_INVALID | Encrypted data invalid. 
| 400 | MSG\_ID\_INVALID | Invalid message ID provided. 
| 400 | USERNAME\_INVALID | The provided username is not valid. 
| 403 | USER\_PRIVACY\_RESTRICTED | The user's privacy settings do not allow you to do this. 


## Can bots use this method?

Yes

## Related pages


