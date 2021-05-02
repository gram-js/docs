# messages.getEmojiKeywordsDifference

Get changed emoji keywords

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
        new Api.messages.getEmojiKeywordsDifference({
            langCode: 'random string here',
            fromVersion: 1946635,
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
        new Api.messages.getEmojiKeywordsDifference({
            langCode: 'random string here',
            fromVersion: 1946635,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
emojiKeywordsDifference#5cc761bd lang_code:string from_version:int version:int keywords:Vector<EmojiKeyword> = EmojiKeywordsDifference;
---functions---
messages.getEmojiKeywordsDifference#1508b6af lang_code:string from_version:int = EmojiKeywordsDifference;
```

## Parameters

|       Name       | Type                                            | Description                                 |
| :--------------: | ----------------------------------------------- | ------------------------------------------- |
|  **lang_code**   | [string](https://core.telegram.org/type/string) | Language code                               |
| **from_version** | [int](https://core.telegram.org/type/int)       | Previous emoji keyword localization version |

## Result

[EmojiKeywordsDifference](https://core.telegram.org/type/EmojiKeywordsDifference)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
