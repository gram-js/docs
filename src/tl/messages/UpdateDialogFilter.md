# messages.UpdateDialogFilter

Reorder [folders](https://core.telegram.org/api/folders)



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.UpdateDialogFilter({
    id: 43,
    filter: new Api.DialogFilter({
        id: 43,
        title: 'My very normal title',
        pinnedPeers: ['username'],
        includePeers: ['username'],
        excludePeers: ['username'],
        contacts: true,
        nonContacts: true,
        groups: true,
        broadcasts: true,
        bots: true,
        excludeMuted: true,
        excludeRead: true,
        excludeArchived: true,
        emoticon: 'some string here'
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

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.Bool = await client.invoke(new Api.messages.UpdateDialogFilter({
    id: 43,
    filter: new Api.DialogFilter({
        id: 43,
        title: 'My very normal title',
        pinnedPeers: ['username'],
        includePeers: ['username'],
        excludePeers: ['username'],
        contacts: true,
        nonContacts: true,
        groups: true,
        broadcasts: true,
        bots: true,
        excludeMuted: true,
        excludeRead: true,
        excludeArchived: true,
        emoticon: 'some string here'
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
| **order** | [Vector](https://core.telegram.org/type/Vector%20t)<[int](https://core.telegram.org/type/int)> | New [folder](https://core.telegram.org/api/folders) order 


## Result

[Bool](https://core.telegram.org/type/Bool)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |


## Can bots use this method?

No

## Related pages

#### [Folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.




