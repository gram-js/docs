# messages.reportSpam

Report a new incoming chat for spam, if the [peer settings](https://core.telegram.org/constructor/peerSettings) of the chat allow us to do that

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
        new Api.messages.reportSpam({
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
    const result: Api.Bool = await client.invoke(
        new Api.messages.reportSpam({
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
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.reportSpam#cf1592db peer:InputPeer = Bool;
```

## Parameters

|   Name   | Type                                                  | Description    |
| :------: | ----------------------------------------------------- | -------------- |
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Peer to report |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type            | Description                     |
| :--: | --------------- | ------------------------------- |
| 400  | MSG_ID_INVALID  | Invalid message ID provided     |
| 400  | PEER_ID_INVALID | The provided peer id is invalid |

## Can bots use this method?

Yes

## Related pages

### [peerSettings](https://core.telegram.org/constructor/peerSettings)

Peer settings
