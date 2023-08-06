# messages.CheckHistoryImport

Check whether chat history exported from another chat app can be [imported into a specific Telegram chat, click here for more info »](https://core.telegram.org/api/import).



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

    const result = await client.invoke(new Api.messages.CheckHistoryImport({
    importHead: 'some string here'
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

    const result: Api.messages.HistoryImportParsed = await client.invoke(new Api.messages.CheckHistoryImport({
    importHead: 'some string here'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | The chat where we want to [import history »](https://core.telegram.org/api/import). 


## Result

[messages.CheckedHistoryImportPeer](https://core.telegram.org/type/messages.CheckedHistoryImportPeer)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | PEER\_ID\_INVALID | The provided peer id is invalid. 
| 400 | USER\_NOT\_MUTUAL\_CONTACT | The provided user is not a mutual contact. 


## Can bots use this method?

No

## Related pages

#### [Imported messages](https://core.telegram.org/api/import)

Telegram allows importing messages and media from foreign chat apps.



#### [messages.CheckedHistoryImportPeer](https://core.telegram.org/type/messages.CheckedHistoryImportPeer)

Contains a confirmation text to be shown to the user, upon [importing chat history, click here for more info »](https://core.telegram.org/api/import).




