# messages.GetCommonChats

Get chats in common with a user

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
    new Api.messages.GetCommonChats({
      userId: "username",
      maxId: 0,
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

  const result: Api.messages.Chats = await client.invoke(
    new Api.messages.GetCommonChats({
      userId: "username",
      maxId: 0,
      limit: 100,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name    | Type                                                  | Description                                                                                  |
| :--------: | ----------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **userId** | [InputUser](https://core.telegram.org/type/InputUser) | User ID                                                                                      |
| **maxId**  | [long](https://core.telegram.org/type/long)           | Maximum ID of chat to return (see [pagination](https://core.telegram.org/api/offsets))       |
| **limit**  | [int](https://core.telegram.org/type/int)             | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |

## Result

[messages.Chats](https://core.telegram.org/type/messages.Chats)

## Possible errors

| Code | Type            | Description                      |
| :--: | --------------- | -------------------------------- |
| 400  | MSG_ID_INVALID  | Invalid message ID provided.     |
| 400  | USER_ID_INVALID | The provided user ID is invalid. |

## Can bots use this method?

No

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
