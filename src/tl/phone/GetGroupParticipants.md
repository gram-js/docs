# phone.GetGroupParticipants

No description found

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
    new Api.phone.GetGroupParticipants({
      call: new Api.InputGroupCall({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
      ids: [43],
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
      ids: [43],
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

### [](#parameters)Parameters

|  Name   | Type           | Description          |
| :-----: | -------------- | -------------------- |
|  call   | InputGroupCall | No description found |
|   ids   | int            | No description found |
| sources | int            | No description found |
| offset  | string         | No description found |
|  limit  | int            | No description found |

### [](#result)Result

phone.GroupParticipants

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
