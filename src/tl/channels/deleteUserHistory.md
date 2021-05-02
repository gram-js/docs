# channels.deleteUserHistory

Delete all messages sent by a certain user in a [supergroup](https://core.telegram.org/api/channel)

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.channels.deleteUserHistory({
		channel: new Api.InputChannel({...}),
		userId: new Api.InputUser({...}),
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
    const result: Api.messages.AffectedHistory = await client.invoke(new Api.channels.deleteUserHistory({
		channel: new Api.InputChannel({...}),
		userId: new Api.InputUser({...}),
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```txt
messages.affectedHistory#b45c69d1 pts:int pts_count:int offset:int = messages.AffectedHistory;
---functions---
channels.deleteUserHistory#d10dd71b channel:InputChannel user_id:InputUser = messages.AffectedHistory;
```

## Parameters

|    Name     | Type                                                        | Description                                         |
| :---------: | ----------------------------------------------------------- | --------------------------------------------------- |
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel) | [Supergroup](https://core.telegram.org/api/channel) |
| **user_id** | [InputUser](https://core.telegram.org/type/InputUser)       | User whose messages should be deleted               |

## Result

[messages.AffectedHistory](https://core.telegram.org/type/messages.AffectedHistory)

## Possible errors

| Code | Type                 | Description                                  |
| :--: | -------------------- | -------------------------------------------- |
| 400  | CHANNEL_INVALID      | The provided channel is invalid              |
| 400  | CHANNEL_PRIVATE      | You haven't joined this channel/supergroup   |
| 400  | CHAT_ADMIN_REQUIRED  | You must be an admin in this chat to do this |
| 403  | CHAT_WRITE_FORBIDDEN | You can't write in this chat                 |
| 400  | MSG_ID_INVALID       | Invalid message ID provided                  |
| 400  | USER_ID_INVALID      | The provided user ID is invalid              |

## Can bots use this method?

Yes

## Related pages

#### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.
