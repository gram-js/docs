# messages.getEmojiKeywords

Get localized emoji keywords

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
        new Api.messages.getEmojiKeywords({
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
    const result: Api.EmojiKeywordsDifference = await client.invoke(
        new Api.messages.getEmojiKeywords({
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
emojiKeywordsDifference#5cc761bd lang_code:string from_version:int version:int keywords:Vector<EmojiKeyword> = EmojiKeywordsDifference;
---functions---
messages.getEmojiKeywords#35a0e062 lang_code:string = EmojiKeywordsDifference;
```

## Parameters

|     Name      | Type                                            | Description   |
| :-----------: | ----------------------------------------------- | ------------- |
| **lang_code** | [string](https://core.telegram.org/type/string) | Language code |

## Result

[EmojiKeywordsDifference](https://core.telegram.org/type/EmojiKeywordsDifference)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
