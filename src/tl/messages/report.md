# messages.report

Report a message in a chat for violation of telegram's Terms of Service

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.report({
		peer: new Api.InputPeer({...}),
		id: [5607770],
		reason: new Api.ReportReason({...}),
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
    const result: Api.Bool = await client.invoke(new Api.messages.report({
		peer: new Api.InputPeer({...}),
		id: [5607770],
		reason: new Api.ReportReason({...}),
		}));
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.report#bd82b658 peer:InputPeer id:Vector<int> reason:ReportReason = Bool;
```

## Parameters

|    Name    | Type                                                                                              | Description                           |
| :--------: | ------------------------------------------------------------------------------------------------- | ------------------------------------- |
|  **peer**  | [InputPeer](https://core.telegram.org/type/InputPeer)                                             | Peer                                  |
|   **id**   | [Vector](https://core.telegram.org/type/Vector%20t) < [int](https://core.telegram.org/type/int) > | IDs of messages to report             |
| **reason** | [ReportReason](https://core.telegram.org/type/ReportReason)                                       | Why are these messages being reported |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type            | Description                     |
| :--: | --------------- | ------------------------------- |
| 400  | PEER_ID_INVALID | The provided peer id is invalid |

## Can bots use this method?

Yes

## Related pages
