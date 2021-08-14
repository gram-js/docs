# contacts.Search

Search for GIFs

## Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result = await client.invoke(
    new Api.contacts.Search({
      q: "some string here",
      limit: 100,
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

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result: Api.contacts.Found = await client.invoke(
    new Api.contacts.Search({
      q: "some string here",
      limit: 100,
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
