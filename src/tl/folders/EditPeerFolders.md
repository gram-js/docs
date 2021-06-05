# folders.EditPeerFolders

Edit peers in [peer folder](https://core.telegram.org/api/folders#peer-folders)



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.folders.EditPeerFolders({
    folderPeers: [new Api.InputFolderPeer({
        peer: 'username',
        folderId: 43
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

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.Updates = await client.invoke(new Api.folders.EditPeerFolders({
    folderPeers: [new Api.InputFolderPeer({
        peer: 'username',
        folderId: 43
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
| **folderPeers** | [Vector](https://core.telegram.org/type/Vector%20t)<[InputFolderPeer](https://core.telegram.org/type/InputFolderPeer)> | New peer list 


## Result

[Updates](https://core.telegram.org/type/Updates)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | FOLDER\_ID\_INVALID | Invalid folder ID 


## Can bots use this method?

No

## Related pages

#### [Folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.




