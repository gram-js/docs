# stories.SendStory

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

    const result = await client.invoke(new Api.stories.SendStory({
    peer: 'username',
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
    privacyRules: [new Api.InputPrivacyValueAllowContacts({})],
    randomId: BigInt('-4156887774564'),
    pinned: true,
    noforwards: true,
    fwdModified: true,
    mediaAreas: [new Api.MediaAreaVenue({
        coordinates: new Api.MediaAreaCoordinates({
            x: 8.24,
            y: 8.24,
            w: 8.24,
            h: 8.24,
            rotation: 8.24
        }),
        geo: new Api.GeoPoint({
            long: 8.24,
            lat: 8.24,
            accessHash: BigInt('-4156887774564'),
            accuracyRadius: 43
        }),
        title: 'My very normal title',
        address: 'some string here',
        provider: 'some string here',
        venueId: 'some string here',
        venueType: 'some string here'
    })],
    caption: 'some string here',
    period: 43,
    fwdFromId: 'username',
    fwdFromStory: 43
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

    const result: Api.Updates = await client.invoke(new Api.stories.SendStory({
    peer: 'username',
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
    privacyRules: [new Api.InputPrivacyValueAllowContacts({})],
    randomId: BigInt('-4156887774564'),
    pinned: true,
    noforwards: true,
    fwdModified: true,
    mediaAreas: [new Api.MediaAreaVenue({
        coordinates: new Api.MediaAreaCoordinates({
            x: 8.24,
            y: 8.24,
            w: 8.24,
            h: 8.24,
            rotation: 8.24
        }),
        geo: new Api.GeoPoint({
            long: 8.24,
            lat: 8.24,
            accessHash: BigInt('-4156887774564'),
            accuracyRadius: 43
        }),
        title: 'My very normal title',
        address: 'some string here',
        provider: 'some string here',
        venueId: 'some string here',
        venueType: 'some string here'
    })],
    caption: 'some string here',
    period: 43,
    fwdFromId: 'username',
    fwdFromStory: 43
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

|pinned|true|No description found
|noforwards|true|No description found
|fwdModified|true|No description found
|peer|InputPeer|No description found
|media|InputMedia|No description found
|mediaAreas|MediaArea|No description found
|caption|string|No description found
|entities|MessageEntity|No description found
|privacyRules|InputPrivacyRule|No description found
|randomId|long|No description found
|period|int|No description found
|fwdFromId|InputPeer|No description found
|fwdFromStory|int|No description found


## Result

Updates

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages


