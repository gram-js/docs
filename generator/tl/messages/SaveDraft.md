# messages.SaveDraft

Save a message [draft](https://core.telegram.org/api/drafts) associated to a chat.



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

    const result = await client.invoke(new Api.messages.SaveDraft({
    peer: 'username',
    message: 'Hello there!',
    noWebpage: true,
    invertMedia: true,
    replyTo: new Api.InputReplyToMessage({
        replyToMsgId: 43,
        topMsgId: 43,
        replyToPeerId: 'username',
        quoteText: 'some string here',
        quoteEntities: [new Api.MessageEntityUnknown({
            offset: 43,
            length: 43
        })],
        quoteOffset: 43
    }),
    media: new Api.InputMediaUploadedPhoto({
        file: await client.uploadFile({file:new CustomFile("file.bin", fs.statSync("../file.bin").size, "../file.bin"),workers:1}),
        spoiler: true,
        stickers: [new Api.InputDocument({
            id: BigInt('-4156887774564'),
            accessHash: BigInt('-4156887774564'),
            fileReference: Buffer.from('arbitrary data here')
        })],
        ttlSeconds: 43
    })
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

    const result: Api.Bool = await client.invoke(new Api.messages.SaveDraft({
    peer: 'username',
    message: 'Hello there!',
    noWebpage: true,
    invertMedia: true,
    replyTo: new Api.InputReplyToMessage({
        replyToMsgId: 43,
        topMsgId: 43,
        replyToPeerId: 'username',
        quoteText: 'some string here',
        quoteEntities: [new Api.MessageEntityUnknown({
            offset: 43,
            length: 43
        })],
        quoteOffset: 43
    }),
    media: new Api.InputMediaUploadedPhoto({
        file: await client.uploadFile({file:new CustomFile("file.bin", fs.statSync("../file.bin").size, "../file.bin"),workers:1}),
        spoiler: true,
        stickers: [new Api.InputDocument({
            id: BigInt('-4156887774564'),
            accessHash: BigInt('-4156887774564'),
            fileReference: Buffer.from('arbitrary data here')
        })],
        ttlSeconds: 43
    })
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
| **noWebpage** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true) | Disable generation of the webpage preview 
| **replyToMsgId** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](https://core.telegram.org/type/int) | Message ID the message should reply to 
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Destination of the message that should be sent 
| **message** | [string](https://core.telegram.org/type/string) | The draft 
| **entities** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](https://core.telegram.org/type/MessageEntity)> | Message [entities](https://core.telegram.org/api/entities) for styled text 


## Result

[Bool](https://core.telegram.org/type/Bool)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | MSG\_ID\_INVALID | Invalid message ID provided. 
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid. 


## Can bots use this method?

No

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities



#### [Message drafts](https://core.telegram.org/api/drafts)

How to handle message drafts




