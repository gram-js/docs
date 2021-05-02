# langpack.getLanguage

Get information about a language in a localization pack

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(
        new Api.langpack.getLanguage({
            langPack: 'random string here',
            langCode: 'random string here',
        }),
    );
    console.log(result); // prints the result
})();
```

:::

:::tab{title="TypeScript"}

```ts
import { Api, TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.LangPackLanguage = await client.invoke(
        new Api.langpack.getLanguage({
            langPack: 'random string here',
            langCode: 'random string here',
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
langPackLanguage#eeca5ce3 flags:# official:flags.0?true rtl:flags.2?true beta:flags.3?true name:string native_name:string lang_code:string base_lang_code:flags.1?string plural_code:string strings_count:int translated_count:int translations_url:string = LangPackLanguage;
---functions---
langpack.getLanguage#6a596502 lang_pack:string lang_code:string = LangPackLanguage;
```

## Parameters

|     Name      | Type                                            | Description        |
| :-----------: | ----------------------------------------------- | ------------------ |
| **lang_pack** | [string](https://core.telegram.org/type/string) | Language pack name |
| **lang_code** | [string](https://core.telegram.org/type/string) | Language code      |

## Result

[LangPackLanguage](https://core.telegram.org/type/LangPackLanguage)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
