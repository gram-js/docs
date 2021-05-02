# messages.sendReaction

Send reaction to message

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
        new Api.messages.sendReaction({
            peer: new Api.InputPeer({
                /* ... */
            }),
            msgId: 4607905,
            reaction: 'random string here',
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
    const result: Api.Updates = await client.invoke(
        new Api.messages.sendReaction({
            peer: new Api.InputPeer({
                /* ... */
            }),
            msgId: 4607905,
            reaction: 'random string here',
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
Method schema is available as of layer 129. Switch »
```

## Parameters

|     Name     | Type                                                                                                                           | Description                                                                                             |
| :----------: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
|  **flags**   | [#](https://core.telegram.org/type/%23)                                                                                        | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|   **peer**   | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                          | Peer                                                                                                    |
|  **msg_id**  | [int](https://core.telegram.org/type/int)                                                                                      | Message ID to react to                                                                                  |
| **reaction** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](https://core.telegram.org/type/string) | Reaction (a UTF8 emoji)                                                                                 |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type               | Description                        |
| :--: | ------------------ | ---------------------------------- |
| 400  | MESSAGE_ID_INVALID | The provided message id is invalid |
| 400  | REACTION_EMPTY     | Empty reaction provided            |

## Can bots use this method?

Yes

## Related pages
