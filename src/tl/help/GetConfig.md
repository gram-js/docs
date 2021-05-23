# help.GetConfig

Returns current configuration, including data center configuration.



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.help.GetConfig({}));
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
| 400 | CONNECTION\_API\_ID\_INVALID | The provided API id is invalid 
| 400 | CONNECTION\_APP\_VERSION\_EMPTY | App version is empty 
| 400 | CONNECTION\_DEVICE\_MODEL\_EMPTY | Device model empty 
| 400 | CONNECTION\_LANG\_PACK\_INVALID | Language pack invalid 
| 400 | CONNECTION\_LAYER\_INVALID | Layer invalid 
| 400 | CONNECTION\_NOT\_INITED | Connection not initialized 
| 400 | CONNECTION\_SYSTEM\_EMPTY | Connection system empty 
| 400 | CONNECTION\_SYSTEM\_LANG\_CODE\_EMPTY | The system\_lang\_code field is empty 
| 400 | DATA\_INVALID | Encrypted data invalid 
| 400 | INPUT\_LAYER\_INVALID | The provided layer is invalid 
| 400 | MSG\_ID\_INVALID | Invalid message ID provided 


## Can bots use this method?

Yes

## Related pages


