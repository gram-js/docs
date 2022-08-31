# updates.GetDifference

Get new [updates](https://core.telegram.org/api/updates).

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
    new Api.updates.GetDifference({
      pts: 43,
      date: Date.now(),
      qts: 43,
      ptsTotalLimit: 43,
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

  const result: Api.updates.Difference = await client.invoke(
    new Api.updates.GetDifference({
      pts: 43,
      date: Date.now(),
      qts: 43,
      ptsTotalLimit: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|       Name        | Type                                                                                                                     | Description                                                                                                                                                                                                                                                                                                                                                     |
| :---------------: | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **flags**     | [#](https://core.telegram.org/type/%23)                                                                                  | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields)                                                                                                                                                                                                                                                         |
|      **pts**      | [int](https://core.telegram.org/type/int)                                                                                | PTS, see [updates](https://core.telegram.org/api/updates).                                                                                                                                                                                                                                                                                                      |
| **ptsTotalLimit** | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](https://core.telegram.org/type/int) | For fast updating: if provided and `pts + pts_total_limit < remote pts`, [updates.differenceTooLong](https://core.telegram.org/constructor/updates.differenceTooLong) will be returned.Simply tells the server to not return the difference if it is bigger than `pts_total_limit`If the remote pts is too big (> ~4000000), this field will default to 1000000 |
|     **date**      | [int](https://core.telegram.org/type/int)                                                                                | date, see [updates](https://core.telegram.org/api/updates).                                                                                                                                                                                                                                                                                                     |
|      **qts**      | [int](https://core.telegram.org/type/int)                                                                                | QTS, see [updates](https://core.telegram.org/api/updates).                                                                                                                                                                                                                                                                                                      |

## Result

[updates.Difference](https://core.telegram.org/type/updates.Difference)

## Possible errors

| Code | Type                         | Description                             |
| :--: | ---------------------------- | --------------------------------------- |
| 400  | CDN_METHOD_INVALID           | You can't call this method in a CDN DC. |
| 400  | CHANNEL_INVALID              | The provided channel is invalid.        |
| 403  | CHAT_WRITE_FORBIDDEN         | You can't write in this chat.           |
| 400  | DATE_EMPTY                   | Date empty.                             |
| 400  | MSG_ID_INVALID               | Invalid message ID provided.            |
| 400  | PERSISTENT_TIMESTAMP_EMPTY   | Persistent timestamp empty.             |
| 400  | PERSISTENT_TIMESTAMP_INVALID | Persistent timestamp invalid.           |

## Can bots use this method?

Yes

## Related pages

#### [Working with Updates](https://core.telegram.org/api/updates)

How to subscribe to updates and handle them properly.

#### [updates.differenceTooLong](https://core.telegram.org/constructor/updates.differenceTooLong)

The difference is [too long](https://core.telegram.org/api/updates#recovering-gaps), and the specified state must be used to refetch updates.
