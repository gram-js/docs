# messages.GetWebPage

Get [instant view](https://instantview.telegram.org) page



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.GetWebPage({
    url: 'some string here',
    hash: 0
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
    const result: Api.WebPage = await client.invoke(new Api.messages.GetWebPage({
    url: 'some string here',
    hash: 0
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **url** | [string](https://core.telegram.org/type/string) | URL of IV page to fetch 
| **hash** | [int](https://core.telegram.org/type/int) | [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) 


## Result

[WebPage](https://core.telegram.org/type/WebPage)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | WC\_CONVERT\_URL\_INVALID | WC convert URL invalid 


## Can bots use this method?

Yes

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.




