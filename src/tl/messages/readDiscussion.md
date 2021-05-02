# messages.readDiscussion

Mark a [thread](https://core.telegram.org/api/threads) as read

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
        new Api.messages.readDiscussion({
            peer: new Api.InputPeer({
                /* ... */
            }),
            msgId: 6521224,
            readMaxId: 9401944,
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
        new Api.messages.readDiscussion({
            peer: new Api.InputPeer({
                /* ... */
            }),
            msgId: 6521224,
            readMaxId: 9401944,
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
messages.readDiscussion#f731a9f4 peer:InputPeer msg_id:int read_max_id:int = Bool;
```

## Parameters

|      Name       | Type                                                  | Description                              |
| :-------------: | ----------------------------------------------------- | ---------------------------------------- |
|    **peer**     | [InputPeer](https://core.telegram.org/type/InputPeer) | Group ID                                 |
|   **msg_id**    | [int](https://core.telegram.org/type/int)             | ID of message that started the thread    |
| **read_max_id** | [int](https://core.telegram.org/type/int)             | ID up to which thread messages were read |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [Threads](https://core.telegram.org/api/threads)

Telegram allows commenting on a [channel post](https://core.telegram.org/api/channel) or on a generic [supergroup message](https://core.telegram.org/api/channel), thanks to message threads.
