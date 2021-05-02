# channels.getLeftChannels

Get a list of [channels/supergroups](https://core.telegram.org/api/channel) we left

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
        new Api.channels.getLeftChannels({
            offset: 7453814,
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
        new Api.channels.getLeftChannels({
            offset: 7453814,
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
channels.getLeftChannels#8341ecc0 offset:int = messages.Chats;
```

## Parameters

|    Name    | Type                                      | Description                                                    |
| :--------: | ----------------------------------------- | -------------------------------------------------------------- |
| **offset** | [int](https://core.telegram.org/type/int) | Offset for [pagination](https://core.telegram.org/api/offsets) |

## Result

[messages.Chats](https://core.telegram.org/type/messages.Chats)

## Possible errors

| Code | Type             | Description                                    |
| :--: | ---------------- | ---------------------------------------------- |
| 403  | TAKEOUT_REQUIRED | A takeout session has to be initialized, first |

## Can bots use this method?

Yes

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.
