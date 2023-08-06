# account.ReportProfilePhoto

Report a profile photo of a dialog



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

    const result = await client.invoke(new Api.account.ReportProfilePhoto({
    peer: 'username',
    photoId: new Api.InputPhoto({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564'),
        fileReference: Buffer.from('arbitrary data here')
    }),
    reason: new Api.InputReportReasonSpam({}),
    message: 'Hello there!'
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

    const result: Api.Bool = await client.invoke(new Api.account.ReportProfilePhoto({
    peer: 'username',
    photoId: new Api.InputPhoto({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564'),
        fileReference: Buffer.from('arbitrary data here')
    }),
    reason: new Api.InputReportReasonSpam({}),
    message: 'Hello there!'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | The dialog 
| **photoId** | [InputPhoto](https://core.telegram.org/type/InputPhoto) | Dialog photo ID 
| **reason** | [ReportReason](https://core.telegram.org/type/ReportReason) | Report reason 
| **message** | [string](https://core.telegram.org/type/string) | Comment for report moderation 


## Result

[Bool](https://core.telegram.org/type/Bool)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages


