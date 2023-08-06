# chatlists.ExportChatlistInvite

No description found

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

    const result = await client.invoke(new Api.chatlists.ExportChatlistInvite({
    chatlist: new Api.InputChatlistDialogFilter({
        filterId: 43
    }),
    title: 'My very normal title',
    peers: ['username']
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

    const result: Api.chatlists.ExportedChatlistInvite = await client.invoke(new Api.chatlists.ExportChatlistInvite({
    chatlist: new Api.InputChatlistDialogFilter({
        filterId: 43
    }),
    title: 'My very normal title',
    peers: ['username']
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

|chatlist|InputChatlist|No description found
|title|string|No description found
|peers|InputPeer|No description found


## Result

chatlists.ExportedChatlistInvite

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages


