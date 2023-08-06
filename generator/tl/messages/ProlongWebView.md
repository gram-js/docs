# messages.ProlongWebView

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

    const result = await client.invoke(new Api.messages.ProlongWebView({
    peer: 'username',
    bot: 'username',
    queryId: BigInt('-4156887774564'),
    replyTo: new Api.InputReplyToMessage({
        replyToMsgId: 43,
        topMsgId: 43
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

    const result: Api.Bool = await client.invoke(new Api.messages.ProlongWebView({
    peer: 'username',
    bot: 'username',
    queryId: BigInt('-4156887774564'),
    replyTo: new Api.InputReplyToMessage({
        replyToMsgId: 43,
        topMsgId: 43
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

|silent|true|No description found
|peer|InputPeer|No description found
|bot|InputUser|No description found
|queryId|long|No description found
|replyTo|InputReplyTo|No description found
|sendAs|InputPeer|No description found


## Result

Bool

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages


