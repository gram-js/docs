# photos.DeletePhotos

Deletes profile photos.



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

    const result = await client.invoke(new Api.photos.DeletePhotos({
    id: [new Api.InputPhoto({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564'),
        fileReference: Buffer.from('arbitrary data here')
    })]
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

    const result: Api.Vector<long> = await client.invoke(new Api.photos.DeletePhotos({
    id: [new Api.InputPhoto({
        id: BigInt('-4156887774564'),
        accessHash: BigInt('-4156887774564'),
        fileReference: Buffer.from('arbitrary data here')
    })]
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **id** | [Vector](https://core.telegram.org/type/Vector%20t)<[InputPhoto](https://core.telegram.org/type/InputPhoto)> | Input photos to delete 


## Result

Method returns a list of successfully deleted photos in [Vector](https://core.telegram.org/type/Vector%20t)<[long](https://core.telegram.org/type/long)>



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages


