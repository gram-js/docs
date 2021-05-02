# channels.deleteMessages

Delete messages in a [channel/supergroup](https://core.telegram.org/api/channel)

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.channels.deleteMessages({
		channel: new Api.InputChannel({...}),
		id: [1503858],
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
    const result: Api.messages.AffectedMessages = await client.invoke(new Api.channels.deleteMessages({
		channel: new Api.InputChannel({...}),
		id: [1503858],
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```txt
messages.affectedMessages#84d19185 pts:int pts_count:int = messages.AffectedMessages;
---functions---
channels.deleteMessages#84c1fd4e channel:InputChannel id:Vector<int> = messages.AffectedMessages;
```

## Parameters

|    Name     | Type                                                                                              | Description                                                 |
| :---------: | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel)                                       | [Channel/supergroup](https://core.telegram.org/api/channel) |
|   **id**    | [Vector](https://core.telegram.org/type/Vector%20t) < [int](https://core.telegram.org/type/int) > | IDs of messages to delete                                   |

## Result

[messages.AffectedMessages](https://core.telegram.org/type/messages.AffectedMessages)

## Possible errors

| Code | Type                     | Description                                                                                            |
| :--: | ------------------------ | ------------------------------------------------------------------------------------------------------ |
| 400  | CHANNEL_INVALID          | The provided channel is invalid                                                                        |
| 400  | CHANNEL_PRIVATE          | You haven't joined this channel/supergroup                                                             |
| 403  | MESSAGE_DELETE_FORBIDDEN | You can't delete one of the messages you tried to delete, most likely because it is a service message. |
| 400  | MSG_ID_INVALID           | Invalid message ID provided                                                                            |

## Can bots use this method?

Yes

## Related pages

#### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.
