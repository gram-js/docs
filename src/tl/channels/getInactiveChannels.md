# channels.getInactiveChannels

Get inactive channels and supergroups

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
        new Api.channels.getInactiveChannels({}),
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
    const result: Api.messages.InactiveChats = await client.invoke(
        new Api.channels.getInactiveChannels({}),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
messages.inactiveChats#a927fec5 dates:Vector<int> chats:Vector<Chat> users:Vector<User> = messages.InactiveChats;
---functions---
channels.getInactiveChannels#11e831ee = messages.InactiveChats;
```

## Parameters

| Name | Type | Description |
| :--: | ---- | ----------- |

## Result

[messages.InactiveChats](https://core.telegram.org/type/messages.InactiveChats)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
