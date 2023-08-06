# stories.EditStory

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

    const result = await client.invoke(new Api.stories.EditStory({
    id: 43,
    media: new Api.InputMediaUploadedPhoto({
        file: await client.uploadFile({file:new CustomFile("file.bin", fs.statSync("../file.bin").size, "../file.bin"),workers:1}),
        spoiler: true,
        stickers: [new Api.InputDocument({
            id: BigInt('-4156887774564'),
            accessHash: BigInt('-4156887774564'),
            fileReference: Buffer.from('arbitrary data here')
        })],
        ttlSeconds: 43
    }),
    caption: 'some string here',
    privacyRules: [new Api.InputPrivacyValueAllowContacts({})]
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

    const result: Api.Updates = await client.invoke(new Api.stories.EditStory({
    id: 43,
    media: new Api.InputMediaUploadedPhoto({
        file: await client.uploadFile({file:new CustomFile("file.bin", fs.statSync("../file.bin").size, "../file.bin"),workers:1}),
        spoiler: true,
        stickers: [new Api.InputDocument({
            id: BigInt('-4156887774564'),
            accessHash: BigInt('-4156887774564'),
            fileReference: Buffer.from('arbitrary data here')
        })],
        ttlSeconds: 43
    }),
    caption: 'some string here',
    privacyRules: [new Api.InputPrivacyValueAllowContacts({})]
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

|id|int|No description found
|media|InputMedia|No description found
|caption|string|No description found
|entities|MessageEntity|No description found
|privacyRules|InputPrivacyRule|No description found


## Result

Updates

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages


