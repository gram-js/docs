# messages.GetStatsURL

Returns URL with the chat statistics. Currently this method can be used only for channels



## Example

::::tabs
:::tab{title="JavaScript"}
```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.GetStatsURL({
    peer: 'username',
    params: 'some string here',
    dark: true
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
    const result: Api.StatsURL = await client.invoke(new Api.messages.GetStatsURL({
    peer: 'username',
    params: 'some string here',
    dark: true
}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |
| **flags** | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) 
| **dark** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Pass true if a URL with the dark theme must be returned 
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Chat identifier 
| **params** | [string](https://core.telegram.org/type/string) | Parameters from `tg://statsrefresh?params=******` link 


## Result

[StatsURL](https://core.telegram.org/type/StatsURL)



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |
| 400 | PEER\_ID\_INVALID | The provided peer id is invalid 


## Can bots use this method?

No

## Related pages


