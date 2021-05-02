# channels.getFullChannel

Get full info about a channel

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.channels.getFullChannel({
		channel: new Api.InputChannel({...}),
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
    const result: Api.messages.ChatFull = await client.invoke(new Api.channels.getFullChannel({
		channel: new Api.InputChannel({...}),
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
messages.chatFull#e5d7d19c full_chat:ChatFull chats:Vector<Chat> users:Vector<User> = messages.ChatFull;
---functions---
channels.getFullChannel#8736a09 channel:InputChannel = messages.ChatFull;
```

## Parameters

|    Name     | Type                                                        | Description                   |
| :---------: | ----------------------------------------------------------- | ----------------------------- |
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel) | The channel to get info about |

## Result

[messages.ChatFull](https://core.telegram.org/type/messages.ChatFull)

## Possible errors

| Code | Type                    | Description                                |
| :--: | ----------------------- | ------------------------------------------ |
| 400  | CHANNEL_INVALID         | The provided channel is invalid            |
| 400  | CHANNEL_PRIVATE         | You haven't joined this channel/supergroup |
| 403  | CHANNEL_PUBLIC_GROUP_NA | channel/supergroup not available           |
| 400  | MSG_ID_INVALID          | Invalid message ID provided                |

## Can bots use this method?

Yes

## Related pages
