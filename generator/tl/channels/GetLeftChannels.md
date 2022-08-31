# channels.GetLeftChannels

Get a list of [channels/supergroups](https://core.telegram.org/api/channel) we left

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
    new Api.channels.GetLeftChannels({
      offset: 43,
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
    new Api.channels.GetLeftChannels({
      offset: 43,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name    | Type                                      | Description                                                    |
| :--------: | ----------------------------------------- | -------------------------------------------------------------- |
| **offset** | [int](https://core.telegram.org/type/int) | Offset for [pagination](https://core.telegram.org/api/offsets) |

## Result

[messages.Chats](https://core.telegram.org/type/messages.Chats)

## Possible errors

| Code | Type             | Description                                     |
| :--: | ---------------- | ----------------------------------------------- |
| 403  | TAKEOUT_REQUIRED | A takeout session has to be initialized, first. |

## Can bots use this method?

No

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
