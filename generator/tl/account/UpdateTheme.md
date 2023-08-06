# account.UpdateTheme

Update theme



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

    const result = await client.invoke(new Api.account.UpdateTheme({
    format: 'some string here',
    theme: new Api.InputTheme({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    slug: 'some string here',
    title: 'My very normal title',
    document: new Api.InputDocument({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564'),
        fileReference: Buffer.from('arbitrary data here')
    }),
    settings: [new Api.InputThemeSettings({
        baseTheme: new Api.BaseThemeClassic({}),
        accentColor: 43,
        messageColorsAnimated: true,
        outboxAccentColor: 43,
        messageColors: [43],
        wallpaper: new Api.InputWallPaper({
            id: BigInt('-4156887774564'),
            accessHash: BigInt('-4156887774564')
        }),
        wallpaperSettings: new Api.WallPaperSettings({
            blur: true,
            motion: true,
            backgroundColor: 43,
            secondBackgroundColor: 43,
            thirdBackgroundColor: 43,
            fourthBackgroundColor: 43,
            intensity: 43,
            rotation: 43
        })
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

const session = new StringSession(''); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    await client.connect() // This assumes you have already authenticated with .start()

    const result: Api.Theme = await client.invoke(new Api.account.UpdateTheme({
    format: 'some string here',
    theme: new Api.InputTheme({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    slug: 'some string here',
    title: 'My very normal title',
    document: new Api.InputDocument({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564'),
        fileReference: Buffer.from('arbitrary data here')
    }),
    settings: [new Api.InputThemeSettings({
        baseTheme: new Api.BaseThemeClassic({}),
        accentColor: 43,
        messageColorsAnimated: true,
        outboxAccentColor: 43,
        messageColors: [43],
        wallpaper: new Api.InputWallPaper({
            id: BigInt('-4156887774564'),
            accessHash: BigInt('-4156887774564')
        }),
        wallpaperSettings: new Api.WallPaperSettings({
            blur: true,
            motion: true,
            backgroundColor: 43,
            secondBackgroundColor: 43,
            thirdBackgroundColor: 43,
            fourthBackgroundColor: 43,
            intensity: 43,
            rotation: 43
        })
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

| **flags** | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) 
| **format** | [string](https://core.telegram.org/type/string) | Theme format, a string that identifies the theming engines supported by the client 
| **theme** | [InputTheme](https://core.telegram.org/type/InputTheme) | Theme to update 
| **slug** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](https://core.telegram.org/type/string) | Unique theme ID 
| **title** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](https://core.telegram.org/type/string) | Theme name 
| **document** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InputDocument](https://core.telegram.org/type/InputDocument) | Theme file 
| **settings** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[InputThemeSettings](https://core.telegram.org/type/InputThemeSettings)> | Theme settings 


## Result

[Theme](https://core.telegram.org/type/Theme)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | THEME\_INVALID | Invalid theme provided. 


## Can bots use this method?

No

## Related pages


