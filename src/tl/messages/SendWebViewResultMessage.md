# messages.SendWebViewResultMessage

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

    const result = await client.invoke(new Api.messages.SendWebViewResultMessage({
    botQueryId: 'some string here',
    result: new Api.InputBotInlineResult({
        id: 'some string here',
        type: 'some string here',
        sendMessage: new Api.InputBotInlineMessageMediaAuto({
            message: 'Hello there!'
        }),
        title: 'My very normal title',
        description: 'some string here',
        url: 'some string here',
        thumb: new Api.InputWebDocument({
            url: 'some string here',
            size: 43,
            mimeType: 'some string here',
            attributes: [new Api.DocumentAttributeImageSize({
                w: 43,
                h: 43
            })]
        }),
        content: new Api.InputWebDocument({
            url: 'some string here',
            size: 43,
            mimeType: 'some string here',
            attributes: [new Api.DocumentAttributeImageSize({
                w: 43,
                h: 43
            })]
        })
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

    const result: Api.WebViewMessageSent = await client.invoke(new Api.messages.SendWebViewResultMessage({
    botQueryId: 'some string here',
    result: new Api.InputBotInlineResult({
        id: 'some string here',
        type: 'some string here',
        sendMessage: new Api.InputBotInlineMessageMediaAuto({
            message: 'Hello there!'
        }),
        title: 'My very normal title',
        description: 'some string here',
        url: 'some string here',
        thumb: new Api.InputWebDocument({
            url: 'some string here',
            size: 43,
            mimeType: 'some string here',
            attributes: [new Api.DocumentAttributeImageSize({
                w: 43,
                h: 43
            })]
        }),
        content: new Api.InputWebDocument({
            url: 'some string here',
            size: 43,
            mimeType: 'some string here',
            attributes: [new Api.DocumentAttributeImageSize({
                w: 43,
                h: 43
            })]
        })
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

|botQueryId|string|No description found
|result|InputBotInlineResult|No description found


## Result

WebViewMessageSent

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages


