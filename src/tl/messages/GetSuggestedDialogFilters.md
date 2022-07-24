# messages.GetSuggestedDialogFilters

Get [suggested folders](https://core.telegram.org/api/folders)



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

    const result = await client.invoke(new Api.messages.GetSuggestedDialogFilters({}));
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

    const result: Api.Vector<DialogFilterSuggested> = await client.invoke(new Api.messages.GetSuggestedDialogFilters({}));
    console.log(result); // prints the result
})();
```
:::
::::



## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |



## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[DialogFilterSuggested](https://core.telegram.org/type/DialogFilterSuggested)>



## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |



## Can bots use this method?

No

## Related pages

#### [Folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.




