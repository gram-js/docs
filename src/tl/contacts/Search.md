# contacts.Search

Search for GIFs

### [](#example)Example

::::tabs
:::tab{title="JavaScript"}

```js
const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const session = new StringSession("");
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
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

const session = new StringSession("");
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
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

### [](#parameters)Parameters

|    Name    | Type | Description                                     |
| :--------: | ---- | ----------------------------------------------- | --- | ---------------------------------------------------------------- | --- |
|   **q**    |      | [string](https://core.telegram.org/type/string) |     | Text query                                                       |     |
| **offset** |      | [int](https://core.telegram.org/type/int)       |     | Offset for [pagination »](https://core.telegram.org/api/offsets) |     |

### [](#result)Result

[messages.FoundGifs](https://core.telegram.org/type/messages.FoundGifs)

### [](#possible-errors)Possible errors

| Code | Type | Description        |
| :--: | ---- | ------------------ | --- | ------------------------- | --- |
| 400  |      | SEARCH_QUERY_EMPTY |     | The search query is empty |     |

### [](#can-bots-use-this-method)Can bots use this methd ?

####Yes

### [](#related-pages)Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
