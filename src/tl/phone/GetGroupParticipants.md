# phone.GetGroupParticipants

No description found

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
    new Api.phone.GetGroupParticipants({
      call: new Api.InputGroupCall({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
      ids: ["username"],
      sources: [43],
      offset: "some string here",
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
  const result: Api.phone.GroupParticipants = await client.invoke(
    new Api.phone.GetGroupParticipants({
      call: new Api.InputGroupCall({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
      ids: ["username"],
      sources: [43],
      offset: "some string here",
      limit: 100,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|  Name   | Type           | Description          |
| :-----: | -------------- | -------------------- |
|  call   | InputGroupCall | No description found |
|   ids   | InputPeer      | No description found |
| sources | int            | No description found |
| offset  | string         | No description found |
|  limit  | int            | No description found |

## Result

phone.GroupParticipants

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages
