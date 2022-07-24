# stickers.CheckShortName

Check whether the given short name is available



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

    const result = await client.invoke(new Api.stickers.CheckShortName({
    shortName: 'some string here'
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

    const result: Api.Bool = await client.invoke(new Api.stickers.CheckShortName({
    shortName: 'some string here'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **shortName** | [string](https://core.telegram.org/type/string) | Short name 


## Result

[Bool](https://core.telegram.org/type/Bool)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | SHORT\_NAME\_INVALID | The specified short name is invalid. 
| 400 | SHORT\_NAME\_OCCUPIED | The specified short name is already in use. 


## Can bots use this method?

No

## Related pages


