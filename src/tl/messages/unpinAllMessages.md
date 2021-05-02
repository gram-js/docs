# messages.unpinAllMessages

[Unpin](https://core.telegram.org/api/pin) all pinned messages

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.unpinAllMessages({
		peer: new Api.InputPeer({...}),
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
    const result: Api.messages.AffectedHistory = await client.invoke(new Api.messages.unpinAllMessages({
		peer: new Api.InputPeer({...}),
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
messages.affectedHistory#b45c69d1 pts:int pts_count:int offset:int = messages.AffectedHistory;
---functions---
messages.unpinAllMessages#f025bc8b peer:InputPeer = messages.AffectedHistory;
```

## Parameters

|   Name   | Type                                                  | Description         |
| :------: | ----------------------------------------------------- | ------------------- |
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Chat where to unpin |

## Result

[messages.AffectedHistory](https://core.telegram.org/type/messages.AffectedHistory)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [Pinned messages](https://core.telegram.org/api/pin)

Telegram allows pinning multiple messages on top of a specific chat.
