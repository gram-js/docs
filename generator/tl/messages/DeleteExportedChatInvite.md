# messages.DeleteExportedChatInvite

Delete a chat invite

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
    new Api.messages.DeleteExportedChatInvite({
      peer: "username",
      link: "some string here",
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
    new Api.messages.DeleteExportedChatInvite({
      peer: "username",
      link: "some string here",
    })
  );
  console.log(result); // prints the result
})();
```

:::
::::

## Parameters

|   Name   | Type                                                  | Description |
| :------: | ----------------------------------------------------- | ----------- |
| **peer** | [InputPeer](https://core.telegram.org/type/InputPeer) | Peer        |
| **link** | [string](https://core.telegram.org/type/string)       | Invite link |

## Result

[Bool](https://core.telegram.org/type/Bool)

## Possible errors

| Code | Type                   | Description                                                  |
| :--: | ---------------------- | ------------------------------------------------------------ |
| 400  | INVITE_REVOKED_MISSING | The specified invite link was already revoked or is invalid. |

## Can bots use this method?

No

## Related pages
