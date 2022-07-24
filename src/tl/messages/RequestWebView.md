# messages.RequestWebView

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

    const result = await client.invoke(new Api.messages.RequestWebView({
    peer: 'username',
    bot: 'username',
    fromBotMenu: true,
    url: 'some string here',
    startParam: 'some string here',
    themeParams: new Api.DataJSON({
        data: 'some string here'
    }),
    sendAs: 'username'
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

    const result: Api.WebViewResult = await client.invoke(new Api.messages.RequestWebView({
    peer: 'username',
    bot: 'username',
    fromBotMenu: true,
    url: 'some string here',
    startParam: 'some string here',
    themeParams: new Api.DataJSON({
        data: 'some string here'
    }),
    sendAs: 'username'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

|fromBotMenu|true|No description found
|silent|true|No description found
|peer|InputPeer|No description found
|bot|InputUser|No description found
|url|string|No description found
|startParam|string|No description found
|themeParams|DataJSON|No description found
|replyToMsgId|int|No description found
|sendAs|InputPeer|No description found


## Result

WebViewResult

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages


