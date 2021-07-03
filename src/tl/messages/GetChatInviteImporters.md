# messages.GetChatInviteImporters

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
    new Api.messages.GetChatInviteImporters({
      peer: "username",
      link: "some string here",
      offsetDate: 43,
      offsetUser: "username",
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
  const result: Api.messages.ChatInviteImporters = await client.invoke(
    new Api.messages.GetChatInviteImporters({
      peer: "username",
      link: "some string here",
      offsetDate: 43,
      offsetUser: "username",
      limit: 100,
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
|    peer    | InputPeer | No description found |
|    link    | string    | No description found |
| offsetDate | int       | No description found |
| offsetUser | InputUser | No description found |
|   limit    | int       | No description found |

## Result

messages.ChatInviteImporters

## Possible errors

| Code | Type | Description |
| :--: | ---- | ----------- |

## Can bots use this method?

No

## Related pages
