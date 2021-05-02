# channels.readMessageContents

Mark [channel/supergroup](https://core.telegram.org/api/channel) message contents as read

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
        new Api.channels.readMessageContents({
            channel: new Api.InputChannel({
                /* ... */
            }),
            id: [8532794],
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
        new Api.channels.readMessageContents({
            channel: new Api.InputChannel({
                /* ... */
            }),
            id: [8532794],
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
channels.readMessageContents#eab5dc38 channel:InputChannel id:Vector<int> = Bool;
```

## Parameters

|    Name     | Type                                                                                              | Description                                                 |
| :---------: | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **channel** | [InputChannel](https://core.telegram.org/type/InputChannel)                                       | [Channel/supergroup](https://core.telegram.org/api/channel) |
|   **id**    | [Vector](https://core.telegram.org/type/Vector%20t) < [int](https://core.telegram.org/type/int) > | IDs of messages whose contents should be marked as read     |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type            | Description                                |
| :--: | --------------- | ------------------------------------------ |
| 400  | CHANNEL_INVALID | The provided channel is invalid            |
| 400  | CHANNEL_PRIVATE | You haven't joined this channel/supergroup |
| 400  | MSG_ID_INVALID  | Invalid message ID provided                |

## Can bots use this method?

Yes

## Related pages

### [Channels](https://core.telegram.org/api/channel)

How to handle channels, supergroups, groups, and what's the difference between them.