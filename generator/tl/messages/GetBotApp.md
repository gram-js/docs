# messages.GetBotApp

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

    const result = await client.invoke(new Api.messages.GetBotApp({
    app: new Api.InputBotAppID({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    hash: BigInt('-4156887774564')
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

    const result: Api.messages.BotApp = await client.invoke(new Api.messages.GetBotApp({
    app: new Api.InputBotAppID({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    hash: BigInt('-4156887774564')
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

|app|InputBotApp|No description found
|hash|long|No description found


## Result

messages.BotApp

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages


