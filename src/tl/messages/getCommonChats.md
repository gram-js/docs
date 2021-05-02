# messages.getCommonChats

Get chats in common with a user

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const {Api, TelegramClient} = require('telegram');
const {StringSession} = require('telegram/sessions');

const session = new StringSession('');
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
    const result = await client.invoke(new Api.messages.getCommonChats({
		userId: new Api.InputUser({...}),
		maxId: 2759156,
		limit: 5781511,
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
    const result: Api.messages.Chats = await client.invoke(new Api.messages.getCommonChats({
		userId: new Api.InputUser({...}),
		maxId: 2759156,
		limit: 5781511,
		}));
    console.log(result); // prints the result
})();

```

:::
::::

## TL schema

```
messages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;
messages.chatsSlice#9cd81144 count:int chats:Vector<Chat> = messages.Chats;
---functions---
messages.getCommonChats#d0a48c4 user_id:InputUser max_id:int limit:int = messages.Chats;
```

## Parameters

|    Name     | Type                                                  | Description                                                                                  |
| :---------: | ----------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **user_id** | [InputUser](https://core.telegram.org/type/InputUser) | User ID                                                                                      |
| **max_id**  | [int](https://core.telegram.org/type/int)             | Maximum ID of chat to return (see [pagination](https://core.telegram.org/api/offsets))       |
|  **limit**  | [int](https://core.telegram.org/type/int)             | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |

## Result

[messages.Chats](https://core.telegram.org/type/messages.Chats)

## Possible errors

| Code | Type            | Description                     |
| :--: | --------------- | ------------------------------- |
| 400  | MSG_ID_INVALID  | Invalid message ID provided     |
| 400  | USER_ID_INVALID | The provided user ID is invalid |

## Can bots use this method?

Yes

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
