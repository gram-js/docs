# help.GetSupportName

Get localized name of the telegram support user



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.help.GetSupportName({}));
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
    const result: Api.help.SupportName = await client.invoke(new Api.help.GetSupportName({}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |


## Result

[help.SupportName](https://core.telegram.org/type/help.SupportName)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 403 | USER\_INVALID | Invalid user provided 


## Can bots use this method?

Yes

## Related pages


