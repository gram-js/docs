# account.UploadRingtone

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

    const result = await client.invoke(new Api.account.UploadRingtone({
    file: await client.uploadFile({file:new CustomFile("file.bin", fs.statSync("../file.bin").size, "../file.bin"),workers:1}),
    fileName: 'some string here',
    mimeType: 'some string here'
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

    const result: Api.Document = await client.invoke(new Api.account.UploadRingtone({
    file: await client.uploadFile({file:new CustomFile("file.bin", fs.statSync("../file.bin").size, "../file.bin"),workers:1}),
    fileName: 'some string here',
    mimeType: 'some string here'
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

|file|InputFile|No description found
|fileName|string|No description found
|mimeType|string|No description found


## Result

Document

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages


