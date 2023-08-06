# account.SaveAutoSaveSettings

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

    const result = await client.invoke(new Api.account.SaveAutoSaveSettings({
    settings: new Api.AutoSaveSettings({
        photos: true,
        videos: true,
        videoMaxSize: BigInt('-4156887774564')
    }),
    users: true,
    chats: true,
    broadcasts: true,
    peer: 'username'
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

    const result: Api.Bool = await client.invoke(new Api.account.SaveAutoSaveSettings({
    settings: new Api.AutoSaveSettings({
        photos: true,
        videos: true,
        videoMaxSize: BigInt('-4156887774564')
    }),
    users: true,
    chats: true,
    broadcasts: true,
    peer: 'username'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

|users|true|No description found
|chats|true|No description found
|broadcasts|true|No description found
|peer|InputPeer|No description found
|settings|AutoSaveSettings|No description found


## Result

Bool

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages


