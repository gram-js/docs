# photos.GetUserPhotos

Returns the list of user photos.



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

    const result = await client.invoke(new Api.photos.GetUserPhotos({
    userId: 'username',
    offset: 43,
    maxId: 0,
    limit: 100
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

    const result: Api.photos.Photos = await client.invoke(new Api.photos.GetUserPhotos({
    userId: 'username',
    offset: 43,
    maxId: 0,
    limit: 100
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

| **userId** | [InputUser](https://core.telegram.org/type/InputUser) | User ID 
| **offset** | [int](https://core.telegram.org/type/int) | Number of list elements to be skipped 
| **maxId** | [long](https://core.telegram.org/type/long) | If a positive value was transferred, the method will return only photos with IDs less than the set one 
| **limit** | [int](https://core.telegram.org/type/int) | Number of list elements to be returned 


## Result

[photos.Photos](https://core.telegram.org/type/photos.Photos)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | MAX\_ID\_INVALID | The provided max ID is invalid. 
| 400 | MSG\_ID\_INVALID | Invalid message ID provided. 
| 400 | USER\_ID\_INVALID | The provided user ID is invalid. 


## Can bots use this method?

Yes

## Related pages


