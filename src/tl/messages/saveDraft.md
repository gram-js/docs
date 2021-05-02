# messages.saveDraft

Save a message [draft](https://core.telegram.org/api/drafts) associated to a chat.

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.saveDraft({
		noWebpage: true,
		replyToMsgId: 255667,
		peer: new Api.InputPeer({...}),
		message: 'random string here',
		entities: [new Api.MessageEntity({...})],
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
    const result: Api.Bool = await client.invoke(new Api.messages.saveDraft({
		noWebpage: true,
		replyToMsgId: 255667,
		peer: new Api.InputPeer({...}),
		message: 'random string here',
		entities: [new Api.MessageEntity({...})],
		}));
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
messages.saveDraft#bc39e14b flags:# no_webpage:flags.1?true reply_to_msg_id:flags.0?int peer:InputPeer message:string entities:flags.3?Vector<MessageEntity> = Bool;
```

## Parameters

|        Name         | Type                                                                                                                                                                                                 | Description                                                                                             |
| :-----------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|      **flags**      | [#](https://core.telegram.org/type/%23)                                                                                                                                                              | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
|   **no_webpage**    | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](https://core.telegram.org/constructor/true)                                                                    | Disable generation of the webpage preview                                                               |
| **reply_to_msg_id** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](https://core.telegram.org/type/int)                                                                             | Message ID the message should reply to                                                                  |
|      **peer**       | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                                                                                                | Destination of the message that should be sent                                                          |
|     **message**     | [string](https://core.telegram.org/type/string)                                                                                                                                                      | The draft                                                                                               |
|    **entities**     | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t) < [MessageEntity](https://core.telegram.org/type/MessageEntity) > | Message [entities](https://core.telegram.org/api/entities) for styled text                              |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type            | Description                     |
| :--: | --------------- | ------------------------------- |
| 400  | PEER_ID_INVALID | The provided peer id is invalid |

## Can bots use this method?

Yes

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Message drafts](https://core.telegram.org/api/drafts)

How to handle message drafts
