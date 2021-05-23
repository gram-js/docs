# phone.DiscardCall

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
    new Api.phone.DiscardCall({
      peer: new Api.InputPhoneCall({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
      duration: 43,
      reason: new Api.PhoneCallDiscardReasonMissed({}),
      connectionId: BigInt("-4156887774564"),
      video: true,
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
  const result: Api.Updates = await client.invoke(
    new Api.phone.DiscardCall({
      peer: new Api.InputPhoneCall({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
      }),
      duration: 43,
      reason: new Api.PhoneCallDiscardReasonMissed({}),
      connectionId: BigInt("-4156887774564"),
      video: true,
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|     Name     | Type                   | Description          |
| :----------: | ---------------------- | -------------------- |
|    video     | true                   | No description found |
|     peer     | InputPhoneCall         | No description found |
|   duration   | int                    | No description found |
|    reason    | PhoneCallDiscardReason | No description found |
| connectionId | long                   | No description found |

### [](#result)Result

Updates

### [](#possible-errors)Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

### [](#can-bots-use-this-method)Can bots use this methd ?

####No

### [](#related-pages)Related pages
