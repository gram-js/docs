# upload.GetWebFile

Returns content of an HTTP file or a part, by proxying the request through telegram.



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.upload.GetWebFile({
    location: new Api.InputWebFileLocation({
        url: 'some string here',
        accessHash: BigInt('-4156887774564')
    }),
    offset: 43,
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

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.upload.WebFile = await client.invoke(new Api.upload.GetWebFile({
    location: new Api.InputWebFileLocation({
        url: 'some string here',
        accessHash: BigInt('-4156887774564')
    }),
    offset: 43,
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
| **location** | [InputWebFileLocation](https://core.telegram.org/type/InputWebFileLocation) | The file to download 
| **offset** | [int](https://core.telegram.org/type/int) | Number of bytes to be skipped 
| **limit** | [int](https://core.telegram.org/type/int) | Number of bytes to be returned 


## Result

[upload.WebFile](https://core.telegram.org/type/upload.WebFile)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | LOCATION\_INVALID | The provided location is invalid 


## Can bots use this method?

No

## Related pages


