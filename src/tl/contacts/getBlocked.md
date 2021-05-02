# contacts.getBlocked

Returns the list of blocked users.

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
        new Api.contacts.getBlocked({
            offset: 2244067,
            limit: 1475328,
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
    const result: Api.contacts.Blocked = await client.invoke(
        new Api.contacts.getBlocked({
            offset: 2244067,
            limit: 1475328,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
contacts.blocked#ade1591 blocked:Vector<PeerBlocked> chats:Vector<Chat> users:Vector<User> = contacts.Blocked;
contacts.blockedSlice#e1664194 count:int blocked:Vector<PeerBlocked> chats:Vector<Chat> users:Vector<User> = contacts.Blocked;
---functions---
contacts.getBlocked#f57c350f offset:int limit:int = contacts.Blocked;
```

## Parameters

|    Name    | Type                                      | Description                                |
| :--------: | ----------------------------------------- | ------------------------------------------ |
| **offset** | [int](https://core.telegram.org/type/int) | The number of list elements to be skipped  |
| **limit**  | [int](https://core.telegram.org/type/int) | The number of list elements to be returned |

## Result

[contacts.Blocked](https://core.telegram.org/type/contacts.Blocked)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
