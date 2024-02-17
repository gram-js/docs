# account.SaveWallPaper

Install/uninstall wallpaper



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

    const result = await client.invoke(new Api.account.SaveWallPaper({
    wallpaper: new Api.InputWallPaper({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    unsave: false,
    settings: new Api.WallPaperSettings({
        blur: true,
        motion: true,
        backgroundColor: 43,
        secondBackgroundColor: 43,
        thirdBackgroundColor: 43,
        fourthBackgroundColor: 43,
        intensity: 43,
        rotation: 43,
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

const session = new StringSession(''); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    await client.connect() // This assumes you have already authenticated with .start()

    const result: Api.Bool = await client.invoke(new Api.account.SaveWallPaper({
    wallpaper: new Api.InputWallPaper({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    unsave: false,
    settings: new Api.WallPaperSettings({
        blur: true,
        motion: true,
        backgroundColor: 43,
        secondBackgroundColor: 43,
        thirdBackgroundColor: 43,
        fourthBackgroundColor: 43,
        intensity: 43,
        rotation: 43,
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

| **wallpaper** | [InputWallPaper](https://core.telegram.org/type/InputWallPaper) | Wallpaper to save 
| **unsave** | [Bool](https://core.telegram.org/type/Bool) | Uninstall wallpaper? 
| **settings** | [WallPaperSettings](https://core.telegram.org/type/WallPaperSettings) | Wallpaper settings 


## Result

[Bool](https://core.telegram.org/type/Bool)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | WALLPAPER\_INVALID | The specified wallpaper is invalid. 


## Can bots use this method?

No

## Related pages


