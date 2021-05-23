# upload.SaveBigFilePart

Saves a part of a large file (over 10Mb in size) to be later passed to one of the methods.



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.upload.SaveBigFilePart({
    fileId: BigInt('-4156887774564'),
    filePart: 43,
    fileTotalParts: 43,
    bytes: Buffer.from('arbitrary data here')
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
    const result: Api.Bool = await client.invoke(new Api.upload.SaveBigFilePart({
    fileId: BigInt('-4156887774564'),
    filePart: 43,
    fileTotalParts: 43,
    bytes: Buffer.from('arbitrary data here')
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **fileId** | [long](https://core.telegram.org/type/long) | Random file id, created by the client 
| **filePart** | [int](https://core.telegram.org/type/int) | Part sequence number 
| **fileTotalParts** | [int](https://core.telegram.org/type/int) | Total number of parts 
| **bytes** | [bytes](https://core.telegram.org/type/bytes) | Binary data, part contents 


## Result

[Bool](https://core.telegram.org/type/Bool)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | FILE\_PARTS\_INVALID | The number of file parts is invalid 
| 400 | FILE\_PART\_EMPTY | The provided file part is empty 
| 400 | FILE\_PART\_INVALID | The file part number is invalid 
| 400 | FILE\_PART\_SIZE\_CHANGED | Provided file part size has changed 
| 400 | FILE\_PART\_SIZE\_INVALID | The provided file part size is invalid 
| 400 | FILE\_PART\_TOO\_BIG | The uploaded file part is too big 


## Can bots use this method?

Yes

## Related pages


