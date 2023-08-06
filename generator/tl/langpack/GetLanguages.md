# langpack.GetLanguages

Get information about all languages in a localization pack



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

    const result = await client.invoke(new Api.langpack.GetLanguages({
    langPack: 'some string here'
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

    const result: Api.Vector<LangPackLanguage> = await client.invoke(new Api.langpack.GetLanguages({
    langPack: 'some string here'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **langPack** | [string](https://core.telegram.org/type/string) | Language pack 


## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[LangPackLanguage](https://core.telegram.org/type/LangPackLanguage)>



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | LANG\_PACK\_INVALID | The provided language pack is invalid. 


## Can bots use this method?

No

## Related pages


