# contacts.ResetTopPeerRating

Reset [rating](https://core.telegram.org/api/top-rating) of top peer

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
    new Api.contacts.ResetTopPeerRating({
      category: new Api.TopPeerCategoryBotsPM({}),
      peer: "username",
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

  const result: Api.Bool = await client.invoke(
    new Api.contacts.ResetTopPeerRating({
      category: new Api.TopPeerCategoryBotsPM({}),
      peer: "username",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|     Name     | Type                                                              | Description                       |
| :----------: | ----------------------------------------------------------------- | --------------------------------- |
| **category** | [TopPeerCategory](https://core.telegram.org/type/TopPeerCategory) | Top peer category                 |
|   **peer**   | [InputPeer](https://core.telegram.org/type/InputPeer)             | Peer whose rating should be reset |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type            | Description                      |
| :--: | --------------- | -------------------------------- |
| 400  | PEER_ID_INVALID | The provided peer id is invalid. |

## Can bots use this method?

No

## Related pages

#### [Top peer rating](https://core.telegram.org/api/top-rating)

If enabled, the rating of top peers indicates the relevance of a frequently used peer in a certain category (frequently messaged users, frequently used bots, inline bots, frequently visited channels and so on).
