# messages.checkChatInvite

Check the validity of a chat invite link and get basic info about it

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
        new Api.messages.checkChatInvite({
            hash: 'random string here',
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
    const result: Api.ChatInvite = await client.invoke(
        new Api.messages.checkChatInvite({
            hash: 'random string here',
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
chatInviteAlready#5a686d7c chat:Chat = ChatInvite;
chatInvite#dfc2f58e flags:# channel:flags.0?true broadcast:flags.1?true public:flags.2?true megagroup:flags.3?true title:string photo:Photo participants_count:int participants:flags.4?Vector<User> = ChatInvite;
chatInvitePeek#61695cb0 chat:Chat expires:int = ChatInvite;
---functions---
messages.checkChatInvite#3eadb1bb hash:string = ChatInvite;
```

## Parameters

|   Name   | Type                                            | Description                       |
| :------: | ----------------------------------------------- | --------------------------------- |
| **hash** | [string](https://core.telegram.org/type/string) | Invite hash in t.me/joinchat/hash |

## Result

[ChatInvite](https://core.telegram.org/type/ChatInvite)

## Possible errors

| Code | Type                | Description                 |
| :--: | ------------------- | --------------------------- |
| 400  | INVITE_HASH_EMPTY   | The invite hash is empty    |
| 400  | INVITE_HASH_EXPIRED | The invite link has expired |
| 400  | INVITE_HASH_INVALID | The invite hash is invalid  |

## Can bots use this method?

Yes

## Related pages
