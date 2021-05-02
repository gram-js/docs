# messages.getMessageEditData

Find out if a media message's caption can be edited

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.getMessageEditData({
		peer: new Api.InputPeer({...}),
		id: 691465,
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
    const result: Api.messages.MessageEditData = await client.invoke(new Api.messages.getMessageEditData({
		peer: new Api.InputPeer({...}),
		id: 691465,
		}));
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
messages.messageEditData#26b5dde6 flags:# caption:flags.0?true = messages.MessageEditData;
---functions---
messages.getMessageEditData#fda68d36 peer:InputPeer id:int = messages.MessageEditData;
```

## Parameters

|   Name   | Type                                                  | Description                   |
| :------: | ----------------------------------------------------- | ----------------------------- |
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Peer where the media was sent |
|  **id**  | [int](https://core.telegram.org/type/int)             | ID of message                 |

## Result

[messages.MessageEditData](https://core.telegram.org/type/messages.MessageEditData)

## Possible errors

| Code | Type                    | Description                                  |
| :--: | ----------------------- | -------------------------------------------- |
| 400  | CHAT_ADMIN_REQUIRED     | You must be an admin in this chat to do this |
| 403  | MESSAGE_AUTHOR_REQUIRED | Message author required                      |
| 400  | MESSAGE_ID_INVALID      | The provided message id is invalid           |
| 400  | PEER_ID_INVALID         | The provided peer id is invalid              |

## Can bots use this method?

Yes

## Related pages
