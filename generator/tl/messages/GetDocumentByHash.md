# messages.GetDocumentByHash

Get a document by its SHA256 hash, mainly used for gifs



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

    const result = await client.invoke(new Api.messages.GetDocumentByHash({
    sha256: Buffer.from('arbitrary data here'),
    size: BigInt('-4156887774564'),
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

    const result: Api.Document = await client.invoke(new Api.messages.GetDocumentByHash({
    sha256: Buffer.from('arbitrary data here'),
    size: BigInt('-4156887774564'),
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

| **sha256** | [bytes](https://core.telegram.org/type/bytes) | SHA256 of file 
| **size** | [int](https://core.telegram.org/type/int) | Size of the file in bytes 
| **mimeType** | [string](https://core.telegram.org/type/string) | Mime type 


## Result

[Document](https://core.telegram.org/type/Document)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

| 400 | SHA256\_HASH\_INVALID | The provided SHA256 hash is invalid. 


## Can bots use this method?

Yes

## Related pages


