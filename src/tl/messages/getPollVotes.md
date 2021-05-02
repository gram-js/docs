# messages.getPollVotes

Get poll results for non-anonymous polls

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.getPollVotes({
		peer: new Api.InputPeer({...}),
		id: 8742352,
		option: Buffer.from('some bytes here'),
		offset: 'random string here',
		limit: 6055994,
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
    const result: Api.messages.VotesList = await client.invoke(new Api.messages.getPollVotes({
		peer: new Api.InputPeer({...}),
		id: 8742352,
		option: Buffer.from('some bytes here'),
		offset: 'random string here',
		limit: 6055994,
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
messages.votesList#823f649 flags:# count:int votes:Vector<MessageUserVote> users:Vector<User> next_offset:flags.0?string = messages.VotesList;
---functions---
messages.getPollVotes#b86e380e flags:# peer:InputPeer id:int option:flags.0?bytes offset:flags.1?string limit:int = messages.VotesList;
```

## Parameters

|                                                                                                                                 Name                                                                                                                                  | Type                                                                                                                           | Description                                                                                                                                                        |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                               **flags**                                                                                                                               | [#](https://core.telegram.org/type/%23)                                                                                        | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)                                                            |
|                                                                                                                               **peer**                                                                                                                                | [InputPeer](https://core.telegram.org/type/InputPeer)                                                                          | Chat where the poll was sent                                                                                                                                       |
|                                                                                                                                **id**                                                                                                                                 | [int](https://core.telegram.org/type/int)                                                                                      | Message ID                                                                                                                                                         |
|                                                                                                                              **option**                                                                                                                               | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[bytes](https://core.telegram.org/type/bytes)   | Get only results for the specified poll option                                                                                                                     |
|                                                                                                                              **offset**                                                                                                                               | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](https://core.telegram.org/type/string) | Offset for results, taken from the next_offset field of [messages.votesList](https://core.telegram.org/constructor/messages.votesList), initially an empty string. |
| Note: if no more results are available, the method call will return an empty next_offset; thus, avoid providing the next_offset returned in [messages.votesList](https://core.telegram.org/constructor/messages.votesList) if it is empty, to avoid an infinite loop. |
|                                                                                                                               **limit**                                                                                                                               | [int](https://core.telegram.org/type/int)                                                                                      | Number of results to return                                                                                                                                        |

## Result

[messages.VotesList](https://core.telegram.org/type/messages.VotesList)

## Possible errors

| Code | Type                | Description                                        |
| :--: | ------------------- | -------------------------------------------------- |
| 403  | BROADCAST_FORBIDDEN |                                                    |
| 400  | MSG_ID_INVALID      | Invalid message ID provided                        |
| 403  | POLL_VOTE_REQUIRED  | Cast a vote in the poll before calling this method |

## Can bots use this method?

Yes

## Related pages

#### [messages.votesList](https://core.telegram.org/constructor/messages.votesList)

How users voted in a poll
