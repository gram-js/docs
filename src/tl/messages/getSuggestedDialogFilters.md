# messages.getSuggestedDialogFilters

Get [suggested folders](https://core.telegram.org/api/folders)

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(
        new Api.messages.getSuggestedDialogFilters({}),
    );
    console.log(result); // prints the result
})();
```

:::

:::tab{title="TypeScript"}

```ts
import { Api, TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result: Api.Vector<DialogFilterSuggested> = await client.invoke(
        new Api.messages.getSuggestedDialogFilters({}),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
---functions---
messages.getSuggestedDialogFilters#a29cd42c = Vector<DialogFilterSuggested>;
```

## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[DialogFilterSuggested](https://core.telegram.org/type/DialogFilterSuggested)>

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

### [Folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.