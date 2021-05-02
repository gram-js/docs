# messages.getMessagesReactions

Get message reactions

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.getMessagesReactions({
		peer: new Api.InputPeer({...}),
		id: [9196068],
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
    const result: Api.Updates = await client.invoke(new Api.messages.getMessagesReactions({
		peer: new Api.InputPeer({...}),
		id: [9196068],
		}));
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

|   Name   | Type                                                                                              | Description |
| :------: | ------------------------------------------------------------------------------------------------- | ----------- |
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer)                                             | Peer        |
|  **id**  | [Vector](https://core.telegram.org/type/Vector%20t) < [int](https://core.telegram.org/type/int) > | Message IDs |

## Result

[Updates](https://core.telegram.org/type/Updates)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages
