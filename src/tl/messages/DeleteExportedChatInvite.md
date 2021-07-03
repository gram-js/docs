# messages.DeleteExportedChatInvite

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

const session = new StringSession("");
const client = new TelegramClient(session, apiId, apiHash, {});

(async function run() {
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

| Name | Type      | Description          |
| :--: | --------- | -------------------- |
| peer | InputPeer | No description found |
| link | string    | No description found |

## Result

Bool

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages
