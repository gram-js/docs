# messages.getEmojiURL

Returns an HTTP URL which can be used to automatically log in into translation platform and suggest new emoji replacements. The URL will be valid for 30 seconds after generation

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
        new Api.messages.getEmojiURL({
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
    const result: Api.EmojiURL = await client.invoke(
        new Api.messages.getEmojiURL({
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
emojiURL#a575739d url:string = EmojiURL;
---functions---
messages.getEmojiURL#d5b10c26 lang_code:string = EmojiURL;
```

## Parameters

|     Name      | Type                                            | Description                                                      |
| :-----------: | ----------------------------------------------- | ---------------------------------------------------------------- |
| **lang_code** | [string](https://core.telegram.org/type/string) | Language code for which the emoji replacements will be suggested |

## Result

[EmojiURL](https://core.telegram.org/type/EmojiURL)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
