# messages.getEmojiKeywordsLanguages

Get info about an emoji keyword localization

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
        new Api.messages.getEmojiKeywordsLanguages({
            langCodes: ['random string here'],
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
    const result: Api.Vector<EmojiLanguage> = await client.invoke(
        new Api.messages.getEmojiKeywordsLanguages({
            langCodes: ['random string here'],
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
messages.getEmojiKeywordsLanguages#4e9963b2 lang_codes:Vector<string> = Vector<EmojiLanguage>;
```

## Parameters

|      Name      | Type                                                                                                    | Description    |
| :------------: | ------------------------------------------------------------------------------------------------------- | -------------- |
| **lang_codes** | [Vector](https://core.telegram.org/type/Vector%20t) < [string](https://core.telegram.org/type/string) > | Language codes |

## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[EmojiLanguage](https://core.telegram.org/type/EmojiLanguage)>

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
