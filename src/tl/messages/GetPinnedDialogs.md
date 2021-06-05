# messages.GetPinnedDialogs

Get pinned dialogs



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.GetPinnedDialogs({
    folderId: 43
}));
    console.log(result); // prints the result
})();
```
:::

:::tab{title="TypeScript"}
```ts
import {Api, TelegramClient} from 'telegram';
import {StringSession} from 'telegram/sessions';

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.messages.PeerDialogs = await client.invoke(new Api.messages.GetPinnedDialogs({
    folderId: 43
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **folderId** | [int](https://core.telegram.org/type/int) | [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) 


## Result

[messages.PeerDialogs](https://core.telegram.org/type/messages.PeerDialogs)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | FOLDER\_ID\_INVALID | Invalid folder ID 


## Can bots use this method?

No

## Related pages

#### [Folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.




