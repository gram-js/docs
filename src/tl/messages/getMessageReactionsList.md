# messages.getMessageReactionsList

Get full message reaction list

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.getMessageReactionsList({
		peer: new Api.InputPeer({...}),
		id: 3694644,
		reaction: 'random string here',
		offset: 'random string here',
		limit: 3992090,
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
    const result: Api.MessageReactionsList = await client.invoke(new Api.messages.getMessageReactionsList({
		peer: new Api.InputPeer({...}),
		id: 3694644,
		reaction: 'random string here',
		offset: 'random string here',
		limit: 3992090,
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

|     Name     | Type                                                                                                                           | Description                                                                                                                                     |
| :----------: | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
|  **flags**   | [#](https://core.telegram.org/type/%23)                                                                                        | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)                                         |
|   **peer**   | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                          | Peer                                                                                                                                            |
|    **id**    | [int](https://core.telegram.org/type/int)                                                                                      | Message ID                                                                                                                                      |
| **reaction** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](https://core.telegram.org/type/string) | Get only reactions of this type (UTF8 emoji)                                                                                                    |
|  **offset**  | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](https://core.telegram.org/type/string) | Offset (typically taken from the next_offset field of the returned [MessageReactionsList](https://core.telegram.org/type/MessageReactionsList)) |
|  **limit**   | [int](https://core.telegram.org/type/int)                                                                                      | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets)                                                    |

## Result

[MessageReactionsList](https://core.telegram.org/type/MessageReactionsList)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

Yes

## Related pages

#### [MessageReactionsList](https://core.telegram.org/type/MessageReactionsList)

List of message reactions

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
