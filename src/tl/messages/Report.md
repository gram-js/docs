# messages.Report

Report a peer for violation of telegram's Terms of Service

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
    new Api.messages.Report({
      peer: "username",
      id: [43],
      reason: new Api.InputReportReasonSpam({}),
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
    new Api.messages.Report({
      peer: "username",
      id: [43],
      reason: new Api.InputReportReasonSpam({}),
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

### [](#parameters)Parameters

|    Name    | Type | Description                                                 |
| :--------: | ---- | ----------------------------------------------------------- | --- | ------------------------------------------ | --- |
|  **peer**  |      | [InputPeer](https://core.telegram.org/type/InputPeer)       |     | The peer to report                         |     |
| **reason** |      | [ReportReason](https://core.telegram.org/type/ReportReason) |     | The reason why this peer is being reported |     |

### [](#result)Result

[Bool](https://core.telegram.org/type/Bool)

### [](#possible-errors)Possible errors

| Code | Type | Description     |
| :--: | ---- | --------------- | --- | ------------------------------------------ | --- |
| 400  |      | CHANNEL_PRIVATE |     | You haven't joined this channel/supergroup |     |
| 400  |      | PEER_ID_INVALID |     | The provided peer id is invalid            |     |

### [](#can-bots-use-this-method)Can bots use this methd ?

####Yes

### [](#related-pages)Related pages
