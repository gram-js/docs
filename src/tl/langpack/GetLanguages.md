# langpack.GetLanguages

Get information about all languages in a localization pack



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
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

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
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
| 400 | LANG\_PACK\_INVALID | The provided language pack is invalid 


## Can bots use this method?

Yes

## Related pages


