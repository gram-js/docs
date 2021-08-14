# messages.EditExportedChatInvite

No description found

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
    new Api.messages.EditExportedChatInvite({
      peer: "username",
      link: "some string here",
      revoked: true,
      expireDate: 43,
      usageLimit: 43,
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

  const result: Api.messages.ExportedChatInvite = await client.invoke(
    new Api.messages.EditExportedChatInvite({
      peer: "username",
      link: "some string here",
      revoked: true,
      expireDate: 43,
      usageLimit: 43,
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
|    link    | string    | No description found |
| expireDate | int       | No description found |
| usageLimit | int       | No description found |

## Result

messages.ExportedChatInvite

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages
