# langpack.getStrings

Get strings from a language pack

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
        new Api.langpack.getStrings({
            langPack: 'random string here',
            langCode: 'random string here',
            keys: ['random string here'],
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
    const result: Api.Vector<LangPackString> = await client.invoke(
        new Api.langpack.getStrings({
            langPack: 'random string here',
            langCode: 'random string here',
            keys: ['random string here'],
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
---functions---
langpack.getStrings#efea3803 lang_pack:string lang_code:string keys:Vector<string> = Vector<LangPackString>;
```

## Parameters

|     Name      | Type                                                                                                    | Description        |
| :-----------: | ------------------------------------------------------------------------------------------------------- | ------------------ |
| **lang_pack** | [string](https://core.telegram.org/type/string)                                                         | Language pack name |
| **lang_code** | [string](https://core.telegram.org/type/string)                                                         | Language code      |
|   **keys**    | [Vector](https://core.telegram.org/type/Vector%20t) < [string](https://core.telegram.org/type/string) > | Strings to get     |

## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[LangPackString](https://core.telegram.org/type/LangPackString)>

## Possible errors

| Code | Type              | Description                           |
| :--: | ----------------- | ------------------------------------- |
| 400  | LANG_PACK_INVALID | The provided language pack is invalid |

## Can bots use this method?

Yes

## Related pages
