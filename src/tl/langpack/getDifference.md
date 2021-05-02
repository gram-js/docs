# langpack.getDifference

Get new strings in languagepack

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
        new Api.langpack.getDifference({
            langPack: 'random string here',
            langCode: 'random string here',
            fromVersion: 5301681,
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
        new Api.langpack.getDifference({
            langPack: 'random string here',
            langCode: 'random string here',
            fromVersion: 5301681,
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
langpack.getDifference#cd984aa5 lang_pack:string lang_code:string from_version:int = LangPackDifference;
```

## Parameters

|       Name       | Type                                            | Description                        |
| :--------------: | ----------------------------------------------- | ---------------------------------- |
|  **lang_pack**   | [string](https://core.telegram.org/type/string) | Language pack                      |
|  **lang_code**   | [string](https://core.telegram.org/type/string) | Language code                      |
| **from_version** | [int](https://core.telegram.org/type/int)       | Previous localization pack version |

## Result

[LangPackDifference](https://core.telegram.org/type/LangPackDifference)

## Possible errors

| Code | Type              | Description                           |
| :--: | ----------------- | ------------------------------------- |
| 400  | LANG_PACK_INVALID | The provided language pack is invalid |

## Can bots use this method?

Yes

## Related pages
