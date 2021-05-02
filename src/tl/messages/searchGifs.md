# messages.searchGifs

Search for GIFs

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
        new Api.messages.searchGifs({
            q: 'random string here',
            offset: 4235662,
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
    const result: Api.messages.FoundGifs = await client.invoke(
        new Api.messages.searchGifs({
            q: 'random string here',
            offset: 4235662,
        }),
    );
    console.log(result); // prints the result
})();
```

:::
::::

## TL schema

```txt
Method schema is available as of layer 114. Switch »
```

## Parameters

|    Name    | Type                                            | Description                                                      |
| :--------: | ----------------------------------------------- | ---------------------------------------------------------------- |
|   **q**    | [string](https://core.telegram.org/type/string) | Text query                                                       |
| **offset** | [int](https://core.telegram.org/type/int)       | Offset for [pagination »](https://core.telegram.org/api/offsets) |

## Result

[messages.FoundGifs](https://core.telegram.org/type/messages.FoundGifs)

## Possible errors

| Code | Type               | Description               |
| :--: | ------------------ | ------------------------- |
| 400  | SEARCH_QUERY_EMPTY | The search query is empty |

## Can bots use this method?

Yes

## Related pages

### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
