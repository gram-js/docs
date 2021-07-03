# messages.GetExportedChatInvites

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
    new Api.messages.GetExportedChatInvites({
      peer: "username",
      adminId: "username",
      limit: 100,
      revoked: true,
      offsetDate: 43,
      offsetLink: "some string here",
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
  const result: Api.messages.ExportedChatInvites = await client.invoke(
    new Api.messages.GetExportedChatInvites({
      peer: "username",
      adminId: "username",
      limit: 100,
      revoked: true,
      offsetDate: 43,
      offsetLink: "some string here",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|    Name    | Type      | Description          |
| :--------: | --------- | -------------------- |
|  revoked   | true      | No description found |
|    peer    | InputPeer | No description found |
|  adminId   | InputUser | No description found |
| offsetDate | int       | No description found |
| offsetLink | string    | No description found |
|   limit    | int       | No description found |

## Result

messages.ExportedChatInvites

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages
