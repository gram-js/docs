# messages.GetSearchResultsPositions

Returns sparse positions of messages of the specified type in the chat to be used for shared media scroll implementation.

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
    new Api.messages.GetSearchResultsPositions({
      peer: "username",
      filter: new Api.InputMessagesFilterPhotos({}),
      offsetId: 43,
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

  const result: Api.messages.SearchResultsPositions = await client.invoke(
    new Api.messages.GetSearchResultsPositions({
      peer: "username",
      filter: new Api.InputMessagesFilterPhotos({}),
      offsetId: 43,
      limit: 100,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name     | Type                                                            | Description                                                                                                                                                                                                                                                |
| :----------: | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   **peer**   | [InputPeer](https://core.telegram.org/type/InputPeer)           | Peer where to search                                                                                                                                                                                                                                       |
|  **filter**  | [MessagesFilter](https://core.telegram.org/type/MessagesFilter) | Message filter, [inputMessagesFilterEmpty](https://core.telegram.org/constructor/inputMessagesFilterEmpty), [inputMessagesFilterMyMentions](https://core.telegram.org/constructor/inputMessagesFilterMyMentions) filters are not supported by this method. |
| **offsetId** | [int](https://core.telegram.org/type/int)                       | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets)                                                                                                                                                                  |
|  **limit**   | [int](https://core.telegram.org/type/int)                       | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets)                                                                                                                                                               |

## Result

[messages.SearchResultsPositions](https://core.telegram.org/type/messages.SearchResultsPositions)

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages

#### [inputMessagesFilterEmpty](https://core.telegram.org/constructor/inputMessagesFilterEmpty)

Filter is absent.

#### [inputMessagesFilterMyMentions](https://core.telegram.org/constructor/inputMessagesFilterMyMentions)

Return only messages where the current user was [mentioned](https://core.telegram.org/api/mentions).

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
