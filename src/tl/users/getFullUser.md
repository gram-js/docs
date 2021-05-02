# users.getFullUser

Returns extended user info by ID.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.users.getFullUser({
		id: new Api.InputUser({...}),
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
    const result: Api.Returns a UserFull object containing user info. = await client.invoke(new Api.users.getFullUser({
		id: new Api.InputUser({...}),
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
userFull#edf17c12 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true user:User about:flags.1?string settings:PeerSettings profile_photo:flags.2?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int = UserFull;
---functions---
users.getFullUser#ca30a5b1 id:InputUser = UserFull;
```

## Parameters

|  Name  | Type                                                  | Description |
| :----: | ----------------------------------------------------- | ----------- |
| **id** | [InputUser](https://core.telegram.org/type/InputUser) | User ID     |

## Result

Returns a [UserFull](https://core.telegram.org/type/UserFull) object containing user info.

## Possible errors

| Code | Type            | Description                                |
| :--: | --------------- | ------------------------------------------ |
| 400  | CHANNEL_PRIVATE | You haven't joined this channel/supergroup |
| 400  | MSG_ID_INVALID  | Invalid message ID provided                |
| 400  | USER_ID_INVALID | The provided user ID is invalid            |

## Can bots use this method?

Yes

## Related pages
