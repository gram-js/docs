# messages.receivedMessages

Confirms receipt of messages by a client, cancels PUSH-notification sending.

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
        new Api.messages.receivedMessages({
            maxId: 9111072,
        }),
    );
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
    const result: Api.The method returns the list of message IDs, for which PUSH-notifications were cancelled. = await client.invoke(new Api.messages.receivedMessages({
		maxId: 9111072,
		}));
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
---functions---
messages.receivedMessages#5a954c0 max_id:int = Vector<ReceivedNotifyMessage>;
```

## Parameters

|    Name    | Type                                      | Description                               |
| :--------: | ----------------------------------------- | ----------------------------------------- |
| **max_id** | [int](https://core.telegram.org/type/int) | Maximum message ID available in a client. |

## Result

The method returns the list of message IDs, for which PUSH-notifications were cancelled.

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
