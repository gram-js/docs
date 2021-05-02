# stats.getMessageStats

Get [message statistics](https://core.telegram.org/api/stats)

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.stats.getMessageStats({
		dark: true,
		channel: new Api.InputChannel({...}),
		msgId: 7543089,
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
    const result: Api.stats.MessageStats = await client.invoke(new Api.stats.getMessageStats({
		dark: true,
		channel: new Api.InputChannel({...}),
		msgId: 7543089,
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
stats.messageStats#8999f295 views_graph:StatsGraph = stats.MessageStats;
---functions---
stats.getMessageStats#b6e0a3f5 flags:# dark:flags.0?true channel:InputChannel msg_id:int = stats.MessageStats;
```

## Parameters

|    Name     | Type                                                                                                                              | Description                                                                                             |
| :---------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  **flags**  | [#](https://core.telegram.org/type/%23)                                                                                           | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|  **dark**   | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](https://core.telegram.org/constructor/true) | Whether to enable dark theme for graph colors                                                           |
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel)                                                                       | Channel ID                                                                                              |
| **msg_id**  | [int](https://core.telegram.org/type/int)                                                                                         | Message ID                                                                                              |

## Result

[stats.MessageStats](https://core.telegram.org/type/stats.MessageStats)

## Possible errors

| Code | Type                | Description                                  |
| :--: | ------------------- | -------------------------------------------- |
| 400  | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this |

## Can bots use this method?

Yes

## Related pages

#### [Channel statistics](https://core.telegram.org/api/stats)

Telegram offers detailed channel statistics for channels and supergroups.
