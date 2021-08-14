# messages.Report

Report a peer for violation of telegram's Terms of Service

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
    new Api.messages.Report({
      peer: "username",
      id: [43],
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

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result: Api.Bool = await client.invoke(
    new Api.messages.Report({
      peer: "username",
      id: [43],
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

|    Name    | Type                                                        | Description                                |
| :--------: | ----------------------------------------------------------- | ------------------------------------------ |
|  **peer**  | [InputPeer](https://core.telegram.org/type/InputPeer)       | The peer to report                         |
| **reason** | [ReportReason](https://core.telegram.org/type/ReportReason) | The reason why this peer is being reported |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type            | Description                                |
| :--: | --------------- | ------------------------------------------ |
| 400  | CHANNEL_PRIVATE | You haven't joined this channel/supergroup |
| 400  | PEER_ID_INVALID | The provided peer id is invalid            |

## Can bots use this method?

No

## Related pages
