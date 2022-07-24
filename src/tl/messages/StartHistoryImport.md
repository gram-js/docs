# messages.StartHistoryImport

Complete the [history import process](https://core.telegram.org/api/import), importing all messages into the chat.  

To be called only after initializing the import with [messages.initHistoryImport](https://core.telegram.org/method/messages.initHistoryImport) and uploading all files using [messages.uploadImportedMedia](https://core.telegram.org/method/messages.uploadImportedMedia).



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

    const result = await client.invoke(new Api.messages.StartHistoryImport({
    peer: 'username',
    importId: BigInt('-4156887774564')
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

    const result: Api.Bool = await client.invoke(new Api.messages.StartHistoryImport({
    peer: 'username',
    importId: BigInt('-4156887774564')
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | The Telegram chat where the messages should be [imported, click here for more info »](https://core.telegram.org/api/import) 
| **importId** | [long](https://core.telegram.org/type/long) | Identifier of a history import session, returned by [messages.initHistoryImport](https://core.telegram.org/method/messages.initHistoryImport). 


## Result

[Bool](https://core.telegram.org/type/Bool)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | IMPORT\_ID\_INVALID | The specified import ID is invalid. 


## Can bots use this method?

No

## Related pages

#### [Imported messages](https://core.telegram.org/api/import)

Telegram allows importing messages and media from foreign chat apps.



#### [messages.initHistoryImport](https://core.telegram.org/method/messages.initHistoryImport)

Import chat history from a foreign chat app into a specific Telegram chat, [click here for more info about imported chats »](https://core.telegram.org/api/import).



#### [messages.uploadImportedMedia](https://core.telegram.org/method/messages.uploadImportedMedia)

Upload a media file associated with an [imported chat, click here for more info »](https://core.telegram.org/api/import).




