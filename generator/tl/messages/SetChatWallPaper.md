# messages.SetChatWallPaper

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

    const result = await client.invoke(new Api.messages.SetChatWallPaper({
    peer: 'username',
    wallpaper: new Api.InputWallPaper({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    settings: new Api.WallPaperSettings({
        blur: true,
        motion: true,
        backgroundColor: 43,
        secondBackgroundColor: 43,
        thirdBackgroundColor: 43,
        fourthBackgroundColor: 43,
        intensity: 43,
        rotation: 43
    }),
    id: 43
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

    const result: Api.Updates = await client.invoke(new Api.messages.SetChatWallPaper({
    peer: 'username',
    wallpaper: new Api.InputWallPaper({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    settings: new Api.WallPaperSettings({
        blur: true,
        motion: true,
        backgroundColor: 43,
        secondBackgroundColor: 43,
        thirdBackgroundColor: 43,
        fourthBackgroundColor: 43,
        intensity: 43,
        rotation: 43
    }),
    id: 43
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

|peer|InputPeer|No description found
|wallpaper|InputWallPaper|No description found
|settings|WallPaperSettings|No description found
|id|int|No description found


## Result

Updates

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages


