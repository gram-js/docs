# messages.readHistory

Marks message history as read.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.readHistory({
		peer: new Api.InputPeer({...}),
		maxId: 5644902,
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
    const result: Api.messages.AffectedHistory = await client.invoke(new Api.messages.readHistory({
		peer: new Api.InputPeer({...}),
		maxId: 5644902,
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
messages.affectedMessages#84d19185 pts:int pts_count:int = messages.AffectedMessages;
---functions---
messages.readHistory#e306d3a peer:InputPeer max_id:int = messages.AffectedMessages;
```

## Parameters

|    Name    | Type                                                  | Description                                                                                                 |
| :--------: | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
|  **peer**  | [InputPeer](https://core.telegram.org/type/InputPeer) | Target user or group                                                                                        |
| **max_id** | [int](https://core.telegram.org/type/int)             | If a positive value is passed, only messages with identifiers less or equal than the given one will be read |

## Result

[messages.AffectedHistory](https://core.telegram.org/type/messages.AffectedHistory)

## Possible errors

| Code | Type            | Description                     |
| :--: | --------------- | ------------------------------- |
| 400  | CHAT_ID_INVALID | The provided chat id is invalid |
| 400  | MSG_ID_INVALID  | Invalid message ID provided     |
| 400  | PEER_ID_INVALID | The provided peer id is invalid |

## Can bots use this method?

Yes

## Related pages
