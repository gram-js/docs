# messages.Search

Search for GIFs

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const session = new StringSession("");
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  const result = await client.invoke(
    new Api.messages.Search({
      peer: "username",
      q: "some string here",
      filter: new Api.InputMessagesFilterPhotos({}),
      minDate: 43,
      maxDate: 43,
      offsetId: 43,
      addOffset: 0,
      limit: 100,
      maxId: 0,
      minId: 0,
      hash: 0,
      fromId: "username",
      topMsgId: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::

:::tab{title="TypeScript"}

```ts
import { Api, TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";

const session = new StringSession("");
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  const result: Api.messages.Messages = await client.invoke(
    new Api.messages.Search({
      peer: "username",
      q: "some string here",
      filter: new Api.InputMessagesFilterPhotos({}),
      minDate: 43,
      maxDate: 43,
      offsetId: 43,
      addOffset: 0,
      limit: 100,
      maxId: 0,
      minId: 0,
      hash: 0,
      fromId: "username",
      topMsgId: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

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

No

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
