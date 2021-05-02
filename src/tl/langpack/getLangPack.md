# langpack.getLangPack

Get localization pack strings

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
        new Api.langpack.getLangPack({
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
    const result: Api.LangPackDifference = await client.invoke(
        new Api.langpack.getLangPack({
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

```
langPackDifference#f385c1f6 lang_code:string from_version:int version:int strings:Vector<LangPackString> = LangPackDifference;
---functions---
langpack.getLangPack#f2f2330a lang_pack:string lang_code:string = LangPackDifference;
```

## Parameters

|     Name      | Type                                            | Description        |
| :-----------: | ----------------------------------------------- | ------------------ |
| **lang_pack** | [string](https://core.telegram.org/type/string) | Language pack name |
| **lang_code** | [string](https://core.telegram.org/type/string) | Language code      |

## Result

[LangPackDifference](https://core.telegram.org/type/LangPackDifference)

## Possible errors

| Code | Type              | Description                           |
| :--: | ----------------- | ------------------------------------- |
| 400  | LANG_PACK_INVALID | The provided language pack is invalid |

## Can bots use this method?

Yes

## Related pages
