# account.SaveTheme

Save a theme



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.account.SaveTheme({
    theme: new Api.InputTheme({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    unsave: false
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
    const result: Api.Bool = await client.invoke(new Api.account.SaveTheme({
    theme: new Api.InputTheme({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    unsave: false
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **theme** | [InputTheme](https://core.telegram.org/type/InputTheme) | Theme to save 
| **unsave** | [Bool](https://core.telegram.org/type/Bool) | Unsave 


## Result

[Bool](https://core.telegram.org/type/Bool)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |


## Can bots use this method?

No

## Related pages


