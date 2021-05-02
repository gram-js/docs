# messages.editChatAdmin

Make a user admin in a [legacy group](https://core.telegram.org/api/channel).

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
        new Api.messages.editChatAdmin({
            chatId: 8945722,
            userId: new Api.InputUser({
                /* ... */
            }),
            isAdmin: new Api.Bool({
                /* ... */
            }),
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
    const result: Api.Bool = await client.invoke(
        new Api.messages.editChatAdmin({
            chatId: 8945722,
            userId: new Api.InputUser({
                /* ... */
            }),
            isAdmin: new Api.Bool({
                /* ... */
            }),
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.editChatAdmin#a9e69f2e chat_id:int user_id:InputUser is_admin:Bool = Bool;
```

## Parameters

|     Name     | Type                                                  | Description               |
| :----------: | ----------------------------------------------------- | ------------------------- |
| **chat_id**  | [int](https://core.telegram.org/type/int)             | The ID of the group       |
| **user_id**  | [InputUser](https://core.telegram.org/type/InputUser) | The user to make admin    |
| **is_admin** | [Bool](https://core.telegram.org/type/Bool)           | Whether to make him admin |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type                 | Description                                    |
| :--: | -------------------- | ---------------------------------------------- |
| 400  | CHAT_ID_INVALID      | The provided chat id is invalid                |
| 400  | PEER_ID_INVALID      | The provided peer id is invalid                |
| 400  | USER_ID_INVALID      | The provided user ID is invalid                |
| 400  | USER_NOT_PARTICIPANT | You're not a member of this supergroup/channel |

## Can bots use this method?

Yes

## Related pages

#### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.
