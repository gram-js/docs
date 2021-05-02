# messages.getAllChats

Get all chats, channels and supergroups

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
        new Api.messages.getAllChats({
            exceptIds: [7475723],
        }),
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
    const result: Api.messages.Chats = await client.invoke(
        new Api.messages.getAllChats({
            exceptIds: [7475723],
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
messages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;
messages.chatsSlice#9cd81144 count:int chats:Vector<Chat> = messages.Chats;
---functions---
messages.getAllChats#eba80ff0 except_ids:Vector<int> = messages.Chats;
```

## Parameters

|      Name      | Type                                                                                              | Description                             |
| :------------: | ------------------------------------------------------------------------------------------------- | --------------------------------------- |
| **except_ids** | [Vector](https://core.telegram.org/type/Vector%20t) < [int](https://core.telegram.org/type/int) > | Except these chats/channels/supergroups |

## Result

[messages.Chats](https://core.telegram.org/type/messages.Chats)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
