# messages.RequestAppWebView

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

    const result = await client.invoke(new Api.messages.RequestAppWebView({
    peer: 'username',
    app: new Api.InputBotAppID({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    platform: 'some string here',
    writeAllowed: true,
    startParam: 'some string here',
    themeParams: new Api.DataJSON({
        data: 'some string here'
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

    const result: Api.AppWebViewResult = await client.invoke(new Api.messages.RequestAppWebView({
    peer: 'username',
    app: new Api.InputBotAppID({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564')
    }),
    platform: 'some string here',
    writeAllowed: true,
    startParam: 'some string here',
    themeParams: new Api.DataJSON({
        data: 'some string here'
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

|writeAllowed|true|No description found
|peer|InputPeer|No description found
|app|InputBotApp|No description found
|startParam|string|No description found
|themeParams|DataJSON|No description found
|platform|string|No description found


## Result

AppWebViewResult

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages


