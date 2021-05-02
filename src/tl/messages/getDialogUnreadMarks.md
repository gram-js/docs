# messages.getDialogUnreadMarks

Get dialogs manually marked as unread

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
        new Api.messages.getDialogUnreadMarks({}),
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
    const result: Api.Vector<DialogPeer> = await client.invoke(
        new Api.messages.getDialogUnreadMarks({}),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
---functions---
messages.getDialogUnreadMarks#22e24e22 = Vector<DialogPeer>;
```

## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

## Result

[Vector](https://core.telegram.org/type/Vector%20t)<[DialogPeer](https://core.telegram.org/type/DialogPeer)>

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages