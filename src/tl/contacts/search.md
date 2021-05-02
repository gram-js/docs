# contacts.search

Returns users found by username substring.

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
        new Api.contacts.search({
            q: 'random string here',
            limit: 6849609,
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
    const result: Api.contacts.Found = await client.invoke(
        new Api.contacts.search({
            q: 'random string here',
            limit: 6849609,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```
contacts.found#b3134d9d my_results:Vector<Peer> results:Vector<Peer> chats:Vector<Chat> users:Vector<User> = contacts.Found;
---functions---
contacts.search#11f812d8 q:string limit:int = contacts.Found;
```

## Parameters

|   Name    | Type                                            | Description                            |
| :-------: | ----------------------------------------------- | -------------------------------------- |
|   **q**   | [string](https://core.telegram.org/type/string) | Target substring                       |
| **limit** | [int](https://core.telegram.org/type/int)       | Maximum number of users to be returned |

## Result

[contacts.Found](https://core.telegram.org/type/contacts.Found)

## Possible errors

| Code | Type               | Description                   |
| :--: | ------------------ | ----------------------------- |
| 400  | QUERY_TOO_SHORT    | The query string is too short |
| 400  | SEARCH_QUERY_EMPTY | The search query is empty     |

## Can bots use this method?

Yes

## Related pages
