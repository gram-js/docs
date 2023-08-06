# messages.TranslateText

Translate a given text



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession(''); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    await client.connect() // This assumes you have already authenticated with .start()

    const result = await client.invoke(new Api.messages.TranslateText({
    toLang: 'some string here',
    peer: 'username',
    id: [43],
    text: [new Api.TextWithEntities({
        text: 'some string here',
        entities: [new Api.MessageEntityUnknown({
            offset: 43,
            length: 43
        })]
    })]
}));
    console.log(result); // prints the result
})();
```
:::

:::tab{title="TypeScript"}
```ts
import {Api, TelegramClient} from 'telegram';
import {StringSession} from 'telegram/sessions';

const session = new StringSession(''); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    await client.connect() // This assumes you have already authenticated with .start()

    const result: Api.messages.TranslatedText = await client.invoke(new Api.messages.TranslateText({
    toLang: 'some string here',
    peer: 'username',
    id: [43],
    text: [new Api.TextWithEntities({
        text: 'some string here',
        entities: [new Api.MessageEntityUnknown({
            offset: 43,
            length: 43
        })]
    })]
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **flags** | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) 
| **peer** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputPeer](https://core.telegram.org/type/InputPeer) | If the text is a chat message, the peer ID 
| **msgId** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](https://core.telegram.org/type/int) | If the text is a chat message, the message ID 
| **text** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](https://core.telegram.org/type/string) | The text to translate 
| **fromLang** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](https://core.telegram.org/type/string) | Two-letter ISO 639-1 language code of the language from which the message is translated, if not set will be autodetected 
| **toLang** | [string](https://core.telegram.org/type/string) | Two-letter ISO 639-1 language code of the language to which the message is translated 


## Result

[messages.TranslatedText](https://core.telegram.org/type/messages.TranslatedText)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

Yes

## Related pages


