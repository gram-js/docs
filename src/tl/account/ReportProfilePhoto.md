# account.ReportProfilePhoto

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
    new Api.account.ReportProfilePhoto({
      peer: "username",
      photoId: new Api.InputPhoto({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
        fileReference: Buffer.from("arbitrary data here"),
      }),
      reason: new Api.InputReportReasonSpam({}),
      message: "Hello there!",
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
  const result: Api.Bool = await client.invoke(
    new Api.account.ReportProfilePhoto({
      peer: "username",
      photoId: new Api.InputPhoto({
        id: BigInt("-4156887774564"),
        accessHash: BigInt("-4156887774564"),
        fileReference: Buffer.from("arbitrary data here"),
      }),
      reason: new Api.InputReportReasonSpam({}),
      message: "Hello there!",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|  Name   | Type         | Description          |
| :-----: | ------------ | -------------------- |
|  peer   | InputPeer    | No description found |
| photoId | InputPhoto   | No description found |
| reason  | ReportReason | No description found |
| message | string       | No description found |

## Result

Bool

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages
