# langpack.GetLanguage

Get information about a language in a localization pack



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.langpack.GetLanguage({
    langPack: 'some string here',
    langCode: 'some string here'
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
    const result: Api.LangPackLanguage = await client.invoke(new Api.langpack.GetLanguage({
    langPack: 'some string here',
    langCode: 'some string here'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **langPack** | [string](https://core.telegram.org/type/string) | Language pack name 
| **langCode** | [string](https://core.telegram.org/type/string) | Language code 


## Result

[LangPackLanguage](https://core.telegram.org/type/LangPackLanguage)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |


## Can bots use this method?

No

## Related pages


