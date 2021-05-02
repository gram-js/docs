# messages.readMentions

Mark mentions as read

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
        new Api.messages.readMentions({
            peer: new Api.InputPeer({
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
    const result: Api.messages.AffectedHistory = await client.invoke(
        new Api.messages.readMentions({
            peer: new Api.InputPeer({
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
messages.affectedHistory#b45c69d1 pts:int pts_count:int offset:int = messages.AffectedHistory;
---functions---
messages.readMentions#f0189d3 peer:InputPeer = messages.AffectedHistory;
```

## Parameters

|   Name   | Type                                                  | Description |
| :------: | ----------------------------------------------------- | ----------- |
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Dialog      |

## Result

[messages.AffectedHistory](https://core.telegram.org/type/messages.AffectedHistory)

## Possible errors

| Code | Type            | Description                                |
| :--: | --------------- | ------------------------------------------ |
| 400  | CHANNEL_INVALID | The provided channel is invalid            |
| 400  | CHANNEL_PRIVATE | You haven't joined this channel/supergroup |
| 400  | MSG_ID_INVALID  | Invalid message ID provided                |
| 400  | PEER_ID_INVALID | The provided peer id is invalid            |

## Can bots use this method?

Yes

## Related pages
